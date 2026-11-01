"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

export interface ContactActionState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

const resend = new Resend(process.env.RESEND_API_KEY || "re_not_configured");

export async function submitContactForm(
  prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;
  const recipientEmail = process.env.CONTACT_EMAIL;

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return {
      success: false,
      message: "خطا در تنظیمات سرور: سرویس ارسال ایمیل پیکربندی نشده است.",
    };
  }

  if (!recipientEmail) {
    console.error("Missing CONTACT_EMAIL environment variable.");
    return {
      success: false,
      message: "خطا در تنظیمات سرور: آدرس ایمیل دریافت‌کننده تنظیم نشده است.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      replyTo: email,
      subject: `New Enterprise Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="fa" dir="rtl">
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: #050914;
                color: #ffffff;
                padding: 24px;
                margin: 0;
              }
              .card {
                background-color: #0B132B;
                border: 1px solid #D4AF37;
                border-radius: 12px;
                padding: 24px;
                max-width: 600px;
                margin: 0 auto;
              }
              .header {
                border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                padding-bottom: 16px;
                margin-bottom: 20px;
              }
              .title {
                font-size: 20px;
                font-weight: bold;
                color: #D4AF37;
                margin: 0;
              }
              .field {
                margin-bottom: 16px;
              }
              .label {
                font-size: 13px;
                color: #94A3B8;
                margin-bottom: 4px;
              }
              .value {
                font-size: 15px;
                color: #F1F5F9;
                line-height: 1.6;
              }
              .message-box {
                background-color: rgba(28, 37, 65, 0.5);
                border: 1px solid rgba(212, 175, 55, 0.15);
                border-radius: 8px;
                padding: 16px;
                margin-top: 8px;
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 24px;
                font-size: 12px;
                color: #64748B;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1 class="title">درخواست تماس / همکاری سازمانی جدید</h1>
              </div>
              <div class="field">
                <div class="label">نام و نام خانوادگی فرستنده:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">آدرس ایمیل فرستنده:</div>
                <div class="value" dir="ltr" style="text-align: right;">${email}</div>
              </div>
              <div class="field">
                <div class="label">متن پیام:</div>
                <div class="value message-box">${message}</div>
              </div>
              <div class="footer">
                این پیام از طریق فرم تماس پرتال Mahdi Mohebi Nia ارسال شده است.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API delivery error:", error);
      return {
        success: false,
        message: "خطایی در پردازش و ارسال ایمیل رخ داد. لطفاً بعداً تلاش فرمایید.",
      };
    }

    return {
      success: true,
      message: "پیام شما با موفقیت ارسال شد و در اسرع وقت پاسخ داده خواهد شد.",
    };
  } catch (error) {
    console.error("Unexpected error in submitContactForm:", error);
    return {
      success: false,
      message: "ارتباط با سرور ایمیل برقرار نشد. لطفاً بعداً مجدداً تلاش فرمایید.",
    };
  }
}
