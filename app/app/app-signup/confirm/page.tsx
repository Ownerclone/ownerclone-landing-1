'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function ConfirmContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || 'your email'

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

        {/* Confirmation Card */}
        <div 
          className="backdrop-blur-xl border-2 rounded-2xl p-8 text-center"
          style={{ 
            background: 'var(--glass-bg)', 
            borderColor: 'var(--brand-primary)',
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.2)'
          }}
        >
          {/* Email Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
            <svg className="w-10 h-10" style={{ color: 'var(--brand-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Check Your Email
          </h1>
          
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            We've sent a confirmation link to<br />
            <strong style={{ color: 'var(--brand-primary)' }}>{email}</strong>
          </p>

          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            Click the link in the email to verify your account and start your free trial.
          </p>

          {/* Helpful Tips */}
          <div 
            className="text-left p-4 rounded-lg mb-6"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}
          >
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Didn't receive the email?
            </h3>
            <ul className="text-sm space-y-1" style={{ color: 'var(--text-secondary)' }}>
              <li>• Check your spam or junk folder</li>
              <li>• Make sure you entered the correct email</li>
              <li>• Wait a few minutes and check again</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link 
              href="/app-signup"
              className="block w-full py-3 rounded-lg font-semibold transition-all border"
              style={{ 
                background: 'transparent',
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)'
              }}
            >
              Try Different Email
            </Link>
            
            <Link 
              href="/"
              className="block text-sm transition"
              style={{ color: 'var(--text-muted)' }}
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading...</div>
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  )
}
