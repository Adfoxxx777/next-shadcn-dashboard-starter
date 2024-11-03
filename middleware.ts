// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import authConfig from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAccessingProtectedRoute =
    req.nextUrl.pathname.startsWith('/dashboard');

  if (isAccessingProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL('/auth/signin', req.url));
  }
});

export const config = { matcher: ['/dashboard/:path*'] };
