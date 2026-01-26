'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabasePlatform } from '@/lib/supabase-platform'

export default function OnboardingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [error, setError] = useState('')
  const [userId, setUserId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantWebsite: '',
    phone: ''
  })

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabasePlatform.auth.getSession()
      
      if (!session?.user) {
        router.push('/app-login')
        return
      }

      // Check if user already has an org
      const { data: teamMember } = await supabasePlatform
        .from('team_members')
        .select('organization_id')
        .eq('profile_id', session.user.id)
        .single()

      if (teamMember) {
        // Already has org, go to dashboard
        router.push('/app-dashboard')
        return
      }

      setUserId(session.user.id)
      setCheckingAuth(false)
    }

    checkAuth()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!formData.restaurantName.trim()) {
      setError('Restaurant name is required')
      return
    }

    setLoading(true)
    
    try {
      // Update profile with phone if provided
      if (formData.phone) {
        await supabasePlatform
          .from('profiles')
          .update({ phone: formData.phone })
          .eq('id', userId)
      }

      // Create organization and restaurant
      const { error: orgError } = await supabasePlatform.rpc('setup_new_user_organization', {
        p_user_id: userId,
        p_restaurant_name: formData.restaurantName,
        p_restaurant_website: formData.restaurantWebsite || null
      })

      if (orgError) {
        setError(orgError.message)
        return
      }

      router.push('/app-dashboard')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <svg viewBox="-5 0 85 60" className="h-12 w-auto">
              <circle cx="20" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10"/>
              <circle cx="48" cy="30" r="18" fill="none" className="logo-color" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
            </svg>
            <span className="text-2xl font-black text-white">OwnerClone</span>
          </div>
        </div>

        {/* Onboarding Card */}
        <div 
          className="backdrop-blur-xl border-2 rounded-2xl p-8"
          style={{ 
            background: 'var(--glass-bg)', 
            borderColor: 'var(--brand-primary)',
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.2)'
          }}
        >
          <h1 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--text-primary)' }}>
            Welcome to OwnerClone! 🎉
          </h1>
          <p className="text-center mb-6" style={{ color: 'var(--text-secondary)' }}>
            Let's set up your restaurant to get started.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex-1 h-2 rounded-full" style={{ background: 'var(--brand-primary)' }}></div>
            <div className="flex-1 h-2 rounded-full" style={{ background: 'var(--glass-border)' }}></div>
            <div className="flex-1 h-2 rounded-full" style={{ background: 'var(--glass-border)' }}></div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                Restaurant Name *
              </label>
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  borderColor: 'var(--glass-border)',
                  color: 'var(--text-primary)'
                }}
                placeholder="Joe's Diner"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                Restaurant Website <span className="text-xs font-normal" style={{ color: 'var(--text-muted)' }}>(optional)</span>
              </label>
              <input
                type="url"
                name="restaurantWebsite"
                value={formData.restaurantWebsite}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  borderColor: 'var(--glass-border)',
                  color: 'var(--text-primary)'
                }}
                placeholder="https://joesdiner.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                Phone Number <span className="text-xs font-normal" style={{ color: 'var(--text-muted)' }}>(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
                style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  borderColor: 'var(--glass-border)',
                  color: 'var(--text-primary)'
                }}
                placeholder="(555) 123-4567"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-50 mt-6"
              style={{ 
                background: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)'
              }}
            >
              {loading ? 'Setting up...' : 'Continue →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
