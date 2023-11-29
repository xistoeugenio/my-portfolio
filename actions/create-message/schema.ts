import * as z from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createMessage = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .min(1)
    .max(255)
    .refine((value) => emailRegex.test(value), {
      message: "Invalid email address",
    }),
  phoneNumber: z.string().optional(),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});