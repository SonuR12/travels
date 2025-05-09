import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "Enter your First name"),
  lastName: z.string().min(2, "Enter your Last name"),
  email: z.string().email("Enter your email address."),
  contactNo: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(12, "Phone number is too long."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})