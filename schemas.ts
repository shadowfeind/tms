import { string, z } from "zod";

const phoneRegExp = /^\d{10}$/;

export const createUserSchema = z.object({
  fullName: string().max(50),
  email: string().email(),
  userName: string().min(3).max(50),
  phone: z.string().refine((value) => phoneRegExp.test(value), {
    message: "Invalid phone number format. Must be 10 digits.",
  }),
  password: string().min(3),
  role: string(),
});
