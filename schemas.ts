import { Fullscreen } from "lucide-react";
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

export const editUserSchema = z.object({
  fullName: string().max(50),
  email: z.string().email().optional(),
  userName: z.string().min(3).max(50).optional(),
  phone: z.string().refine((value) => phoneRegExp.test(value), {
    message: "Invalid phone number format. Must be 10 digits.",
  }),
  password: string().min(3).optional(),
  role: string(),
});

export const updateUserSchema = z.object({
  fullName: string().max(50),
  phone: z.string().refine((value) => phoneRegExp.test(value), {
    message: "Invalid phone number format. Must be 10 digits.",
  }),
  role: string(),
});
