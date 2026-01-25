import Link from 'next/link'
import { AlertTriangle, TrendingDown, BarChart3, Plug, Brain, Bell, Shield, Zap, DollarSign, TrendingUp } from 'lucide-react'

export default function Home() {
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

        {/* Hero Section with Logo + OwnerClone */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              {/* Logo + OwnerClone Name on Glass Card */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                  {/* Glass-style logo matching navbar */}
                  <svg viewBox="-5 0 85 60" className="h-16 md:h-20 w-auto">
                    <circle cx="20" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10"/>
                    <circle cx="48" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
                  </svg>
                  <h1 className="text-5xl md:text-7xl font-black text-cyan-400/90">OwnerClone</h1>
                </div>

                {/* Main Hero Headline */}
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-200">
                  Stop Losing Money<br/>
                  <span className="text-cyan-400">
                    While You Sleep
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Your restaurant is bleeding cash from theft, waste, and bad forecasting. 
                  OwnerClone's AI catches it all—so you don't have to watch the cameras at 2 AM.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link 
                    href="/app-login"
                    className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-8 py-4 rounded-lg font-bold text-lg text-center"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    href="/demo"
                    className="backdrop-blur-xl bg-white/5 text-white px-8 py-4 rounded-lg font-bold text-lg border border-white/10 hover:border-cyan-500/50 transition-all text-center"
                  >
                    See Live Demo
                  </Link>
                </div>

                <p className="text-sm text-gray-500">
                  No credit card required • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Stats Banner */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
                  <div className="text-gray-300">of restaurants experience employee theft</div>
                  <div className="text-xs text-gray-500 mt-1">— National Restaurant Association</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">4-10%</div>
                  <div className="text-gray-300">of revenue lost to food waste annually</div>
                  <div className="text-xs text-gray-500 mt-1">— USDA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$2,400</div>
                  <div className="text-gray-300">average monthly savings with OwnerClone</div>
                  <div className="text-xs text-gray-500 mt-1">— Customer data</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Pain - Sound Familiar? */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-center text-cyan-400">
                Sound <span className="text-red-400">Familiar?</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-red-400/30 hover:border-red-400 rounded-2xl p-8 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-400/20 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-200">Employee Theft</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your night manager is running voids. Your bartender is giving free drinks. Your server is pocketing cash. You suspect it, but you can't prove it.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-yellow-400/30 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/20 mb-4">
                  <BarChart3 className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-200">Food Costs Are a Mystery</h3>
                <p className="text-gray-400 leading-relaxed">
                  Vendors raise prices without telling you. Portions are inconsistent. You have no idea which menu items are actually profitable. Your "30% food cost" is really 38%.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 hover:border-purple-400 rounded-2xl p-8 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-400/20 mb-4">
                  <TrendingDown className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-200">Bad Forecasting Kills Profits</h3>
                <p className="text-gray-400 leading-relaxed">
                  You over-order and waste product. You under-order and disappoint customers. Your gut isn't good enough when margins are this tight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The OwnerClone Advantage */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-center text-cyan-400">
                The OwnerClone Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/20 mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-200">Catch Theft Instantly</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI detects voids, comps, discounts, and cash handling anomalies in real-time. Get alerts before it becomes a problem.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl p-8 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-400/20 mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-200">Know Your Real Costs</h3>
                <p className="text-gray-400 leading-relaxed">
                  Track food costs by menu item, by shift, by day. See exactly which dishes are profitable and which are killing your margins.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-400/20 mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-200">Forecast with Confidence</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI-powered demand forecasting tells you exactly what to prep, order, and schedule—reducing waste by up to 40%.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-orange-400/30 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-400/20 mb-4">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-200">5-Minute Setup</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connect your POS in minutes. No hardware, no training, no IT headaches. Start seeing insights within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built by Someone Who's Been There */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-center text-cyan-400">
                Built by Someone Who's Been in Your Shoes
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                From ten years in the kitchen working through college to 20 years building and growing a film rental company across the country, our founder's path has been defined by hard work, determination, creativity, and systems that inspire growth.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                OwnerClone was born from watching a trusted employee steal $18,000 over 18 months. Not anymore. This software catches what you miss—so you can focus on running your restaurant, not playing detective.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-center text-cyan-400">
                Three Steps to Take Control
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 text-3xl font-black text-cyan-400">
                  <Plug className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-200">Connect Your POS</h3>
                <p className="text-gray-400 text-center">
                  5-minute setup with Toast, Square, Clover, or 50+ other systems. Just click, authorize, done.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400/20 text-3xl font-black text-purple-400">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-200">AI Analyzes Everything</h3>
                <p className="text-gray-400 text-center">
                  Our AI tracks every transaction, monitors food costs in real-time, and spots theft patterns instantly.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/20 text-3xl font-black text-green-400">
                  <Bell className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-200">Get Actionable Alerts</h3>
                <p className="text-gray-400 text-center">
                  Receive instant notifications when something's wrong. No more guessing—just clear data you can act on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-cyan-400">
                Stop Losing Money. Start Today.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of restaurant owners saving $2,400+ per month with OwnerClone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link 
                  href="/app-login"
                  className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-10 py-4 rounded-lg font-bold text-lg text-center"
                >
                  Start Free Trial
                </Link>
                
                <Link 
                  href="/contact" 
                  className="backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all px-10 py-4 rounded-lg font-bold text-lg text-center"
                >
                  Talk to Us
                </Link>
              </div>

              <p className="text-sm text-gray-500">
                $0.10 per customer per month • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              
              {/* Logo + Tagline */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="-5 0 85 60" className="h-10 w-auto">
                    <circle cx="20" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10"/>
                    <circle cx="48" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
                  </svg>
                  <span className="text-2xl font-black text-cyan-400/90">OwnerClone</span>
                </div>
                <p className="text-gray-400 mb-4">
                  AI-powered restaurant management for independent owners who refuse to lose money.
                </p>
                <p className="text-sm text-gray-500">
                  © 2026 OwnerClone, Inc. All rights reserved.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-bold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/features" className="text-gray-400 hover:text-cyan-400 transition">Features</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition">Pricing</Link></li>
                  <li><Link href="/roadmap" className="text-gray-400 hover:text-cyan-400 transition">Roadmap</Link></li>
                  <li><Link href="/demo" className="text-gray-400 hover:text-cyan-400 transition">Demo</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition">Blog</Link></li>
                  <li><Link href="/free-tools" className="text-gray-400 hover:text-cyan-400 transition">Free Tools</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition">Terms</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition">Privacy</Link></li>
                  <li><Link href="/security" className="text-gray-400 hover:text-cyan-400 transition">Security</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              <p>Built by restaurant owners, for restaurant owners. 🍽️</p>
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}
