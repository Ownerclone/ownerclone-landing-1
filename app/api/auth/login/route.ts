import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    // Check credentials against environment variables
    const validUsername = process.env.ADMIN_USERNAME || 'Mateo'
    const validPassword = process.env.ADMIN_PASSWORD || 'V00rhees1976!'

    if (username === validUsername && password === validPassword) {
      // Create JWT token
      const secret = new TextEncoder().encode(
        process.env.AUTH_SECRET || 'your-secret-key-change-this'
      )

      const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret)

      // Create response with cookie
      const response = NextResponse.json({ success: true })
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })

      return response
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
