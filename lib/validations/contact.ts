import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "نام باید حداقل شامل ۲ کاراکتر باشد."),
  email: z
    .string()
    .trim()
    .email("لطفاً یک آدرس ایمیل معتبر وارد کنید."),
  message: z
    .string()
    .trim()
    .min(10, "پیام باید حداقل شامل ۱۰ کاراکتر باشد.")
    .max(500, "پیام نمی‌تواند بیشتر از ۵۰۰ کاراکتر باشد."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
