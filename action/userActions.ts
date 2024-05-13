"use server";

import { getUserByEmail, getUserByUserName } from "@/queries/user";
import { createUserSchema, updateUserSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Role } from "@prisma/client";

export const createUser = async (user: z.infer<typeof createUserSchema>) => {
  const validateFields = createUserSchema.safeParse(user);

  if (!validateFields.success) return { error: "Invalid Fields" };

  const { userName, fullName, email, password, phone, role } =
    validateFields.data;

  const emailExists = await getUserByEmail(email);

  if (emailExists) return { error: "Email already exists" };

  const userNameExists = await getUserByUserName(userName);

  if (userNameExists) return { error: "Username already exists" };

  const hashedPassword = await bcrypt.hash(password, 10);

  const roleValue: Role = role as Role;

  await db.user.create({
    data: {
      fullName,
      userName,
      email,
      phone,
      role: roleValue,
      password: hashedPassword,
    },
  });

  revalidatePath("/dashboard/users");
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    select: {
      fullName: true,
      email: true,
      userName: true,
      phone: true,
      role: true,
    },
  });

  return user;
};

export const updateUser = async (
  user: z.infer<typeof updateUserSchema>,
  id: string
) => {
  if (!id) return { error: "Invalid User id" };
  const validateFields = updateUserSchema.safeParse(user);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { fullName, phone, role } = validateFields.data;

  const roleValue: Role = role as Role;

  await db.user.update({
    where: { id },
    data: {
      fullName,
      role: roleValue,
      phone,
    },
  });

  revalidatePath("/dashboard/users");
};
