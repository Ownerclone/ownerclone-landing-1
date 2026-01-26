'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabasePlatform } from '@/lib/supabase-platform'

export default function AuthCallbackPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the session from URL hash
        const { data: { session }, error: sessionError } = await supabasePlatform.auth.getSession()
        
        if (sessionError) {
          setError(sessionError.message)
          return
        }

        if (session?.user) {
          // Check if user has an organization
          const { data: teamMember } = await supabasePlatform
            .from('team_members')
            .select('organization_id')
            .eq('profile_id', session.user.id)
            .single()

          if (!teamMember) {
            // New OAuth user - redirect to onboarding to create org
            router.push('/app-onboarding')
          } else {
            // Existing user - go to dashboard
            router.push('/app-dashboard')
          }
        } else {
          setError('No session found')
        }
      } catch (err: any) {
        setError(err.message)
      }
    }

    handleCallback()
  }, [router])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div 
          className="backdrop-blur-xl border-2 rounded-2xl p-8 max-w-md w-full text-center"
          style={{ 
            background: 'var(--glass-bg)', 
            borderColor: 'var(--brand-primary)'
          }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-500/20">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Authentication Error
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{error}</p>
          <a 
            href="/app-login" 
            className="inline-block px-6 py-2 rounded-lg font-semibold"
            style={{ background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
          >
            Try Again
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div 
        className="backdrop-blur-xl border-2 rounded-2xl p-8 max-w-md w-full text-center"
        style={{ 
          background: 'var(--glass-bg)', 
          borderColor: 'var(--brand-primary)'
        }}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(34, 211, 238, 0.2)' }}>
          <svg className="w-8 h-8 animate-spin" style={{ color: 'var(--brand-primary)' }} fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Signing you in...
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>Please wait while we complete authentication.</p>
      </div>
    </div>
  )
}
