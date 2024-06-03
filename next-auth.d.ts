import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      role?: string;
      fullName?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string;
    fullName?: string;
  }
}
