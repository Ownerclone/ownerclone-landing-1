import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect all /adminlogin routes EXCEPT the login page itself
  if (pathname.startsWith('/adminlogin')) {
    // Allow access to login page and API routes
    if (pathname === '/adminlogin' || pathname.startsWith('/adminlogin/api')) {
      return NextResponse.next()
    }

    // Check for auth token
    const token = request.cookies.get('admin-token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/adminlogin', request.url))
    }

    try {
      // Verify JWT token
      const secret = new TextEncoder().encode(
        process.env.AUTH_SECRET || 'your-secret-key-change-this'
      )
      await jwtVerify(token, secret)
      return NextResponse.next()
    } catch (error) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/adminlogin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/adminlogin/:path*'
}
