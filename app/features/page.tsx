import { Metadata } from 'next'
import Link from 'next/link'
import { FaUtensils, FaUsers, FaCog, FaCookie, FaGlassWhiskey, FaUserTie } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Features - Restaurant Management Modules | OwnerClone',
  description: 'Comprehensive restaurant management features including food costing down to the gram, labor tracking, inventory management, and theft detection. Built for independent restaurant owners.',
  keywords: ['restaurant management features', 'food cost calculator', 'labor scheduling', 'inventory tracking', 'restaurant operations', 'POS integration features'],
}

export default function Features() {
  const modules = [
    {
      icon: FaUtensils,
      name: 'Food Module',
      tagline: 'Track Everything Down to the Gram',
      description: 'Stop guessing at your food costs. Upload supplier invoices and OwnerClone automatically extracts pricing and builds your recipes for you - no more spending weeks building an inventory system from scratch. Track every ingredient down to the gram, not just by ounce or cup. Calculate per-plate costs with prep items and finished plates. Get alerts when ingredient prices spike. Finally understand which menu items are making you money and which ones are bleeding you dry. Automatic recipe building gets you started - all you have to do is tweak.',
      features: [
        'AI-powered invoice parsing (just upload PDFs)',
        'Automatic recipe building to get you started fast',
        'Track ingredients down to the gram',
        'Recipe costing with prep items and plate items',
        'Real-time ingredient price tracking',
        'Menu profitability analysis',
        'Price optimization recommendations',
        'Supplier price comparison',
      ]
    },
    {
      icon: FaUsers,
      name: 'Teams Module',
      tagline: 'Schedule Smarter, Not Harder',
      description: 'Labor costs are your second-biggest expense, and being off by even one person can destroy your margins. The Teams module uses demand forecasting to recommend optimal staffing levels, tracks time clock data from your POS, flags overtime before it happens, and gives you complete visibility into who worked when and what it cost you.',
      features: [
        'Smart scheduling based on predicted traffic',
        'POS time clock integration',
        'Overtime alerts and prevention',
        'Labor cost percentage tracking',
        'Team messaging and task management',
        'Employee performance tracking',
        'Schedule templates for recurring shifts',
      ]
    },
    {
      icon: FaCog,
      name: 'Operations Module',
      tagline: 'Run Your Business, Not Chase Papers',
      description: 'Invoices pile up. Bills get paid late. Tax time is a nightmare. The Operations module automatically processes emailed invoices, tracks what you owe and when, categorizes expenses for bookkeeping, and generates P&L reports that actually make sense. Stop digging through papers and start understanding your business.',
      features: [
        'Automated invoice processing from email',
        'Bill payment tracking and reminders',
        'Expense categorization for taxes',
        'P&L and cash flow reports',
        'Inventory ordering and par level management',
        'Equipment maintenance tracking',
        'Vendor management and payment history',
      ]
    },
    {
      icon: FaCookie,
      name: 'Chef Module',
      tagline: 'Digital Kitchen Management',
      description: 'Keep your scratch kitchen consistent whether you are there or not. Digital recipe cards with photos, ingredient substitution suggestions when suppliers are out, prep lists that auto-generate based on predicted demand, and special recommendations based on what ingredients you need to use before they spoil.',
      features: [
        'Digital recipe cards with photos and videos',
        'Prep list auto-generation from forecasts',
        'Ingredient substitution suggestions',
        'Waste tracking and reduction tips',
        'Menu engineering recommendations',
        'Seasonal menu planning',
        'Kitchen tablet interface for cooks',
      ]
    },
    {
      icon: FaGlassWhiskey,
      name: 'Bartender Module',
      tagline: 'Control Your Pour Costs',
      description: 'Bar costs are notoriously hard to track because everyone pours differently and over-pouring kills margins. Track your liquor inventory separately from food, monitor beer with our dedicated beer tracker, get alerts when bottles should be empty but are not, monitor pour costs by bartender, and finally understand if your bar is profitable or just busy.',
      features: [
        'Cocktail recipe costing',
        'Beer tracker for draft and bottle inventory',
        'Pour cost tracking by bartender',
        'Liquor inventory management',
        'Over-pouring detection',
        'Popular drink analysis',
        'Bar menu profitability',
        'Happy hour performance tracking',
      ]
    },
    {
      icon: FaUserTie,
      name: 'Server Module',
      tagline: 'Better Service, Higher Tips',
      description: 'Your servers are the face of your restaurant, but they often lack the information they need to provide great service. The Server module gives them instant access to customer preferences, allergy information, previous orders, and special occasion notes. Provide personalized service that turns first-timers into regulars.',
      features: [
        'Customer preference tracking',
        'Allergy and dietary restriction notes',
        'Order history for returning guests',
        'Birthday and anniversary alerts',
        'Table management and section optimization',
        'Tip tracking and performance metrics',
        'Mobile app for servers',
      ]
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">
            Everything You Need to Run a Profitable Restaurant
          </h1>
          <p className="text-xl text-primary-100">
            Six powerful modules that work together to give you complete control over your operations, costs, and profitability. No more spreadsheets. No more guessing. Just real data and actionable insights.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-container">
        <div className="space-y-16">
          {modules.map((module, index) => {
            const Icon = module.icon
            const isEven = index % 2 === 0
            
            return (
              <div key={module.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-lg">
                    <Icon className="text-6xl text-primary-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{module.name}</h2>
                    <p className="text-lg text-primary-700 font-semibold">{module.tagline}</p>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">Works With Your POS System</h2>
            <p className="text-lg text-gray-700">
              OwnerClone integrates seamlessly with Toast and Skytab POS systems. Already using a different system? No problem. You can upload daily or weekly reports manually, and we'll extract all the data automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Toast POS</h3>
              <p className="text-gray-600">Full API integration for real-time data sync</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Skytab POS</h3>
              <p className="text-gray-600">Complete integration with all features</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Any POS</h3>
              <p className="text-gray-600">Manual report uploads processed automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">Built by Restaurant Owners Who Get It</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I closed three restaurant concepts because I couldn't see the problems until it was too late. OwnerClone is the system I wish I'd had when I was bleeding money on food costs I didn't know were spiking, labor costs I couldn't control, and theft I couldn't detect. Every feature solves a real problem that cost me real money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Reduce Food Costs</h3>
              <p className="text-gray-600">Catch ingredient price spikes before they destroy your margins</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Optimize Labor</h3>
              <p className="text-gray-600">Schedule based on actual demand, not guesswork</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Prevent Theft</h3>
              <p className="text-gray-600">Detect manager scams and employee theft in real-time</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Real-Time Insights</h3>
              <p className="text-gray-600">Know exactly where you stand at any moment</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Marketing</h3>
              <p className="text-gray-600">Fill seats automatically with targeted campaigns</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Scale Confidently</h3>
              <p className="text-gray-600">Maintain quality even when you're not there</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="mb-6">Ready to Take Control of Your Restaurant?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            See how OwnerClone can transform your operations and increase your profits. All features included. No hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
              View Pricing
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
