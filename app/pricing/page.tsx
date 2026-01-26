import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, TrendingUp, Shield, Zap, DollarSign, Users, BarChart3, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Restaurant Management Software | OwnerClone',
  description: 'Transparent pricing for restaurant management software. Only $0.20 per customer visit per month. All features included, no hidden fees, no setup costs. Built for independent restaurant owners.',
  keywords: ['restaurant management software pricing', 'restaurant software cost', 'affordable restaurant management', 'restaurant analytics pricing'],
}

export default function Pricing() {
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
    {/* Main Heading Card - Matching Homepage */}
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center mb-8">
      <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-200">
        Pricing Built for <span className="text-cyan-400">Independent Owners</span>
      </h1>
      <p className="text-xl text-gray-300 mb-6">
        No complicated tiers. No hidden fees. Just simple, transparent pricing that scales with your business.
      </p>
    </div>

    {/* Early Adopter Badge & Info Card */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8" style={{ borderWidth: '1px' }}>
      <div className="mb-6 text-center">
        <span className="bg-green-500/20 border border-green-400/30 text-green-400 px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide inline-block">
          <Zap className="inline-block w-5 h-5 mr-2" />
          Early Adopter Pricing - Limited Time
        </span>
      </div>
      <p className="text-xl text-cyan-400 font-bold mb-3 text-center">
        <TrendingUp className="inline-block w-6 h-6 mr-2" />
        Lock in This Pricing Forever!
      </p>
      <p className="text-gray-300 mb-6 text-center">
        These prices are for early adopters only. In the future, new customers will pay more - but you&apos;ll keep your early adopter rate forever. Join now and help us build your modules faster while locking in incredible pricing.
      </p>
      <div className="mt-6 pt-6 border-t border-cyan-400/30">
        <p className="text-gray-200 font-bold mb-3 text-center">
          <DollarSign className="inline-block w-6 h-6 mr-2" />
          Want OwnerClone for FREE?
        </p>
        <p className="text-gray-300 text-sm mb-4 text-center">
          Upgrade your POS system and get OwnerClone included at no cost.
        </p>
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-block backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-8 py-3 rounded-lg font-bold"
          >
            Ask Us How to Get Free Access
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Main Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Pricing Card - GREEN GLASS with 1px border */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/50 rounded-3xl p-8 md:p-12 mb-12" style={{ borderWidth: '1px' }}>
              <div className="text-center mb-8">
                <div className="text-6xl md:text-7xl font-bold text-green-400 mb-2">$0.20</div>
                <div className="text-2xl text-gray-300 mb-4">per customer visit per month</div>
                <p className="text-lg text-gray-400">
                  That&apos;s it. No hidden fees. No setup costs. No long-term contracts.
                </p>
              </div>

              {/* Pricing Examples - DARKER background for better text readability */}
              <div className="backdrop-blur-xl border border-white/10 rounded-xl p-6 mb-8" style={{ 
                backgroundColor: 'rgba(30, 41, 59, 0.8)',
                borderWidth: '1px' 
              }}>
                <h3 className="text-xl font-bold mb-6 text-center text-white">What You&apos;ll Pay Based on Your Traffic</h3>
                <div className="space-y-4">
                  {/* Individual price boxes - GLASS EFFECT with light green border */}
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 px-4 py-3 rounded-lg" style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(110, 231, 183, 0.4)',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                  }}>
                    <span className="text-white font-medium">500 customers per month</span>
                    <span className="text-2xl font-bold text-green-400">$100/mo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 px-4 py-3 rounded-lg" style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(110, 231, 183, 0.4)',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                  }}>
                    <span className="text-white font-medium">1,000 customers per month</span>
                    <span className="text-2xl font-bold text-green-400">$200/mo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 px-4 py-3 rounded-lg" style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(110, 231, 183, 0.4)',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                  }}>
                    <span className="text-white font-medium">1,500 customers per month</span>
                    <span className="text-2xl font-bold text-green-400">$300/mo</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 rounded-lg" style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(110, 231, 183, 0.4)',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                  }}>
                    <span className="text-white font-medium">2,000 customers per month</span>
                    <span className="text-2xl font-bold text-green-400">$400/mo</span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="backdrop-blur-xl bg-green-500/10 border border-green-400/30 rounded-xl p-6 mb-8" style={{ borderWidth: '1px' }}>
                <h3 className="text-xl font-bold mb-6 text-gray-200">Everything Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Food cost tracking & alerts',
                    'Labor cost management',
                    'Theft detection system',
                    'Demand forecasting',
                    'Inventory management',
                    'Recipe costing',
                    'Marketing automation',
                    'Email campaigns',
                    'Customer database',
                    'POS integration (Toast/Skytab)',
                    'Manual report uploads',
                    'Real-time analytics dashboard',
                    'Mobile app access',
                    'Phone Clone SMS assistant',
                    'All 8 modules included',
                    'Unlimited users',
                    'Email & phone support',
                    'Regular feature updates'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      {/* LARGER, BRIGHTER checkmarks */}
                      <Check className="text-green-400 mr-3 mt-1 flex-shrink-0" style={{ width: '24px', height: '24px' }} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button - GREEN with WHITE text */}
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-white border transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#059669',
                    borderColor: '#047857',
                    borderWidth: '1px'
                  }}
                >
                  Get Started Today
                </Link>
                <p className="mt-4 text-gray-400">
                  No credit card required • Cancel anytime • 30-day money-back guarantee
                </p>
              </div>
            </div>

            {/* Why This Pricing Makes Sense */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Per-Customer Pricing?</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Most restaurant software charges flat monthly fees that don&apos;t scale with your business. A small pizzeria with 500 customers pays the same as a bustling sports bar with 2,000 customers. That&apos;s not fair, and it doesn&apos;t make sense.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                OwnerClone&apos;s per-customer pricing means you only pay for what you use. When business is slow, your software costs are lower. When you are crushing it and serving tons of customers, you pay a bit more because you are making more money. Your software scales with your success.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This model also aligns our incentives perfectly. I succeed when you succeed. I&apos;m motivated to build features that help you serve more customers and increase your profits, because that&apos;s how I grow too. We&apos;re in this together.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
                The Math That Makes This a No-Brainer
              </h2>
            </div>
            
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-8 mb-8" style={{ borderWidth: '1px' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Average Restaurant Serving 1,000 Customers/Month</h3>
              
              <div className="space-y-6">
                {/* Top pricing box - DARKER GREEN background instead of cyan */}
                <div className="backdrop-blur-xl border-l-4 rounded-r-xl p-6" style={{
                  backgroundColor: 'rgba(5, 150, 105, 0.3)',
                  borderLeftColor: '#6ee7b7'
                }}>
                  <div className="font-semibold text-white mb-1">Your OwnerClone Cost</div>
                  {/* LIGHTER GREEN text for better contrast on dark green */}
                  <div className="text-3xl font-bold" style={{ color: '#6ee7b7' }}>$200/month</div>
                  <div className="text-gray-300">($2,400 per year)</div>
                </div>

                <div className="backdrop-blur-xl bg-green-500/10 border-l-4 border-green-400 rounded-r-xl p-6">
                  <div className="font-semibold text-gray-300 mb-1">Reduce Food Costs by Just 2%</div>
                  <div className="text-lg text-gray-300 mb-2">
                    Average restaurant: $800,000 annual revenue × 30% food cost = $240,000/year
                  </div>
                  {/* DARKER GREEN for better readability */}
                  <div className="text-3xl font-bold" style={{ color: '#047857' }}>Save $4,800/year</div>
                </div>

                <div className="backdrop-blur-xl bg-green-500/10 border-l-4 border-green-400 rounded-r-xl p-6">
                  <div className="font-semibold text-gray-300 mb-1">Catch Theft Early</div>
                  <div className="text-lg text-gray-300 mb-2">
                    I lost $40,000 to a manager void scam before I caught it. If you catch theft just once:
                  </div>
                  <div className="text-3xl font-bold" style={{ color: '#047857' }}>Save $10,000 - $40,000</div>
                </div>

                <div className="backdrop-blur-xl bg-green-500/10 border-l-4 border-green-400 rounded-r-xl p-6">
                  <div className="font-semibold text-gray-300 mb-1">Optimize Labor Scheduling</div>
                  <div className="text-lg text-gray-300 mb-2">
                    Reduce unnecessary overtime and improve scheduling efficiency by 3%
                  </div>
                  <div className="text-lg text-gray-300 mb-2">
                    $800,000 revenue × 30% labor cost = $240,000/year
                  </div>
                  <div className="text-3xl font-bold" style={{ color: '#047857' }}>Save $7,200/year</div>
                </div>

                <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-xl p-6 mt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-300 mb-2">Conservative Total Annual Savings</div>
                    <div className="text-5xl font-bold text-green-400 mb-2">$22,000+</div>
                    <div className="text-lg text-gray-400 mb-4">minus $2,400 software cost</div>
                    <div className="text-3xl font-bold text-gray-200">Net Benefit: $19,600/year</div>
                    <div className="text-xl text-cyan-400 mt-2">ROI: 817%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-center text-lg text-gray-300">
                And that&apos;s just from catching problems and optimizing costs. It doesn&apos;t include increased revenue from better marketing, improved customer retention, or the time you get back in your life.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-center text-cyan-400">
                How We Compare
              </h2>
            </div>
            
            <div className="overflow-x-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6" style={{ borderWidth: '1px' }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/10">
                    <th className="border border-white/10 p-4 text-left text-gray-200">Feature</th>
                    <th className="border border-white/10 p-4 text-center bg-cyan-500/10 text-cyan-400">OwnerClone</th>
                    <th className="border border-white/10 p-4 text-center text-gray-300">Toast</th>
                    <th className="border border-white/10 p-4 text-center text-gray-300">MarginEdge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Monthly Cost (1,000 customers)</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10 font-bold text-cyan-400">$200</td>
                    <td className="border border-white/10 p-4 text-center text-gray-400">$165+</td>
                    <td className="border border-white/10 p-4 text-center text-gray-400">$300+</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Setup Fee</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10 text-green-400 font-bold">$0</td>
                    <td className="border border-white/10 p-4 text-center text-gray-400">$500+</td>
                    <td className="border border-white/10 p-4 text-center text-gray-400">$0</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Food Cost Tracking</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      {/* LARGER BRIGHTER checkmarks */}
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Labor Management</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      {/* LARGER red X */}
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Theft Detection</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Demand Forecasting</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Marketing Automation</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">AI Phone Assistant</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 font-semibold text-gray-300">Built by Restaurant Owners</td>
                    <td className="border border-white/10 p-4 text-center bg-cyan-500/10">
                      <Check className="inline-block text-green-400 font-bold" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                    <td className="border border-white/10 p-4 text-center">
                      <X className="inline-block text-red-400" style={{ width: '24px', height: '24px' }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-center text-cyan-400">
                Common Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  How do you count customers?
                </h3>
                <p className="text-gray-300 mb-3">
                  A &quot;customer&quot; is one cover - one person physically walking in your door and sitting down. We pull this directly from your POS system&apos;s cover count, not from transactions or checks.
                </p>
                <p className="text-gray-300 mb-3">
                  <strong className="text-gray-200">Smart Error Detection:</strong> We know servers make mistakes. If a server accidentally punches in 1,000 people instead of 10, our system catches it automatically and corrects it - not just for our billing, but for your metrics too. Imagine what a 1,000-person entry would do to your per-person average if we didn&apos;t catch it.
                </p>
                <p className="text-gray-300">
                  This means you get accurate billing and accurate analytics at the same time. No inflated bills from typos, and no garbage data messing up your business intelligence.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2" />
                  What if my customer count varies a lot month to month?
                </h3>
                <p className="text-gray-300">
                  That&apos;s the beauty of per-customer pricing. In slow months, you pay less. In busy months, you pay more, but you are also making more money. Your software cost scales naturally with your business.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Is there a minimum or maximum?
                </h3>
                <p className="text-gray-300">
                  No minimum. No maximum. Whether you serve 100 customers or 10,000, the pricing stays the same: $0.20 per customer. Fair and scalable for businesses of all sizes.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  What if OwnerClone isn&apos;t saving me money?
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong className="text-gray-200">Our 150% ROI Guarantee:</strong> We track your return on investment continuously and show you the results in your dashboard. If your ROI falls below 150% of what you&apos;re paying us, we schedule a meeting with you immediately.
                </p>
                <p className="text-gray-300">
                  We&apos;ll review your operations together, identify where the value isn&apos;t showing up, and work with you to get back on track. You&apos;re not just buying software - you&apos;re getting an operational consultant who is financially incentivized to make sure you succeed. This is the OwnerClone Honesty Advantage.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Do you offer annual discounts?
                </h3>
                <p className="text-gray-300">
                  Yes! Pay annually and save 15%. Contact us for details and we&apos;ll set you up with annual billing.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-300">
                  Absolutely. No long-term contracts. No cancellation fees. If OwnerClone isn&apos;t saving you money and making your life easier, you can cancel with 30 days notice. We also offer a 30-day money-back guarantee.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">What about support?</h3>
                <p className="text-gray-300">
                  Email and phone support is included at no extra charge. You&apos;ll have direct access to our support team, and because I built this from my own restaurant experience, we actually understand your problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - DARKER GREEN TEXT on green bg, GREEN BUTTON */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/50 rounded-3xl p-12 text-center" style={{ borderWidth: '1px' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#047857' }}>
                Ready to Stop Guessing and Start Knowing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join independent restaurant owners who are finally running profitable businesses with real data instead of spreadsheets and gut feelings.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-white border transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#059669',
                  borderColor: '#047857',
                  borderWidth: '1px'
                }}
              >
                Get Started Today
              </Link>
              <p className="mt-6 text-gray-400">
                Questions? Send us an email - info@ownerclone.com
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
