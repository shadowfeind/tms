import NextAuth from "next-auth";
import authconfig from "./authconfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
  },
  session: { strategy: "jwt" },
  ...authconfig,
});
