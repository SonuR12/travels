"use server";

import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schema";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `Travel.com <${process.env.RESEND_FROM_EMAIL || "Your Name <you@yourdomain.com>"}>`, // Use a verified email address
      to: ["sonukumar9905757@gmail.com"], // Replace with the recipient's email
      subject: "New Contact Form Submission",
      react: await Promise.resolve(
        EmailTemplate({
          firstName: emailFormData.firstName,
          lastName: emailFormData.lastName,
          email: emailFormData.email,
          contactNo: emailFormData.contactNo,
          message: emailFormData.message,
        })
      ),
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return data; // Return the response data if the email is sent successfully
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error("An error occurred while sending the email.");
  }
};
