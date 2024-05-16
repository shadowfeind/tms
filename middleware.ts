import NextAuth from "next-auth";
import authconfig from "./authconfig";
import { publicRoutes } from "./routes";

const { auth } = NextAuth(authconfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  // Redirect logged-in users from "/" to "/dashboard"
  if (isLoggedIn && nextUrl.pathname === "/") {
    return Response.redirect(new URL("/dashboard", req.url));
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return;
});
