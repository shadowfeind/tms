"use server";

import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

interface LoginErrorState {
  errors: {
    userName?: string[];
    password?: string[];
    _form?: string[];
  };
}

export const login = async (
  prevState: LoginErrorState,
  formData: FormData
): Promise<LoginErrorState> => {
  const validatedFields = loginSchema.safeParse({
    userName: formData.get("userName"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { userName, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      userName,
      password,
      redirectTo: LOGIN_REDIRECT,
    });
    return { errors: {} };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { errors: { _form: ["Invalid Credentials"] } };
        default:
          return { errors: { _form: ["Something went wrong"] } };
      }
    }
    throw error;
  }
};
