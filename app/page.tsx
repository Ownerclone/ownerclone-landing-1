import Link from 'next/link'
import { FaChartLine, FaDollarSign, FaUsers, FaClock, FaShieldAlt, FaBrain, FaUtensils, FaBell } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Restaurant Management Software Built by Restaurant Owners for Restaurant Owners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Stop drowning in spreadsheets. Start making money. Automate your restaurant operations with seamless POS integration, real-time analytics, and AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
                Get Started Today
              </Link>
              <Link href="/features" className="px-8 py-4 bg-primary-700 text-white font-bold rounded-lg border-2 border-white hover:bg-primary-600 transition-colors duration-200 text-lg">
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-primary-200">
              Only $0.20 per customer visit per month • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">Built by Someone Who's Been in Your Shoes</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our founder spent two decades building a successful film equipment rental business with locations across multiple cities and international operations. After achieving that success, he decided to enter the restaurant industry and opened three concepts: an Italian restaurant, a BBQ smokehouse, and a sports bar. Despite having entrepreneurial experience, the restaurant industry was different - operational chaos that couldn't be seen until it was too late. Those experiences led to the creation of OwnerClone: a system that shows you the problems before they become disasters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">You're Losing Money and Don't Know Where</h3>
              <p className="text-gray-600">
                Food costs spike. Inventory disappears. You're working 80-hour weeks but your bank account says something different. The numbers don't add up, but you can't figure out why.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">You Can't Scale Without Losing Quality</h3>
              <p className="text-gray-600">
                When you're at the restaurant, everything runs smoothly. The moment you leave, costs explode, quality drops, and staff takes advantage. You're trapped.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Spreadsheets and Guesswork Aren't Working</h3>
              <p className="text-gray-600">
                You spend hours updating spreadsheets that are outdated the moment you save them. You're making decisions based on gut feeling instead of data, and it's killing your margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">OwnerClone Shows You the Problems Before They Kill Your Business</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              After experiencing the restaurant industry firsthand, we spent two years building the system every independent owner needs. OwnerClone integrates with your POS system (Toast, Skytab, or manual uploads) to automatically track everything that matters. No more spreadsheets. No more guessing. No more surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaDollarSign className="text-4xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Automated Food Cost Management</h3>
                  <p className="text-gray-600">
                    Food costs can bleed money silently until you're already in trouble. OwnerClone tracks ingredient costs in real-time, calculates recipe profitability down to the gram, and alerts you when costs spike before they destroy your margins. Automatic recipe building gets you started in minutes - no more spending weeks building an inventory system from scratch.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaClock className="text-4xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Labor Cost Tracking</h3>
                  <p className="text-gray-600">
                    When owners can't be at the restaurant daily, labor costs often explode. Overtime happens. Theft occurs. OwnerClone monitors labor patterns, flags anomalies, and helps you optimize schedules even when you're not physically present. Maintain control without being there 80 hours a week.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaShieldAlt className="text-4xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Theft Detection That Actually Works</h3>
                  <p className="text-gray-600">
                    Industry data shows manager void scams average $40,000 before they're discovered. OwnerClone's Theft Shield monitors every void, comp, and discount in real-time, flagging patterns that indicate theft before it becomes a five-figure problem.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaBrain className="text-4xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Demand Forecasting</h3>
                  <p className="text-gray-600">
                    Being understaffed kills service. Being overstaffed kills profits. OwnerClone predicts your traffic seven days out using weather data, local events, and historical patterns, so you can schedule perfectly and prep precisely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/features" className="btn-primary text-lg px-8 py-4">
              See All Features
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">Get Started in Minutes, Not Months</h2>
            <p className="text-lg text-gray-700">
              No complicated setup. No training required. Just connect your POS system and start making better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Connect Your POS</h3>
              <p className="text-gray-600">Toast, Skytab, or manual report uploads. Takes 5 minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">We Import Your Data</h3>
              <p className="text-gray-600">All your sales, inventory, and labor data automatically syncs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Get Instant Insights</h3>
              <p className="text-gray-600">See exactly where you're making and losing money.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Make Better Decisions</h3>
              <p className="text-gray-600">Data-driven decisions that increase profits immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honesty Advantage Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">The OwnerClone Honesty Advantage</h2>
            <p className="text-xl text-gray-700 font-semibold mb-8">
              We don't get paid if you're not saving more or making more than we cost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">We Track Your ROI Continuously</h3>
                  <p className="text-gray-700">
                    OwnerClone doesn't just show you where you're saving money - we calculate and display your exact return on investment in real-time. You'll always know if the platform is worth what you're paying.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">150% ROI Guarantee</h3>
                  <p className="text-gray-700">
                    If your return on investment falls below 150% of what you're paying us, we schedule a meeting with you immediately. We'll review your operations together, identify where the value isn't showing up, and work with you to get back on track.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Consultant Built In for Your Protection</h3>
                  <p className="text-gray-700">
                    You're not just buying software - you're getting an operational consultant who is financially incentivized to make sure you succeed. When your ROI drops, we work directly with you to solve the problem. Your success is our success.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-center text-lg text-gray-800 font-semibold">
                This means you can try OwnerClone with confidence, knowing that if it's not delivering 150% of what you're paying, we'll fix it together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-gray-900">Pricing Built for Independent Restaurants</h2>
            <p className="text-lg text-gray-700 mb-8">
              I spent tens of thousands on consultants, software, and systems that didn't work. OwnerClone costs less than one part-time manager and actually solves your problems.
            </p>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">$0.20</div>
              <div className="text-xl text-gray-700 mb-4">per customer visit per month</div>
              <p className="text-gray-600 mb-6">
                For a restaurant serving 1,000 customers per month: Only $200/month
              </p>
              <Link href="/pricing" className="btn-primary text-lg px-8 py-4">
                See Full Pricing Details
              </Link>
            </div>

            <p className="text-gray-600">
              All features included • No hidden fees • No setup costs • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="mb-6">Stop Guessing. Start Knowing.</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join independent restaurant owners who are finally running their businesses with real data instead of gut feelings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
              Get Started Today
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
