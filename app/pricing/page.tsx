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
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="bg-accent-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide">
              🚀 Early Adopter Pricing - Limited Time
            </span>
          </div>
          <h1 className="mb-6">
            Pricing Built for Independent Restaurant Owners
          </h1>
          <p className="text-xl text-primary-100 mb-6">
            No complicated tiers. No hidden fees. Just simple, transparent pricing that scales with your business.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border-2 border-white/20">
            <p className="text-lg text-white font-semibold mb-2">
              ⚡ Lock in This Pricing Forever!
            </p>
            <p className="text-primary-100 mb-4">
              These prices are for early adopters only. In the future, new customers will pay more - but you'll keep your early adopter rate forever. Join now and help us build your modules faster while locking in incredible pricing.
            </p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-white font-semibold mb-2">💰 Want OwnerClone for FREE?</p>
              <p className="text-primary-100 text-sm mb-3">
                Upgrade your POS system and get OwnerClone included at no cost.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Ask Us How to Get Free Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 border-4 border-primary-600 rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="text-6xl md:text-7xl font-bold text-primary-600 mb-2">$0.20</div>
              <div className="text-2xl text-gray-700 mb-4">per customer visit per month</div>
              <p className="text-lg text-gray-600">
                That's it. No hidden fees. No setup costs. No long-term contracts.
              </p>
            </div>

            {/* Pricing Examples */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">What You'll Pay Based on Your Traffic</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700 font-medium">500 customers per month</span>
                  <span className="text-2xl font-bold text-primary-600">$100/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700 font-medium">1,000 customers per month</span>
                  <span className="text-2xl font-bold text-primary-600">$200/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-700 font-medium">1,500 customers per month</span>
                  <span className="text-2xl font-bold text-primary-600">$300/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">2,000 customers per month</span>
                  <span className="text-2xl font-bold text-primary-600">$400/mo</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Everything Included</h3>
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
                    <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-primary-600 text-white font-bold text-lg rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Today
              </Link>
              <p className="mt-4 text-gray-600">
                No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Why This Pricing Makes Sense */}
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Per-Customer Pricing?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most restaurant software charges flat monthly fees that don't scale with your business. A small pizzeria with 500 customers pays the same as a bustling sports bar with 2,000 customers. That's not fair, and it doesn't make sense.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              OwnerClone's per-customer pricing means you only pay for what you use. When business is slow, your software costs are lower. When you are crushing it and serving tons of customers, you pay a bit more because you are making more money. Your software scales with your success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This model also aligns our incentives perfectly. I succeed when you succeed. I'm motivated to build features that help you serve more customers and increase your profits, because that's how I grow too. We're in this together.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Math That Makes This a No-Brainer</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Restaurant Serving 1,000 Customers/Month</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Your OwnerClone Cost</div>
                  <div className="text-3xl font-bold text-primary-600">$200/month</div>
                  <div className="text-gray-600">($2,400 per year)</div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Reduce Food Costs by Just 2%</div>
                  <div className="text-lg text-gray-700 mb-2">
                    Average restaurant: $800,000 annual revenue × 30% food cost = $240,000/year
                  </div>
                  <div className="text-3xl font-bold text-green-600">Save $4,800/year</div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Catch Theft Early</div>
                  <div className="text-lg text-gray-700 mb-2">
                    I lost $40,000 to a manager void scam before I caught it. If you catch theft just once:
                  </div>
                  <div className="text-3xl font-bold text-green-600">Save $10,000 - $40,000</div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Optimize Labor Scheduling</div>
                  <div className="text-lg text-gray-700 mb-2">
                    Reduce unnecessary overtime and improve scheduling efficiency by 3%
                  </div>
                  <div className="text-lg text-gray-700 mb-2">
                    $800,000 revenue × 30% labor cost = $240,000/year
                  </div>
                  <div className="text-3xl font-bold text-green-600">Save $7,200/year</div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Conservative Total Annual Savings</div>
                    <div className="text-5xl font-bold text-green-600 mb-2">$22,000+</div>
                    <div className="text-lg text-gray-700 mb-4">minus $2,400 software cost</div>
                    <div className="text-3xl font-bold text-gray-900">Net Benefit: $19,600/year</div>
                    <div className="text-xl text-gray-600 mt-2">ROI: 817%</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-lg text-gray-700">
              And that's just from catching problems and optimizing costs. It doesn't include increased revenue from better marketing, improved customer retention, or the time you get back in your life.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Compare</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left">Feature</th>
                    <th className="border border-gray-300 p-4 text-center bg-primary-50">OwnerClone</th>
                    <th className="border border-gray-300 p-4 text-center">Toast Competitor</th>
                    <th className="border border-gray-300 p-4 text-center">MarginEdge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Monthly Cost (1,000 customers)</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 font-bold text-primary-600">$200</td>
                    <td className="border border-gray-300 p-4 text-center">$165+</td>
                    <td className="border border-gray-300 p-4 text-center">$300+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Setup Fee</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600 font-bold">$0</td>
                    <td className="border border-gray-300 p-4 text-center">$500+</td>
                    <td className="border border-gray-300 p-4 text-center">$0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Food Cost Tracking</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Labor Management</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Theft Detection</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Demand Forecasting</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Marketing Automation</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">AI Phone Assistant</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Built by Restaurant Owners</td>
                    <td className="border border-gray-300 p-4 text-center bg-primary-50 text-green-600 font-bold">✓</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do you count customers?</h3>
                <p className="text-gray-700 mb-3">
                  A "customer" is one cover - one person physically walking in your door and sitting down. We pull this directly from your POS system's cover count, not from transactions or checks.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Smart Error Detection:</strong> We know servers make mistakes. If a server accidentally punches in 1,000 people instead of 10, our system catches it automatically and corrects it - not just for our billing, but for your metrics too. Imagine what a 1,000-person entry would do to your per-person average if we didn't catch it.
                </p>
                <p className="text-gray-700">
                  This means you get accurate billing and accurate analytics at the same time. No inflated bills from typos, and no garbage data messing up your business intelligence.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if my customer count varies a lot month to month?</h3>
                <p className="text-gray-700">
                  That's the beauty of per-customer pricing. In slow months, you pay less. In busy months, you pay more, but you are also making more money. Your software cost scales naturally with your business.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a minimum or maximum?</h3>
                <p className="text-gray-700">
                  No minimum. No maximum. Whether you serve 100 customers or 10,000, the pricing stays the same: $0.20 per customer. Fair and scalable for businesses of all sizes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if OwnerClone isn't saving me money?</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Our 150% ROI Guarantee:</strong> We track your return on investment continuously and show you the results in your dashboard. If your ROI falls below 150% of what you're paying us, we schedule a meeting with you immediately.
                </p>
                <p className="text-gray-700">
                  We'll review your operations together, identify where the value isn't showing up, and work with you to get back on track. You're not just buying software - you're getting an operational consultant who is financially incentivized to make sure you succeed. This is the OwnerClone Honesty Advantage.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer annual discounts?</h3>
                <p className="text-gray-700">
                  Yes! Pay annually and save 15%. Contact us for details and we'll set you up with annual billing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-700">
                  Absolutely. No long-term contracts. No cancellation fees. If OwnerClone isn't saving you money and making your life easier, you can cancel with 30 days notice. We also offer a 30-day money-back guarantee.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What about support?</h3>
                <p className="text-gray-700">
                  Email and phone support is included at no extra charge. You'll have direct access to our support team, and because I built this from my own restaurant experience, we actually understand your problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="mb-6">Ready to Stop Guessing and Start Knowing?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join independent restaurant owners who are finally running profitable businesses with real data instead of spreadsheets and gut feelings.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-primary-600 font-bold text-lg rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </Link>
          <p className="mt-6 text-primary-200">
            Questions? Send us an email - info@ownerclone.com
          </p>
        </div>
      </section>
    </>
  )
}
