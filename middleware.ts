import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET не установлен')
}

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET as string,
    salt: process.env.NEXTAUTH_SECRET
  })
  
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard')
  const isPublicRoute = ['/', '/contact'].includes(request.nextUrl.pathname)

  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL('/dashboard/overview', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/contact', '/dashboard/:path*']
}
