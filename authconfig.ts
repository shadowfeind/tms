import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getUserByUserName } from "./queries/user";
import { loginSchema } from "./schemas";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { userName, password } = validatedFields.data;

          const user = await getUserByUserName(userName);

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
          console.log({ user, note: "nice nice nice" });
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
