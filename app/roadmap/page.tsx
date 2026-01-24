import { Metadata } from 'next'
import Link from 'next/link'
import { FaRocket, FaPhone, FaBullhorn, FaGraduationCap, FaBeer, FaUsers, FaBalanceScale, FaGlobe } from 'react-icons/fa'

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
      glowColor: 'rgba(16, 185, 129, 0.5)',
      icon: FaRocket,
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
      glowColor: 'rgba(59, 130, 246, 0.5)',
      icon: FaBullhorn,
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
      glowColor: 'rgba(168, 85, 247, 0.5)',
      icon: FaPhone,
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
      glowColor: 'rgba(249, 115, 22, 0.5)',
      icon: FaGraduationCap,
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
      glowColor: 'rgba(251, 191, 36, 0.5)',
      icon: FaBeer,
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
      glowColor: 'rgba(236, 72, 153, 0.5)',
      icon: FaUsers,
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
      glowColor: 'rgba(139, 92, 246, 0.5)',
      icon: FaBalanceScale,
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
      glowColor: 'rgba(6, 182, 212, 0.5)',
      icon: FaGlobe,
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            The OwnerClone <span className="text-[#38bdf8]">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            We're just getting started. Here's what's coming as we build the most comprehensive restaurant management platform for independent owners.
          </p>
          <p className="text-lg text-gray-400">
            All features included in your subscription - no price increases, no add-on fees.
          </p>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {phases.map((phase, idx) => {
            const PhaseIcon = phase.icon
            return (
              <div 
                key={idx} 
                className="bg-[#0a0a0a]/40 backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  borderColor: phase.color,
                  boxShadow: `0 0 60px ${phase.glowColor}`
                }}
              >
                {/* Phase Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <PhaseIcon className="text-5xl" style={{ color: phase.color }} />
                    <div>
                      <h2 className="text-3xl font-bold mb-1">{phase.phase}</h2>
                      <p className="text-lg text-gray-400">{phase.timeline}</p>
                    </div>
                  </div>
                  {getStatusBadge(phase.status, phase.color)}
                </div>

                {phase.headline && (
                  <div 
                    className="mb-8 p-4 rounded-xl text-xl font-bold"
                    style={{ 
                      backgroundColor: `${phase.color}20`,
                      color: phase.color
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
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3a3a3a] transition-colors"
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
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Development <span className="text-[#38bdf8]">Commitment</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/5 border border-[#10b981]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[#10b981]">✓ No Price Increases</h3>
              <p className="text-gray-300">
                When these features launch, you get them automatically at your current price. No upgrades, no add-ons, no surprises.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 border border-[#3b82f6]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[#3b82f6]">✓ Rapid Development</h3>
              <p className="text-gray-300">
                We ship new features every quarter. Early customers get to influence what we build and when.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 border border-[#a855f7]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[#a855f7]">✓ Battle-Tested</h3>
              <p className="text-gray-300">
                Every feature is built from real restaurant experience and tested with actual owners before launch.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 border border-[#f97316]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[#f97316]">✓ Your Success First</h3>
              <p className="text-gray-300">
                We only build features that deliver measurable ROI. If it doesn't make you money or save you time, we don't build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#38bdf8]/20 to-[#a855f7]/20 border-2 border-[#38bdf8] rounded-3xl p-12 text-center backdrop-blur-sm shadow-[0_0_80px_rgba(56,189,248,0.3)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started Now and <span className="text-[#38bdf8]">Grow With Us</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join OwnerClone today at $0.20 per customer. Lock in your pricing and get all future features automatically as they launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-[#38bdf8] text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0ea5e9] transition inline-block">
                See Pricing
              </Link>
              <Link href="/contact" className="border-2 border-[#38bdf8] text-[#38bdf8] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#38bdf8]/10 transition inline-block">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
