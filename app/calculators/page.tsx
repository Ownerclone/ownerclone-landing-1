import { Metadata } from 'next'
import Link from 'next/link'
import { FaCalculator, FaUtensils, FaUsers, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Free Restaurant Calculators | OwnerClone',
  description: 'Free restaurant management calculators for prime cost, food cost, and labor cost. Calculate your restaurant\'s key profitability metrics instantly.',
  keywords: ['restaurant calculator', 'prime cost calculator', 'food cost calculator', 'labor cost calculator', 'restaurant profitability'],
}

export default function Calculators() {
  const calculators = [
    {
      title: 'Prime Cost Calculator',
      icon: FaChartLine,
      description: 'Calculate your restaurant\'s prime cost - the single most important metric for profitability. Combines food cost and labor cost into one crucial number.',
      slug: 'prime-cost',
      color: 'from-primary-600 to-primary-800',
      hoverColor: 'hover:border-primary-600',
    },
    {
      title: 'Food Cost Calculator',
      icon: FaUtensils,
      description: 'Calculate your Cost of Goods Sold (COGS) and food cost percentage. Know exactly how much of every sales dollar goes to food and beverage.',
      slug: 'food-cost',
      color: 'from-green-600 to-green-800',
      hoverColor: 'hover:border-green-600',
    },
    {
      title: 'Labor Cost Calculator',
      icon: FaUsers,
      description: 'Calculate your true labor costs including wages, payroll taxes, and benefits. Understand your complete labor percentage and cost per hour.',
      slug: 'labor-cost',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:border-blue-600',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <FaCalculator className="text-6xl text-primary-400" />
          </div>
          <h1 className="mb-6">Free Restaurant Calculators</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate the key metrics that determine your restaurant's profitability. All three calculators are completely free and give you instant results.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {calculators.map((calc) => (
              <Link 
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className={`block bg-white border-2 border-gray-200 ${calc.hoverColor} rounded-lg p-8 transition-all hover:shadow-xl group`}
              >
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${calc.color} text-white mb-6`}>
                  <calc.icon className="text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {calc.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {calc.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Use Calculator</span>
                  <span className="ml-2 group-hover:ml-0">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Why Use These Calculators */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why These Calculators Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Know Your Numbers</h3>
                <p className="text-gray-700">
                  Most restaurant owners operate without knowing their true costs. These calculators give you the exact numbers you need to make informed decisions about pricing, staffing, and purchasing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Catch Problems Early</h3>
                <p className="text-gray-700">
                  When you calculate these metrics weekly, you can spot problems while they're still small. A food cost that creeps from thirty percent to thirty-three percent might not seem like much, but that's thousands of dollars per month.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Compare to Benchmarks</h3>
                <p className="text-gray-700">
                  Each calculator shows you industry-standard ranges so you know if you're operating efficiently or if you need to make changes. You can't improve what you don't measure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Make Better Decisions</h3>
                <p className="text-gray-700">
                  Should you raise menu prices, negotiate with vendors, or optimize your labor schedule? Your numbers tell you where to focus your efforts for maximum impact on profitability.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Use These Calculators</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Gather Your Data</h3>
                <p className="text-gray-700">
                  You'll need your sales figures from your POS system, inventory counts, and payroll data. Most restaurants can gather this information in about fifteen minutes.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Enter Your Numbers</h3>
                <p className="text-gray-700">
                  Input your data into the calculator. The results update instantly as you type, so you can see your percentages in real-time and understand how different numbers affect your profitability.
                </p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary-600 mb-4">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Take Action</h3>
                <p className="text-gray-700">
                  Use your results to identify problems and opportunities. Each calculator shows you target ranges and explains what your numbers mean for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learn More About Restaurant Profitability</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/how-to-calculate-prime-cost" className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">How to Calculate Prime Cost</h3>
                <p className="text-sm text-gray-600">Complete guide to understanding and improving your prime cost percentage.</p>
              </Link>
              <Link href="/blog/food-cost-management-guide" className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Food Cost Management Guide</h3>
                <p className="text-sm text-gray-600">Everything you need to know about tracking and reducing food costs.</p>
              </Link>
              <Link href="/blog/why-restaurants-fail" className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Why Restaurants Fail</h3>
                <p className="text-sm text-gray-600">The real reasons sixty percent of restaurants close in year one.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Tired of Manual Calculations?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              OwnerClone automatically calculates all of these metrics from your POS data in real-time. No spreadsheets, no manual inventory counts, no calculations. Just instant visibility into your restaurant's profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/early-access" className="btn-secondary inline-block">
                Join Early Access Waitlist
              </Link>
              <Link href="/features" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                See How OwnerClone Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
