import { Metadata } from 'next'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pricing - Restaurant Management Software | OwnerClone',
  description: 'Transparent pricing for restaurant management software. Only $0.20 per customer visit per month. All features included, no hidden fees, no setup costs. Built for independent restaurant owners.',
  keywords: ['restaurant management software pricing', 'restaurant software cost', 'affordable restaurant management', 'restaurant analytics pricing'],
}

export default function Pricing() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-[#10b981] text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide inline-block">
              🚀 Early Adopter Pricing - Limited Time
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Pricing Built for <span className="text-[#38bdf8]">Independent Owners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            No complicated tiers. No hidden fees. Just simple, transparent pricing that scales with your business.
          </p>
          <div className="backdrop-blur-xl bg-white/5 border-2 border-[#38bdf8]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-xl text-white font-bold mb-3">
              ⚡ Lock in This Pricing Forever!
            </p>
            <p className="text-gray-300 mb-6">
              These prices are for early adopters only. In the future, new customers will pay more - but you'll keep your early adopter rate forever. Join now and help us build your modules faster while locking in incredible pricing.
            </p>
            <div className="mt-6 pt-6 border-t border-[#38bdf8]/30">
              <p className="text-white font-bold mb-3">💰 Want OwnerClone for FREE?</p>
              <p className="text-gray-300 text-sm mb-4">
                Upgrade your POS system and get OwnerClone included at no cost.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-[#38bdf8] text-black font-bold rounded-lg hover:bg-[#0ea5e9] transition-colors"
              >
                Ask Us How to Get Free Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Card */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-4 border-[#10b981] rounded-3xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="text-6xl md:text-7xl font-bold text-[#10b981] mb-2">$0.20</div>
              <div className="text-2xl text-gray-300 mb-4">per customer visit per month</div>
              <p className="text-lg text-gray-400">
                That's it. No hidden fees. No setup costs. No long-term contracts.
              </p>
            </div>

            {/* Pricing Examples */}
            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-center">What You'll Pay Based on Your Traffic</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3">
                  <span className="text-gray-300 font-medium">500 customers per month</span>
                  <span className="text-2xl font-bold text-[#10b981]">$100/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3">
                  <span className="text-gray-300 font-medium">1,000 customers per month</span>
                  <span className="text-2xl font-bold text-[#10b981]">$200/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-3">
                  <span className="text-gray-300 font-medium">1,500 customers per month</span>
                  <span className="text-2xl font-bold text-[#10b981]">$300/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">2,000 customers per month</span>
                  <span className="text-2xl font-bold text-[#10b981]">$400/mo</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Everything Included</h3>
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
                    <FaCheck className="text-[#10b981] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#10b981] text-black font-bold text-lg rounded-lg hover:bg-[#059669] transition-colors shadow-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                Get Started Today
              </Link>
              <p className="mt-4 text-gray-400">
                No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Why This Pricing Makes Sense */}
          <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Per-Customer Pricing?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Most restaurant software charges flat monthly fees that don't scale with your business. A small pizzeria with 500 customers pays the same as a bustling sports bar with 2,000 customers. That's not fair, and it doesn't make sense.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              OwnerClone's per-customer pricing means you only pay for what you use. When business is slow, your software costs are lower. When you are crushing it and serving tons of customers, you pay a bit more because you are making more money. Your software scales with your success.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This model also aligns our incentives perfectly. I succeed when you succeed. I'm motivated to build features that help you serve more customers and increase your profits, because that's how I grow too. We're in this together.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            The Math That Makes This a <span className="text-[#10b981]">No-Brainer</span>
          </h2>
          
          <div className="backdrop-blur-xl bg-white/5 border-2 border-[#10b981]/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Average Restaurant Serving 1,000 Customers/Month</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#38bdf8] pl-6">
                <div className="font-semibold text-gray-300 mb-1">Your OwnerClone Cost</div>
                <div className="text-3xl font-bold text-[#38bdf8]">$200/month</div>
                <div className="text-gray-400">($2,400 per year)</div>
              </div>

              <div className="border-l-4 border-[#10b981] pl-6">
                <div className="font-semibold text-gray-300 mb-1">Reduce Food Costs by Just 2%</div>
                <div className="text-lg text-gray-300 mb-2">
                  Average restaurant: $800,000 annual revenue × 30% food cost = $240,000/year
                </div>
                <div className="text-3xl font-bold text-[#10b981]">Save $4,800/year</div>
              </div>

              <div className="border-l-4 border-[#10b981] pl-6">
                <div className="font-semibold text-gray-300 mb-1">Catch Theft Early</div>
                <div className="text-lg text-gray-300 mb-2">
                  I lost $40,000 to a manager void scam before I caught it. If you catch theft just once:
                </div>
                <div className="text-3xl font-bold text-[#10b981]">Save $10,000 - $40,000</div>
              </div>

              <div className="border-l-4 border-[#10b981] pl-6">
                <div className="font-semibold text-gray-300 mb-1">Optimize Labor Scheduling</div>
                <div className="text-lg text-gray-300 mb-2">
                  Reduce unnecessary overtime and improve scheduling efficiency by 3%
                </div>
                <div className="text-lg text-gray-300 mb-2">
                  $800,000 revenue × 30% labor cost = $240,000/year
                </div>
                <div className="text-3xl font-bold text-[#10b981]">Save $7,200/year</div>
              </div>

              <div className="bg-[#10b981]/10 border-2 border-[#10b981] rounded-xl p-6 mt-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-300 mb-2">Conservative Total Annual Savings</div>
                  <div className="text-5xl font-bold text-[#10b981] mb-2">$22,000+</div>
                  <div className="text-lg text-gray-400 mb-4">minus $2,400 software cost</div>
                  <div className="text-3xl font-bold text-white">Net Benefit: $19,600/year</div>
                  <div className="text-xl text-gray-300 mt-2">ROI: 817%</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-300">
            And that's just from catching problems and optimizing costs. It doesn't include increased revenue from better marketing, improved customer retention, or the time you get back in your life.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            How We <span className="text-[#38bdf8]">Compare</span>
          </h2>
          
          <div className="overflow-x-auto backdrop-blur-xl bg-white/5 rounded-2xl p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="border border-[#2a2a2a] p-4 text-left">Feature</th>
                  <th className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10">OwnerClone</th>
                  <th className="border border-[#2a2a2a] p-4 text-center">Toast Competitor</th>
                  <th className="border border-[#2a2a2a] p-4 text-center">MarginEdge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Monthly Cost (1,000 customers)</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 font-bold text-[#38bdf8]">$200</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">$165+</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">$300+</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Setup Fee</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981] font-bold">$0</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">$500+</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-gray-400">$0</td>
                </tr>
                <tr>
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Food Cost Tracking</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#10b981]">✓</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Labor Management</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
                <tr>
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Theft Detection</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Demand Forecasting</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
                <tr>
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Marketing Automation</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-[#2a2a2a] p-4 font-semibold">AI Phone Assistant</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981]">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
                <tr>
                  <td className="border border-[#2a2a2a] p-4 font-semibold">Built by Restaurant Owners</td>
                  <td className="border border-[#2a2a2a] p-4 text-center bg-[#38bdf8]/10 text-[#10b981] font-bold">✓</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                  <td className="border border-[#2a2a2a] p-4 text-center text-[#ef4444]">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Common <span className="text-[#38bdf8]">Questions</span>
          </h2>
          
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">How do you count customers?</h3>
              <p className="text-gray-300 mb-3">
                A "customer" is one cover - one person physically walking in your door and sitting down. We pull this directly from your POS system's cover count, not from transactions or checks.
              </p>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Smart Error Detection:</strong> We know servers make mistakes. If a server accidentally punches in 1,000 people instead of 10, our system catches it automatically and corrects it - not just for our billing, but for your metrics too. Imagine what a 1,000-person entry would do to your per-person average if we didn't catch it.
              </p>
              <p className="text-gray-300">
                This means you get accurate billing and accurate analytics at the same time. No inflated bills from typos, and no garbage data messing up your business intelligence.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">What if my customer count varies a lot month to month?</h3>
              <p className="text-gray-300">
                That's the beauty of per-customer pricing. In slow months, you pay less. In busy months, you pay more, but you are also making more money. Your software cost scales naturally with your business.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">Is there a minimum or maximum?</h3>
              <p className="text-gray-300">
                No minimum. No maximum. Whether you serve 100 customers or 10,000, the pricing stays the same: $0.20 per customer. Fair and scalable for businesses of all sizes.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">What if OwnerClone isn't saving me money?</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Our 150% ROI Guarantee:</strong> We track your return on investment continuously and show you the results in your dashboard. If your ROI falls below 150% of what you're paying us, we schedule a meeting with you immediately.
              </p>
              <p className="text-gray-300">
                We'll review your operations together, identify where the value isn't showing up, and work with you to get back on track. You're not just buying software - you're getting an operational consultant who is financially incentivized to make sure you succeed. This is the OwnerClone Honesty Advantage.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">Do you offer annual discounts?</h3>
              <p className="text-gray-300">
                Yes! Pay annually and save 15%. Contact us for details and we'll set you up with annual billing.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-300">
                Absolutely. No long-term contracts. No cancellation fees. If OwnerClone isn't saving you money and making your life easier, you can cancel with 30 days notice. We also offer a 30-day money-back guarantee.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#38bdf8] mb-3">What about support?</h3>
              <p className="text-gray-300">
                Email and phone support is included at no extra charge. You'll have direct access to our support team, and because I built this from my own restaurant experience, we actually understand your problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#38bdf8]/20 to-[#10b981]/20 border-2 border-[#38bdf8] rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Guessing and <span className="text-[#38bdf8]">Start Knowing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join independent restaurant owners who are finally running profitable businesses with real data instead of spreadsheets and gut feelings.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#38bdf8] text-black font-bold text-lg rounded-lg hover:bg-[#0ea5e9] transition shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              Get Started Today
            </Link>
            <p className="mt-6 text-gray-400">
              Questions? Send us an email - info@ownerclone.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
