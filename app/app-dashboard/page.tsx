'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabasePlatform } from '@/lib/supabase-platform'

export default function AppDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [restaurant, setRestaurant] = useState<any>(null)

  useEffect(() => {
    const loadUser = async () => {
      const { data: { session } } = await supabasePlatform.auth.getSession()
      
      if (!session?.user) {
        router.push('/app-login')
        return
      }

      setUser(session.user)

      // Get profile
      const { data: profileData } = await supabasePlatform
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      
      setProfile(profileData)

      // Get restaurant
      const { data: teamData } = await supabasePlatform
        .from('team_members')
        .select(`
          role,
          organization:organizations(name),
          restaurant:restaurants(name, website)
        `)
        .eq('profile_id', session.user.id)
        .single()

      if (teamData) {
        setRestaurant(teamData)
      }

      setLoading(false)
    }

    loadUser()
  }, [router])

  const handleSignOut = async () => {
    await supabasePlatform.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div 
          className="backdrop-blur-xl border rounded-2xl p-8 mb-8"
          style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Welcome, {profile?.name || 'Owner'}! 🎉
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                {restaurant?.organization?.name || 'Your Restaurant'}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg border transition-colors hover:bg-white/10"
              style={{ borderColor: 'var(--glass-border)', color: 'var(--text-secondary)' }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Success Message */}
        <div 
          className="backdrop-blur-xl border-2 rounded-2xl p-8 mb-8 text-center"
          style={{ 
            background: 'rgba(16, 185, 129, 0.1)', 
            borderColor: '#10b981'
          }}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-500/20">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">You're All Set!</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Your account has been created successfully. The full dashboard is coming soon.
          </p>
        </div>

        {/* Account Info */}
        <div 
          className="backdrop-blur-xl border rounded-2xl p-8 mb-8"
          style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Your Account
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Email:</span>
              <span style={{ color: 'var(--text-primary)' }}>{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Name:</span>
              <span style={{ color: 'var(--text-primary)' }}>{profile?.name}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Restaurant:</span>
              <span style={{ color: 'var(--text-primary)' }}>{restaurant?.restaurant?.name || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Role:</span>
              <span className="capitalize" style={{ color: 'var(--brand-primary)' }}>{restaurant?.role || 'Owner'}</span>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div 
          className="backdrop-blur-xl border rounded-2xl p-8"
          style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Coming Soon
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📊', title: 'Sales Dashboard', desc: 'Real-time sales tracking' },
              { icon: '🧾', title: 'Invoice Scanner', desc: 'AI-powered OCR for invoices' },
              { icon: '👥', title: 'Team Management', desc: 'Manage staff & permissions' },
              { icon: '🔮', title: 'Prophet Forecasting', desc: 'AI sales predictions' },
              { icon: '🚨', title: 'Theft Detection', desc: 'Anomaly alerts' },
              { icon: '📈', title: 'Food Cost Tracking', desc: 'Real-time cost analysis' },
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-4 rounded-lg border"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'var(--glass-border)' }}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{feature.title}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link href="/" style={{ color: 'var(--brand-primary)' }}>
            ← Back to OwnerClone.com
          </Link>
        </div>
      </div>
    </div>
  )
}
