import { Metadata } from 'next'
import Link from 'next/link'
import { FaRocket, FaPhone, FaEnvelope, FaBullhorn, FaGraduationCap, FaBeer, FaWineBottle, FaUsers, FaCalendar, FaChartLine, FaCalculator, FaClipboardCheck, FaGlobe, FaUtensils, FaBalanceScale, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Product Roadmap - Upcoming Features | OwnerClone',
  description: 'See what\'s coming next for OwnerClone: Text Clone AI assistant, Training Module, Team Tokens with digital checklists, Compliance Officer, IndyCater companion app, and advanced features for independent restaurant owners.',
  keywords: ['restaurant software roadmap', 'upcoming features', 'AI restaurant assistant', 'restaurant training system', 'restaurant compliance', 'catering management', 'digital checklists'],
}

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1: Current Release (Available Now)',
      timeline: 'January 2026',
      status: 'live',
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
            'A/B testing for email content and timing',
            'Beautiful HTML email templates',
          ]
        },
        {
          name: 'Social Media Management',
          description: 'Schedule and post to all your social channels from one dashboard',
          included: [
            'Multi-platform posting (Facebook, Instagram, Twitter)',
            'Post scheduling with content calendar',
            'Content templates designed for restaurants',
            'Photo uploads with automatic optimization',
            'Engagement tracking and analytics',
            'Best time to post recommendations',
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
            'Track review impact on sales',
          ]
        },
      ]
    },
    {
      phase: 'Phase 3: Text Clone - Your AI Restaurant Assistant',
      timeline: 'Q2-Q3 2026',
      status: 'development',
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
            'Staff questions: "Did anyone call in sick?"',
            'Inventory queries: "Are we low on anything?"',
            'Sales data: "How much did we do yesterday?"',
            'Custom alerts and notifications',
          ]
        },
        {
          name: 'Chef Personality Selection',
          description: 'Name your Text Clone and give it a famous chef personality - responses match the style, not the data',
          included: [
            'Choose from iconic chef personalities:',
            '  • Anthony Bourdain - Direct, honest, slightly sarcastic',
            '  • Gordon Ramsay - Intense, no-nonsense, motivational',
            '  • Julia Child - Warm, encouraging, educational',
            '  • Emeril Lagasse - Enthusiastic, energetic, fun',
            '  • Jacques Pépin - Calm, precise, sophisticated',
            '  • Guy Fieri - Casual, friendly, laid-back',
            'Custom name for your Text Clone',
            'Personality affects tone and style, never data accuracy',
            'Switch personalities anytime you want',
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
            'Customizable alert thresholds',
            'Smart alert timing (not at 3 AM)',
          ]
        },
        {
          name: 'Voice Integration',
          description: 'Call and talk to your Text Clone instead of texting',
          included: [
            'Phone call support with same personality',
            'Voice recognition and natural conversation',
            'Hands-free operation while cooking or driving',
            'Voice responses in real-time',
          ]
        },
      ]
    },
    {
      phase: 'Phase 4: Training Module',
      timeline: 'Q3 2026',
      status: 'development',
      icon: FaGraduationCap,
      headline: 'Train Your Team Like a Pro',
      features: [
        {
          name: 'Video Training System',
          description: 'Professional video hosting and delivery for all your training content',
          included: [
            'Unlimited video hosting and streaming',
            'Role-based training tracks (server, cook, bartender, manager)',
            'Video upload with automatic transcoding',
            'Watch progress tracking per employee',
            'Mobile-optimized viewing',
            'Offline download capability',
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
            'Push notifications for new training',
            'Training reminders and nudges',
          ]
        },
        {
          name: 'Quizzes & Certification',
          description: 'Test knowledge and certify employees on key skills',
          included: [
            'Custom quiz builder',
            'Multiple choice, true/false, scenario questions',
            'Certification tracking and badges',
            'Retake management for failed quizzes',
            'Manager dashboard of training completion',
            'Print or digital certificates',
            'Training compliance reports',
          ]
        },
        {
          name: 'Training Analytics',
          description: 'Understand who knows what and where gaps exist',
          included: [
            'Completion rates by employee and role',
            'Quiz scores and trends',
            'Time to competency tracking',
            'Training ROI measurement',
            'Knowledge gap identification',
            'Best and worst performing training content',
          ]
        },
      ]
    },
    {
      phase: 'Phase 5: Advanced Bar Management',
      timeline: 'Q3 2026',
      status: 'planned',
      icon: FaBeer,
      headline: 'Complete Bar Profitability Control',
      features: [
        {
          name: 'Beermeister Module',
          description: 'Advanced draft beer management and keg tracking',
          included: [
            'Keg-level inventory tracking',
            'Automatic keg change detection',
            'Pour waste calculation (foam, testing, spillage)',
            'Optimal keg rotation recommendations',
            'Draft line cleaning schedule and tracking',
            'Beer cost per ounce calculations',
            'Popular beer analysis and trends',
            'Seasonal beer performance tracking',
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
            'Optimal wine pricing recommendations',
            'Wine list profitability analysis',
            'Supplier relationship and allocation tracking',
            'Wine club and loyalty program tools',
          ]
        },
        {
          name: 'Advanced Cocktail Intelligence',
          description: 'Next-level bar analytics and optimization',
          included: [
            'Batch cocktail costing and scaling recipes',
            'Seasonal menu recommendations',
            'Ingredient cross-utilization to reduce waste',
            'Trending cocktails in your market',
            'Speed rail optimization',
            'Happy hour profitability analysis',
          ]
        },
      ]
    },
    {
      phase: 'Phase 6: Team Tokens & Advanced Teams Features',
      timeline: 'Q4 2026',
      status: 'research',
      icon: FaUsers,
      headline: 'Motivate Your Team and Streamline Operations',
      features: [
        {
          name: 'Team Token System',
          description: 'Reward employees for performance, attendance, and customer satisfaction',
          included: [
            'Earn tokens for:',
            '  • Perfect attendance',
            '  • Positive customer reviews mentioning them',
            '  • Sales targets and upselling success',
            '  • Training completion',
            '  • Helping teammates and teamwork',
            '  • Zero mistakes on checks',
            '  • Safety compliance',
            'Token leaderboards (daily, weekly, monthly)',
            'Team challenges and competitions',
            'Manager-defined bonus token awards',
          ]
        },
        {
          name: 'Token Redemption',
          description: 'Let employees spend tokens on real benefits they actually want',
          included: [
            'Redeem tokens for:',
            '  • Cash bonuses',
            '  • Schedule preference priority',
            '  • Extra PTO days',
            '  • Gift cards',
            '  • Company merchandise',
            '  • Parking spots',
            '  • Training opportunities',
            'Manager-defined custom rewards',
            'Automatic payout processing',
            'Redemption history tracking',
          ]
        },
        {
          name: 'Digital Checklists',
          description: 'Replace paper checklists with digital accountability',
          included: [
            'Opening and closing checklists',
            'Cleaning and sanitation checklists',
            'Equipment maintenance checklists',
            'Safety and compliance checklists',
            'Photo verification for completed tasks',
            'Manager review and sign-off',
            'Checklist templates by role and shift',
            'Completion tracking and accountability',
            'Historical checklist records',
          ]
        },
        {
          name: 'Performance Insights',
          description: 'Use token data and checklists to understand who your best employees are',
          included: [
            'Top performer identification',
            'Retention risk alerts (dropping token earnings)',
            'Promotion readiness indicators',
            'Team morale trends',
            'Consistent performers vs inconsistent',
            'Training effectiveness by employee',
          ]
        },
      ]
    },
    {
      phase: 'Phase 7: Advanced Operations & Compliance',
      timeline: 'Q4 2026 - Q1 2027',
      status: 'research',
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
            'Invoice and receipt matching',
            'Chart of accounts management',
            'P&L generation and analysis',
            'Balance sheet reporting',
            'Cash flow forecasting',
            'Tax preparation reports',
            'Quarterly and annual financial statements',
            'Export to QuickBooks or Xero',
          ]
        },
        {
          name: 'Advanced Labor Management',
          description: 'Beyond basic scheduling - comprehensive labor intelligence',
          included: [
            'Labor forecasting based on demand predictions',
            'Optimal staffing recommendations',
            'Break and meal period compliance',
            'Overtime prediction and prevention',
            'Labor efficiency scoring',
            'Manager vs. hourly employee cost analysis',
            'Schedule templates with auto-fill',
            'Shift swapping with approval workflow',
            'Availability management',
            'Labor budget vs. actual tracking',
          ]
        },
        {
          name: 'Compliance Officer',
          description: 'Never miss a deadline or renewal with automated compliance tracking',
          included: [
            'Compliance calendar with all critical dates:',
            '  • Health inspection schedules',
            '  • Liquor license renewals',
            '  • Food handler certifications',
            '  • Fire safety inspections',
            '  • Business license renewals',
            '  • Insurance policy renewals',
            '  • Tax filing deadlines',
            '  • Equipment certifications',
            'Automated alerts 90, 60, 30 days before deadlines',
            'Document storage for permits and certificates',
            'Checklist for inspection prep',
            'Violation tracking and remediation',
            'Compliance score and risk assessment',
          ]
        },
      ]
    },
    {
      phase: 'Phase 8: Website Builder & IndyCater',
      timeline: 'Q1 2027',
      status: 'research',
      icon: FaGlobe,
      headline: 'Professional Websites and Catering Growth',
      features: [
        {
          name: 'Website Builder',
          description: 'Beautiful, SEO-optimized restaurant websites with templates',
          included: [
            '10+ professional restaurant templates',
            'Easy customization (colors, fonts, images)',
            'Menu auto-population from your recipes',
            'Mobile-responsive design',
            'Google SEO optimization built-in',
            'Fast loading times',
            'SSL security included',
            'Custom domain support',
            'Blog section for content marketing',
            'Photo galleries',
            'Hours and location with maps',
            'Social media integration',
          ]
        },
        {
          name: 'Online Ordering Integration',
          description: 'Let customers order online directly from your website',
          included: [
            'Online ordering system',
            'Direct POS integration',
            'Order management dashboard',
            'Customer order history',
            'Delivery and pickup options',
            'Menu management',
            'Order notifications',
          ]
        },
        {
          name: 'IndyCater Companion App',
          description: 'Drive catering sales with a dedicated catering management system',
          included: [
            'Catering-specific menu builder',
            'Online catering order forms',
            'Catering quote generator',
            'Event planning tools',
            'Catering calendar and scheduling',
            'Staff assignment for catering events',
            'Catering cost calculator',
            'Delivery logistics planning',
            'Catering-specific marketing',
            'Event profitability tracking',
            'Customer catering history',
            'Repeat catering customer automation',
          ]
        },
      ]
    },
  ]

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'live':
        return <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">Live Now</span>
      case 'coming':
        return <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">Coming Soon</span>
      case 'development':
        return <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">In Development</span>
      case 'planned':
        return <span className="px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">Planned</span>
      case 'research':
        return <span className="px-3 py-1 bg-gray-600 text-white text-sm font-semibold rounded-full">Research Phase</span>
      default:
        return null
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">
            The OwnerClone Product Roadmap
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            We're just getting started. Here's what's coming as we build the most comprehensive restaurant management platform for independent owners.
          </p>
          <p className="text-lg text-primary-200">
            All features will be included in your subscription at launch - no price increases, no add-on fees. When new features roll out, you get them automatically.
          </p>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto space-y-16">
          {phases.map((phase, idx) => {
            const PhaseIcon = phase.icon
            return (
              <div key={idx} className="relative">
                {/* Timeline Connector */}
                {idx < phases.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-full h-16 w-1 bg-gray-300 -ml-0.5"></div>
                )}

                {/* Phase Header */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{phase.phase}</h2>
                      <p className="text-lg text-gray-600">{phase.timeline}</p>
                    </div>
                    {getStatusBadge(phase.status)}
                  </div>
                  
                  {phase.headline && PhaseIcon && (
                    <div className="flex items-center space-x-3 mt-4 p-4 bg-primary-50 rounded-lg">
                      <PhaseIcon className="text-3xl text-primary-600" />
                      <p className="text-xl font-semibold text-primary-800">{phase.headline}</p>
                    </div>
                  )}
                </div>

                {/* Features Grid */}
                <div className="space-y-6">
                  {phase.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                      <p className="text-gray-700 mb-4">{feature.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {feature.included.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start text-gray-700">
                              <span className="text-primary-600 mr-3 mt-0.5">•</span>
                              <span className={item.startsWith('  •') ? 'ml-4' : ''}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-gray-900">Your Input Shapes Our Roadmap</h2>
            <p className="text-lg text-gray-700 mb-8">
              OwnerClone was built from real restaurant experience. We continue to develop it with input from owners like you. If there's a feature you need that you don't see here, let us know. We're building this for independent restaurant owners, not for venture capitalists.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Feature
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Development Commitment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✓ No Price Increases</h3>
                <p className="text-gray-700">
                  When these features launch, you get them automatically at your current price. No upgrades, no add-ons, no surprises.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✓ Rapid Development</h3>
                <p className="text-gray-700">
                  We ship new features every quarter. Early customers get to influence what we build and when.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✓ Battle-Tested</h3>
                <p className="text-gray-700">
                  Every feature is built from real restaurant experience and tested with actual owners before launch.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✓ Your Success First</h3>
                <p className="text-gray-700">
                  We only build features that deliver measurable ROI. If it doesn't make you money or save you time, we don't build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="mb-6">Get Started Now and Grow With Us</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join OwnerClone today at $0.20 per customer. Lock in your pricing and get all future features automatically as they launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
              See Pricing
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-primary-700 text-white font-bold rounded-lg border-2 border-white hover:bg-primary-600 transition-colors duration-200 text-lg">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
