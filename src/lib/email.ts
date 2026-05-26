import { ENV } from "@/config/env";
import { Resend } from "resend";

const resend = new Resend(ENV.RESEND_API_KEY);

interface SendEmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: SendEmailOptions) {
  await resend.emails.send({
    from: ENV.EMAIL_FROM,
    to,
    subject,
    text,
  });
}
