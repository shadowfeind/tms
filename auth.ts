import NextAuth from "next-auth";
import authconfig from "./authconfig";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session, token }) {
      console.log({ session, token });
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authconfig,
});
