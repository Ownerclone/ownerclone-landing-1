import { Metadata } from 'next'
import Link from 'next/link'
import { FaUtensils, FaUsers, FaShieldAlt, FaEye } from 'react-icons/fa'

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
      wittyHeadline: 'Your Food Costs Are Lying to You',
      description: 'Stop guessing at your food costs. Upload supplier invoices from Sysco, US Foods, or any vendor and OwnerClone automatically extracts pricing using GPT-4 Vision. Our AI generates professional recipes for your entire menu, calculates per-plate costs down to the gram, and alerts you when ingredient prices spike before they destroy your margins. The average restaurant saves $1,800/month by catching price increases, optimizing portions, and identifying which menu items are profitable vs. which ones are bleeding you dry.',
      features: [
        'AI-powered invoice parsing with GPT-4 Vision',
        'Automatic recipe generation for your entire menu',
        'Per-plate costing down to the gram',
        'Real-time ingredient price tracking',
        'Supplier price comparison across vendors',
        'Menu profitability analysis',
        'Price spike alerts before they hurt margins',
        'Works with ANY supplier invoice format',
      ]
    },
    {
      icon: FaUsers,
      name: 'Labor Module',
      tagline: 'Schedule Smarter, Save More',
      wittyHeadline: 'Stop Paying People to Stand Around (Or Getting Slammed Short-Handed)',
      description: 'Labor is your second-biggest cost, and being off by even one person destroys margins. The Labor module integrates with your POS time clock data to track actual vs. scheduled hours, flags overtime before it happens, and uses Prophet forecasting to recommend optimal staffing levels for each shift. Stop paying people to stand around on slow days and stop getting slammed short-handed on busy nights. Track labor cost percentage in real-time and get alerts when costs exceed targets.',
      features: [
        'POS time clock integration (Toast, Skytab, any POS)',
        'Real-time labor cost percentage tracking',
        'Overtime alerts and prevention',
        'Prophet-powered staffing recommendations',
        'Actual vs. scheduled hours comparison',
        'Labor cost targets and threshold alerts',
        'Schedule optimization based on predicted demand',
        'Historical pattern analysis for better planning',
      ]
    },
    {
      icon: FaShieldAlt,
      name: 'Theft Shield',
      tagline: 'Catch Theft Before It Costs You $40K',
      wittyHeadline: 'That Manager You Trust? They Might Be Stealing From You Right Now',
      description: 'Manager void scams average $40,000 before they\'re discovered - that\'s exactly what happened at my restaurant. Theft Shield monitors every POS transaction for fraud patterns: excessive voids, after-hours activity, voiding other employees\' transactions, suspicious comps, and under-ringing schemes. Our AI analyzes your data against patterns from 1,000+ restaurants and sends real-time alerts with timestamps, employee names, and evidence. Stop watching hours of security footage hoping to find something - Theft Shield tells you exactly which transactions to investigate.',
      features: [
        'Manager void scam detection (the $40K case)',
        'Excessive voids and comps flagging',
        'After-hours transaction alerts',
        'Under-ringing pattern detection',
        'Cross-employee void analysis',
        'Network pattern comparison across restaurants',
        'Real-time SMS/email fraud alerts',
        'Evidence collection with timestamps',
      ]
    },
    {
      icon: FaEye,
      name: 'Prophet',
      tagline: 'Predict Demand 7 Days Out with 90% Accuracy',
      wittyHeadline: 'Know Next Friday Will Be Slammed Before Your Competition Does',
      description: 'Stop guessing on staffing and food orders. Prophet predicts your customer traffic 7 days in advance with 90%+ accuracy by analyzing your sales history, weather forecasts, local events (concerts, sports, festivals), holidays, school calendars, and paydays. Know exactly when to staff up for a busy Friday or when to send people home early on a slow Tuesday. Get specific staffing recommendations ("add 2 servers and 1 line cook") and prep quantities ("order 200 lbs wings vs your usual 80 lbs"). The average restaurant saves $900/month by eliminating waste and preventing lost revenue from understaffing.',
      features: [
        '7-day demand forecast with 90%+ accuracy',
        'Weather impact analysis (rain = slow, sun = busy patio)',
        'Local event detection (concerts, sports, festivals)',
        'Holiday and payday pattern recognition',
        'School calendar impact analysis',
        'Specific staffing recommendations per shift',
        'Prep quantity calculations by ingredient',
        'Real-time adjustments if day is busier/slower',
      ]
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-blue"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-blue" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Everything You Need to Run a <span className="text-cyan-bright">Profitable Restaurant</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mb-6">
            Introducing <span className="text-cyan-bright">OwnerClone MVP</span>
          </h2>
          <p className="text-xl text-gray-300">
            Four powerful modules that work together to give you complete control over your operations, costs, and profitability. No more spreadsheets. No more guessing. Just real data and actionable insights.
          </p>
        </div>
        
        {/* Blue separator line at bottom of hero */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[#38bdf8]"></div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {modules.map((module) => {
            const Icon = module.icon
            
            return (
              <div key={module.name} className="space-y-6">
                {/* Witty H3 Tagline with underline */}
                <div className="flex flex-col items-center mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-bright text-center border-b-2 border-[#38bdf8] pb-3">
                    {module.wittyHeadline}
                  </h3>
                </div>
                
                {/* Centered Description Paragraph */}
                <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                  {module.description}
                </p>
                
                {/* Two Cards Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Card - Module Name & Tagline */}
                  <div className="card-space rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                    <Icon className="text-6xl text-cyan-bright mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">{module.name}</h2>
                    <p className="text-lg text-cyan-400 font-semibold">{module.tagline}</p>
                  </div>
                  
                  {/* Right Card - Key Features */}
                  <div className="glass-effect rounded-2xl p-8 border border-blue-400/30">
                    <h3 className="text-lg font-bold text-white mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
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
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0f1419] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Works With Your <span className="text-cyan-bright">POS System</span>
            </h2>
            <p className="text-lg text-gray-300">
              OwnerClone integrates seamlessly with Toast and Skytab POS systems. Already using a different system? No problem. You can upload daily or weekly reports manually, and we'll extract all the data automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-space p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Toast POS</h3>
              <p className="text-gray-400">Full API integration for real-time data sync</p>
            </div>
            
            <div className="card-space p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Skytab POS</h3>
              <p className="text-gray-400">Complete integration with all features</p>
            </div>
            
            <div className="card-space p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Any POS</h3>
              <p className="text-gray-400">Manual report uploads processed automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Built by Restaurant Owners <span className="text-cyan-bright">Who Get It</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I closed three restaurant concepts because I couldn't see the problems until it was too late. OwnerClone is the system I wish I'd had when I was bleeding money on food costs I didn't know were spiking, labor costs I couldn't control, and theft I couldn't detect. Every feature solves a real problem that cost me real money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2 text-white">Reduce Food Costs</h3>
              <p className="text-gray-400">Catch ingredient price spikes before they destroy your margins</p>
            </div>

            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-bold mb-2 text-white">Optimize Labor</h3>
              <p className="text-gray-400">Schedule based on actual demand, not guesswork</p>
            </div>

            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-white">Prevent Theft</h3>
              <p className="text-gray-400">Detect manager scams and employee theft in real-time</p>
            </div>

            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2 text-white">Real-Time Insights</h3>
              <p className="text-gray-400">Know exactly where you stand at any moment</p>
            </div>

            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold mb-2 text-white">Predict Rushes & Slow Times</h3>
              <p className="text-gray-400">Know exactly when to staff up and when to send people home</p>
            </div>

            <div className="card-space rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-white">Scale Confidently</h3>
              <p className="text-gray-400">Maintain quality even when you're not there</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-[#0f1419]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Take Control of Your <span className="text-cyan-bright">Restaurant</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See how OwnerClone can transform your operations and increase your profits. All features included. No hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="px-8 py-4 bg-transparent text-[#38bdf8] font-bold rounded-lg border-2 border-[#0ea5e9] hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all duration-300 text-lg">
              View Pricing
            </Link>
            <Link href="/contact" className="px-8 py-4 glass-effect text-white font-bold rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 text-lg">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
