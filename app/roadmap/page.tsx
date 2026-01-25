import { Metadata } from 'next'
import Link from 'next/link'
import { Rocket, Phone, Megaphone, GraduationCap, Beer, Users, Scale, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Roadmap - Upcoming Features | OwnerClone',
  description: 'See what\'s coming next for OwnerClone: Text Clone AI assistant, Training Module, Team Tokens with digital checklists, Compliance Officer, IndyCater companion app, and advanced features for independent restaurant owners.',
  keywords: ['restaurant software roadmap', 'upcoming features', 'AI restaurant assistant', 'restaurant training system', 'restaurant compliance', 'catering management', 'digital checklists'],
}

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1: Current Release',
      timeline: 'Available Now',
      status: 'live',
      color: '#10b981', // Green
      icon: Rocket,
      headline: 'Complete Operations Suite',
      features: [
        {
          name: 'Food Module',
          description: 'Complete food costing down to the gram with automatic recipe building',
          included: ['AI-powered invoice parsing', 'Automatic recipe building', 'Track ingredients down to the gram', 'Real-time price tracking', 'Menu profitability analysis', 'Supplier price comparison']
        },
        {
          name: 'Teams Module',
          description: 'Labor scheduling and cost tracking with demand forecasting',
          included: ['Smart scheduling based on demand', 'Time clock POS integration', 'Overtime alerts and prevention', 'Labor cost percentage tracking', 'Team messaging', 'Employee performance tracking']
        },
        {
          name: 'Operations Module', 
          description: 'Invoice processing, bill tracking, and P&L reporting',
          included: ['Automated invoice processing', 'Bill payment tracking and reminders', 'Expense categorization for taxes', 'P&L and cash flow reports', 'Vendor management']
        },
        {
          name: 'Chef Module',
          description: 'Digital kitchen management and prep lists',
          included: ['Digital recipe cards with photos', 'Auto-generated prep lists from forecasts', 'Waste tracking and reduction', 'Menu engineering recommendations', 'Seasonal menu planning']
        },
        {
          name: 'Bartender Module',
          description: 'Pour cost tracking and beer inventory management',
          included: ['Cocktail recipe costing', 'Beer tracker for draft and bottles', 'Pour cost monitoring by bartender', 'Over-pouring detection', 'Bar menu profitability']
        },
        {
          name: 'Server Module',
          description: 'Customer preferences and table management',
          included: ['Customer database building automatically', 'Allergy and dietary tracking', 'Order history for returning guests', 'Table management and optimization', 'Birthday and anniversary alerts']
        },
      ]
    },
    {
      phase: 'Phase 2: Marketing & Communication',
      timeline: 'Q2 2026',
      status: 'coming',
      color: '#3b82f6', // Blue
      icon: Megaphone,
      headline: 'Fill Your Seats Automatically',
      features: [
        {
          name: 'Marketing Automation',
          description: 'Automated email campaigns that run themselves while you focus on operations',
          included: [
            'Automatic customer database building from POS data',
            'Birthday and anniversary campaigns',
            'Win-back campaigns for lapsed customers',
            'New customer welcome series',
            'Promotion tracking and ROI measurement',
          ]
        },
        {
          name: 'Social Media Management',
          description: 'Schedule and post to all your social channels from one dashboard',
          included: [
            'Multi-platform posting (Facebook, Instagram, Twitter)',
            'Post scheduling with content calendar',
            'Content templates designed for restaurants',
            'Engagement tracking and analytics',
          ]
        },
        {
          name: 'Review Management',
          description: 'Monitor and respond to reviews across all platforms',
          included: [
            'Google and Yelp review monitoring',
            'Review response templates',
            'Sentiment analysis and trends',
            'Alert notifications for new reviews',
          ]
        },
      ]
    },
    {
      phase: 'Phase 3: Text Clone AI Assistant',
      timeline: 'Q2-Q3 2026',
      status: 'development',
      color: '#a855f7', // Purple
      icon: Phone,
      headline: 'Talk to Your Restaurant Like a Person',
      features: [
        {
          name: 'Text Clone Base System',
          description: 'Text your restaurant and get instant answers to any operational question',
          included: [
            'Natural language queries via SMS',
            'Real-time data access to all your metrics',
            'Schedule questions: "Who\'s working Friday night?"',
            'Cost questions: "What\'s my food cost this week?"',
            'Sales data: "How much did we do yesterday?"',
            'Custom alerts and notifications',
          ]
        },
        {
          name: 'Chef Personality Selection',
          description: 'Name your Text Clone and give it a famous chef personality',
          included: [
            'Choose from iconic chef personalities',
            'Anthony Bourdain - Direct, honest, slightly sarcastic',
            'Gordon Ramsay - Intense, no-nonsense, motivational',
            'Julia Child - Warm, encouraging, educational',
            'Custom name for your Text Clone',
            'Switch personalities anytime',
          ]
        },
        {
          name: 'Proactive Intelligence',
          description: 'Your Text Clone texts YOU when something needs attention',
          included: [
            'Food cost spike detection and alerts',
            'Labor cost over budget warnings',
            'Theft pattern alerts',
            'Inventory running low notifications',
            'Employee no-show alerts',
          ]
        },
      ]
    },
    {
      phase: 'Phase 4: Training Module',
      timeline: 'Q3 2026',
      status: 'development',
      color: '#f97316', // Orange
      icon: GraduationCap,
      headline: 'Train Your Team Like a Pro',
      features: [
        {
          name: 'Video Training System',
          description: 'Professional video hosting and delivery for all your training content',
          included: [
            'Unlimited video hosting and streaming',
            'Role-based training tracks',
            'Watch progress tracking per employee',
            'Mobile-optimized viewing',
            'Video chapters and bookmarks',
          ]
        },
        {
          name: 'Daily Training Delivery',
          description: 'Automated daily training sent to staff on their schedule',
          included: [
            'Daily micro-training (5-10 minute videos)',
            'Personalized training paths by role',
            'New hire onboarding sequences',
            'Seasonal menu training automation',
          ]
        },
        {
          name: 'Quizzes & Certification',
          description: 'Test knowledge and certify employees on key skills',
          included: [
            'Custom quiz builder',
            'Certification tracking and badges',
            'Manager dashboard of training completion',
            'Print or digital certificates',
          ]
        },
      ]
    },
    {
      phase: 'Phase 5: Advanced Bar Management',
      timeline: 'Q3 2026',
      status: 'planned',
      color: '#fbbf24', // Yellow
      icon: Beer,
      headline: 'Complete Bar Profitability Control',
      features: [
        {
          name: 'Beermeister Module',
          description: 'Advanced draft beer management and keg tracking',
          included: [
            'Keg-level inventory tracking',
            'Automatic keg change detection',
            'Pour waste calculation',
            'Draft line cleaning schedule',
            'Beer cost per ounce calculations',
          ]
        },
        {
          name: 'Somme Mode (Sommelier)',
          description: 'Wine program management for restaurants with wine lists',
          included: [
            'Bottle-level wine inventory',
            'Vintage tracking and cellar management',
            'Wine pairing suggestions by menu item',
            'By-the-glass pour cost tracking',
            'Wine list profitability analysis',
          ]
        },
        {
          name: 'Advanced Cocktail Intelligence',
          description: 'Next-level bar analytics and optimization',
          included: [
            'Batch cocktail costing and scaling',
            'Seasonal menu recommendations',
            'Ingredient cross-utilization',
            'Happy hour profitability analysis',
          ]
        },
      ]
    },
    {
      phase: 'Phase 6: Team Tokens & Advanced Teams',
      timeline: 'Q4 2026',
      status: 'research',
      color: '#ec4899', // Pink
      icon: Users,
      headline: 'Motivate Your Team and Streamline Operations',
      features: [
        {
          name: 'Team Token System',
          description: 'Reward employees for performance, attendance, and customer satisfaction',
          included: [
            'Earn tokens for perfect attendance',
            'Positive customer reviews mentioning them',
            'Sales targets and upselling success',
            'Training completion',
            'Token leaderboards',
          ]
        },
        {
          name: 'Token Redemption',
          description: 'Let employees spend tokens on real benefits',
          included: [
            'Redeem for cash bonuses',
            'Schedule preference priority',
            'Extra PTO days',
            'Gift cards',
            'Manager-defined custom rewards',
          ]
        },
        {
          name: 'Digital Checklists',
          description: 'Replace paper checklists with digital accountability',
          included: [
            'Opening and closing checklists',
            'Cleaning and sanitation checklists',
            'Photo verification for completed tasks',
            'Manager review and sign-off',
            'Historical checklist records',
          ]
        },
      ]
    },
    {
      phase: 'Phase 7: Advanced Operations & Compliance',
      timeline: 'Q4 2026 - Q1 2027',
      status: 'research',
      color: '#8b5cf6', // Violet
      icon: Scale,
      headline: 'Professional Bookkeeping and Compliance Made Easy',
      features: [
        {
          name: 'Bookkeeping with Gusto Integration',
          description: 'Complete financial management with payroll integration',
          included: [
            'Full Gusto payroll integration',
            'Automatic expense categorization',
            'Bank statement reconciliation',
            'P&L generation and analysis',
            'Tax preparation reports',
          ]
        },
        {
          name: 'Advanced Labor Management',
          description: 'Beyond basic scheduling - comprehensive labor intelligence',
          included: [
            'Labor forecasting based on demand',
            'Optimal staffing recommendations',
            'Break and meal period compliance',
            'Overtime prediction and prevention',
            'Labor efficiency scoring',
          ]
        },
        {
          name: 'Compliance Officer',
          description: 'Never miss a deadline or renewal',
          included: [
            'Compliance calendar with all critical dates',
            'Health inspection schedules',
            'Liquor license renewals',
            'Automated alerts 90, 60, 30 days before deadlines',
            'Document storage for permits',
          ]
        },
      ]
    },
    {
      phase: 'Phase 8: Website Builder & IndyCater',
      timeline: 'Q1 2027',
      status: 'research',
      color: '#06b6d4', // Cyan
      icon: Globe,
      headline: 'Professional Websites and Catering Growth',
      features: [
        {
          name: 'Website Builder',
          description: 'Beautiful, SEO-optimized restaurant websites',
          included: [
            '10+ professional restaurant templates',
            'Easy customization',
            'Menu auto-population from your recipes',
            'Mobile-responsive design',
            'Google SEO optimization built-in',
            'Custom domain support',
          ]
        },
        {
          name: 'Online Ordering Integration',
          description: 'Let customers order online directly from your website',
          included: [
            'Online ordering system',
            'Direct POS integration',
            'Order management dashboard',
            'Delivery and pickup options',
          ]
        },
        {
          name: 'IndyCater Companion App',
          description: 'Drive catering sales with dedicated catering management',
          included: [
            'Catering-specific menu builder',
            'Online catering order forms',
            'Catering quote generator',
            'Event planning tools',
            'Catering profitability tracking',
          ]
        },
      ]
    },
  ]

  const getStatusBadge = (status: string, color: string) => {
    const badges: { [key: string]: { text: string; bg: string } } = {
      live: { text: 'Live Now', bg: '#10b981' },
      coming: { text: 'Coming Soon', bg: '#3b82f6' },
      development: { text: 'In Development', bg: '#a855f7' },
      planned: { text: 'Planned', bg: '#f97316' },
      research: { text: 'Research Phase', bg: '#6b7280' }
    }
    
    const badge = badges[status] || badges.research
    
    return (
      <span 
        className="px-4 py-2 text-white text-sm font-bold rounded-full"
        style={{ backgroundColor: badge.bg }}
      >
        {badge.text}
      </span>
    )
  }

  return (
    <main className="min-h-screen relative">
      {/* Fixed SVG Background */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/bg-glow.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />

      {/* All content with relative z-10 */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-200">
                The OwnerClone <span className="text-cyan-400">Roadmap</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                We&apos;re just getting started. Here&apos;s what&apos;s coming as we build the most comprehensive restaurant management platform for independent owners.
              </p>
              <p className="text-lg text-gray-400">
                All features included in your subscription - no price increases, no add-on fees.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Phases */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {phases.map((phase, idx) => {
              const PhaseIcon = phase.icon
              return (
                <div 
                  key={idx} 
                  className="backdrop-blur-xl bg-white/5 border-2 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.01]"
                  style={{ 
                    borderColor: phase.color,
                  }}
                >
                  {/* Phase Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <PhaseIcon className="w-12 h-12" style={{ color: phase.color }} />
                      <div>
                        <h2 className="text-3xl font-bold mb-1 text-gray-200">{phase.phase}</h2>
                        <p className="text-lg text-gray-400">{phase.timeline}</p>
                      </div>
                    </div>
                    {getStatusBadge(phase.status, phase.color)}
                  </div>

                  {phase.headline && (
                    <div 
                      className="mb-8 p-4 rounded-xl text-xl font-bold backdrop-blur-xl"
                      style={{ 
                        backgroundColor: `${phase.color}20`,
                        color: phase.color,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: `${phase.color}40`
                      }}
                    >
                      {phase.headline}
                    </div>
                  )}

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {phase.features.map((feature, featureIdx) => (
                      <div 
                        key={featureIdx} 
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                      >
                        <h3 className="text-xl font-bold mb-2" style={{ color: phase.color }}>
                          {feature.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                        
                        <ul className="space-y-2">
                          {feature.included.slice(0, 5).map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start text-sm text-gray-300">
                              <span className="mr-2 mt-1" style={{ color: phase.color }}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {feature.included.length > 5 && (
                            <li className="text-sm text-gray-500 italic">
                              + {feature.included.length - 5} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl font-bold text-center text-cyan-400">
                Our Development Commitment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">✓ No Price Increases</h3>
                <p className="text-gray-300">
                  When these features launch, you get them automatically at your current price. No upgrades, no add-ons, no surprises.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">✓ Rapid Development</h3>
                <p className="text-gray-300">
                  We ship new features every quarter. Early customers get to influence what we build and when.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">✓ Battle-Tested</h3>
                <p className="text-gray-300">
                  Every feature is built from real restaurant experience and tested with actual owners before launch.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">✓ Your Success First</h3>
                <p className="text-gray-300">
                  We only build features that deliver measurable ROI. If it doesn&apos;t make you money or save you time, we don&apos;t build it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
                Get Started Now and Grow With Us
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join OwnerClone today at $0.20 per customer. Lock in your pricing and get all future features automatically as they launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing" 
                  className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-10 py-4 rounded-lg font-bold text-lg text-center"
                >
                  See Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all px-10 py-4 rounded-lg font-bold text-lg text-center"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
