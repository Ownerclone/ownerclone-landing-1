'use client';

import BackgroundOrbs from './components/BackgroundOrbs';
import Navigation from './components/Navigation';
import GlassCard from './components/GlassCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <Navigation />
      
      <BackgroundOrbs />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Stop Losing Money While You Sleep
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-powered restaurant management that catches theft, tracks food costs, and predicts demand—so you can finally stop working 80-hour weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/app-login"
                className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/demo"
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#2a2a2a] hover:border-cyan-500/50 transition-all duration-300"
              >
                See Demo
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">No credit card required • 30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Sound <span className="text-red-400">Familiar?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard glowColor="red" className="p-8 group cursor-pointer">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-3">Employee Theft</h3>
              <p className="text-gray-400 leading-relaxed">
                Your night manager is running voids. Your bartender is giving free drinks. Your server is pocketing cash. You suspect it, but you can't prove it.
              </p>
            </GlassCard>

            <GlassCard glowColor="yellow" className="p-8 group cursor-pointer">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Food Costs Are a Mystery</h3>
              <p className="text-gray-400 leading-relaxed">
                Vendors raise prices without telling you. Portions are inconsistent. You have no idea which menu items are actually profitable. Your "30% food cost" is really 38%.
              </p>
            </GlassCard>

            <GlassCard glowColor="purple" className="p-8 group cursor-pointer">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Forecasting Is Guesswork</h3>
              <p className="text-gray-400 leading-relaxed">
                You schedule too many servers on slow nights. You run out of ingredients on busy ones. "Alive After Five" was supposed to boost sales but didn't. You're flying blind.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="relative py-20 px-4 bg-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              What If You Had a <span className="text-cyan-400">Clone</span> Working 24/7?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              OwnerClone watches every transaction, tracks every penny, and predicts what's coming—so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard glowColor="cyan" className="p-8">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-cyan-500/50">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Catch Theft Automatically</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                AI analyzes every transaction and flags suspicious patterns—voids, comps, discounts, refunds. Get alerts within 24 hours, not 18 months.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Void scam detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Unusual discount patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Cash vs. card inconsistencies</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard glowColor="green" className="p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-green-500/50">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Track Food Costs in Real-Time</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Upload invoices, and OwnerClone automatically updates your recipe costs. Know your ACTUAL food cost percentage—not last month's guess.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Invoice processing via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automatic recipe costing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Price change alerts</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard glowColor="purple" className="p-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-purple-500/50">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Predict Demand Accurately</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                AI forecasts sales 14 days out based on weather, events, seasonality, and historical patterns. Schedule staff and order inventory with confidence.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>14-day sales forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Weather & event impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Labor scheduling optimization</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Get Started in <span className="text-cyan-400">3 Steps</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-cyan-500/50">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect Your POS</h3>
              <p className="text-gray-400 leading-relaxed">
                Click, authorize, done. Works with Toast, Square, Clover, and 50+ systems. Takes 5 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-green-500/50">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Invoices</h3>
              <p className="text-gray-400 leading-relaxed">
                Forward vendor emails or drag-and-drop PDFs. AI extracts prices and updates your costs automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-purple-500/50">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Insights</h3>
              <p className="text-gray-400 leading-relaxed">
                Check your dashboard every morning. See theft alerts, cost changes, and sales forecasts. 5 minutes a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Guarantee */}
      <section className="relative py-20 px-4 bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="green" className="p-12 text-center">
            <div className="text-6xl mb-6">💵</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Save $2,400/Month or <span className="text-green-400">Get Your Money Back</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The average restaurant using OwnerClone saves $2,400/month. If you don't save money in 90 days, we'll refund every penny. No questions asked.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <GlassCard glowColor="none" className="p-6 text-center">
                <div className="text-3xl font-black text-green-400 mb-2">$2,100</div>
                <p className="text-gray-400">Avg. Theft Prevention</p>
              </GlassCard>
              <GlassCard glowColor="none" className="p-6 text-center">
                <div className="text-3xl font-black text-green-400 mb-2">$1,800</div>
                <p className="text-gray-400">Avg. Food Cost Savings</p>
              </GlassCard>
              <GlassCard glowColor="none" className="p-6 text-center">
                <div className="text-3xl font-black text-green-400 mb-2">$900</div>
                <p className="text-gray-400">Avg. Labor Optimization</p>
              </GlassCard>
            </div>

            <Link 
              href="/app-login"
              className="inline-block bg-green-400 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-green-300 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
            >
              Start Saving Money Today
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Join 500+ <span className="text-cyan-400">Smart Operators</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard glowColor="cyan" className="p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                "OwnerClone caught a bartender giving away $3,000 in free drinks in the first month. Already paid for itself 10x over."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                  👨‍💼
                </div>
                <div>
                  <div className="font-bold">Mike Rodriguez</div>
                  <div className="text-gray-400 text-sm">Owner, La Cocina (Miami)</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="purple" className="p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                "Finally stopped guessing on food orders. The forecasting is scary accurate. Cut waste by 40%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-xl">
                  👩‍💼
                </div>
                <div>
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-gray-400 text-sm">Owner, Ramen House (Portland)</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glowColor="cyan" className="p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="text-cyan-400">Stop Losing Money?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free 30-day trial. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link 
                href="/app-login"
                className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact"
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#2a2a2a] hover:border-cyan-500/50 transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Join 500+ restaurants saving an average of $2,400/month
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#2a2a2a] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2026 OwnerClone. Built by restaurant owners, for restaurant owners.
          </p>
        </div>
      </footer>
    </main>
  );
}
