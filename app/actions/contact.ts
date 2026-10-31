"use server";

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

  // Simulate network processing / notification dispatcher
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "پیام شما با موفقیت ارسال شد.",
  };
}
