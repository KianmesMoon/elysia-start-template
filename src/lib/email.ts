import { EMAIL_FROM, RESEND_API_KEY } from "@/config/env";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

interface SendEmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: SendEmailOptions) {
  await resend.emails.send({
    from: EMAIL_FROM!,
    to,
    subject,
    text,
  });
}
