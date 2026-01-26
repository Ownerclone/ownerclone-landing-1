'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [resetEmail, setResetEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      // TODO: Connect to Supabase Auth
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email: formData.email,
      //   password: formData.password
      // })
      
      console.log('Login data:', formData)
      router.push('/app-dashboard')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const handleOAuth = async (provider: 'google' | 'apple') => {
    setLoading(true)
    try {
      // TODO: Connect to Supabase OAuth
      // const { data, error } = await supabase.auth.signInWithOAuth({
      //   provider: provider,
      //   options: {
      //     redirectTo: `${window.location.origin}/app-dashboard`
      //   }
      // })
      console.log(`OAuth with ${provider}`)
    } catch (err) {
      setError(`Failed to sign in with ${provider}`)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // TODO: Connect to Supabase Auth
      // const { data, error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      //   redirectTo: `${window.location.origin}/reset-password`
      // })
      
      console.log('Reset password for:', resetEmail)
      setResetSent(true)
    } catch (err) {
      setError('Failed to send reset email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <svg viewBox="-5 0 85 60" className="h-12 w-auto">
              <circle cx="20" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10"/>
              <circle cx="48" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
            </svg>
            <span className="text-2xl font-black text-white">OwnerClone</span>
          </Link>
        </div>

        {/* Login Card */}
        <div 
          className="backdrop-blur-xl border-2 rounded-2xl p-8"
          style={{ 
            background: 'var(--glass-bg)', 
            borderColor: 'var(--brand-primary)',
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.2)'
          }}
        >
          {!showForgotPassword ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--text-primary)' }}>
                Welcome Back
              </h1>
              <p className="text-center mb-6" style={{ color: 'var(--text-secondary)' }}>
                Sign in to your OwnerClone account
              </p>

              {/* OAuth Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleOAuth('google')}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all border"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    borderColor: 'var(--glass-border)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <button
                  onClick={() => handleOAuth('apple')}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all border"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    borderColor: 'var(--glass-border)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px" style={{ background: 'var(--glass-border)' }}></div>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>or</span>
                <div className="flex-1 h-px" style={{ background: 'var(--glass-border)' }}></div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                  {error}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{ 
                      background: 'rgba(0,0,0,0.4)', 
                      borderColor: 'var(--glass-border)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="you@restaurant.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                    style={{ 
                      background: 'rgba(0,0,0,0.4)', 
                      borderColor: 'var(--glass-border)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="••••••••"
                  />
                </div>

                <div className="text-right">
                  <button 
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm transition"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-50"
                  style={{ 
                    background: 'var(--btn-primary-bg)',
                    color: 'var(--btn-primary-text)'
                  }}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              {/* Signup Link */}
              <p className="mt-6 text-center" style={{ color: 'var(--text-secondary)' }}>
                Don't have an account?{' '}
                <Link href="/signup" className="font-semibold" style={{ color: 'var(--brand-primary)' }}>
                  Start free trial
                </Link>
              </p>
            </>
          ) : (
            <>
              {/* Forgot Password View */}
              <button 
                onClick={() => {
                  setShowForgotPassword(false)
                  setResetSent(false)
                  setError('')
                }}
                className="flex items-center gap-2 mb-6 transition"
                style={{ color: 'var(--brand-primary)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to login
              </button>

              <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Reset Password
              </h1>
              
              {!resetSent ? (
                <>
                  <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Enter your email and we'll send you a link to reset your password.
                  </p>

                  {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleForgotPassword} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                        style={{ 
                          background: 'rgba(0,0,0,0.4)', 
                          borderColor: 'var(--glass-border)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="you@restaurant.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-50"
                      style={{ 
                        background: 'var(--btn-primary-bg)',
                        color: 'var(--btn-primary-text)'
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Check your email</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    We've sent a password reset link to <strong>{resetEmail}</strong>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
