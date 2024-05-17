import NextAuth from "next-auth";
import authconfig from "./authconfig";
import { getUserById } from "./queries/user";

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
    async session({ session, token }: any) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      if (token.fullName) {
        session.user.name = token.fullName;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      token.fullName = existingUser.fullName;

      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authconfig,
});
