import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, DollarSign, TrendingUp, Users, Brain, Bell, Zap, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features - Restaurant Management Modules | OwnerClone',
  description: 'Comprehensive restaurant management features including food costing down to the gram, labor tracking, inventory management, and theft detection. Built for independent restaurant owners.',
  keywords: ['restaurant management features', 'food cost calculator', 'labor scheduling', 'inventory tracking', 'restaurant operations', 'POS integration features'],
}

export default function Features() {
  const modules = [
    {
      icon: DollarSign,
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
      icon: Users,
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
      icon: Shield,
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
      icon: Brain,
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
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-gray-200">
                Everything You Need to Run a <span className="text-cyan-400">Profitable Restaurant</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-6">
                Introducing <span className="text-cyan-400">OwnerClone MVP</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful modules that work together to give you complete control over your operations, costs, and profitability. No more spreadsheets. No more guessing. Just real data and actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {modules.map((module) => {
              const Icon = module.icon
              
              return (
                <div key={module.name} className="space-y-6">
                  {/* Witty Headline */}
                  <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 text-center">
                      {module.wittyHeadline}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                    <p className="text-lg text-gray-300 leading-relaxed text-center">
                      {module.description}
                    </p>
                  </div>
                  
                  {/* Two Cards Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Card - Module Name & Tagline */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/20 mb-4">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-200 mb-2">{module.name}</h2>
                      <p className="text-lg text-cyan-400 font-semibold">{module.tagline}</p>
                    </div>
                    
                    {/* Right Card - Key Features */}
                    <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-8">
                      <h3 className="text-lg font-bold text-gray-200 mb-4">Key Features:</h3>
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-center mb-6 text-cyan-400">
                Works With Your POS System
              </h2>
              <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                OwnerClone integrates seamlessly with Toast and Skytab POS systems. Already using a different system? No problem. You can upload daily or weekly reports manually, and we&apos;ll extract all the data automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-200">Toast POS</h3>
                <p className="text-gray-400">Full API integration for real-time data sync</p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-200">Skytab POS</h3>
                <p className="text-gray-400">Complete integration with all features</p>
              </div>
              
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-200">Any POS</h3>
                <p className="text-gray-400">Manual report uploads processed automatically</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-center mb-6 text-cyan-400">
                Built by Restaurant Owners Who Get It
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                I closed three restaurant concepts because I couldn&apos;t see the problems until it was too late. OwnerClone is the system I wish I&apos;d had when I was bleeding money on food costs I didn&apos;t know were spiking, labor costs I couldn&apos;t control, and theft I couldn&apos;t detect. Every feature solves a real problem that cost me real money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl p-6 text-center hover:border-green-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-400/20 mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Reduce Food Costs</h3>
                <p className="text-gray-400">Catch ingredient price spikes before they destroy your margins</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-400/20 mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Optimize Labor</h3>
                <p className="text-gray-400">Schedule based on actual demand, not guesswork</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-red-400/30 rounded-2xl p-6 text-center hover:border-red-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-red-400/20 mb-4">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Prevent Theft</h3>
                <p className="text-gray-400">Detect manager scams and employee theft in real-time</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-6 text-center hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-cyan-400/20 mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Real-Time Insights</h3>
                <p className="text-gray-400">Know exactly where you stand at any moment</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-orange-400/30 rounded-2xl p-6 text-center hover:border-orange-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-orange-400/20 mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Predict Rushes & Slow Times</h3>
                <p className="text-gray-400">Know exactly when to staff up and when to send people home</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-blue-400/30 rounded-2xl p-6 text-center hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-400/20 mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-200">Scale Confidently</h3>
                <p className="text-gray-400">Maintain quality even when you&apos;re not there</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-cyan-400">
                Ready to Take Control of Your Restaurant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                See how OwnerClone can transform your operations and increase your profits. All features included. No hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing" 
                  className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-8 py-4 rounded-lg font-bold text-lg text-center"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className="backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all px-8 py-4 rounded-lg font-bold text-lg text-center"
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
