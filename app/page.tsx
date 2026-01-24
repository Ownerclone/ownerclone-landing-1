import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section with Logo + OwnerClone */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Logo + OwnerClone Name */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <svg viewBox="-5 0 85 60" className="h-16 md:h-20 w-auto">
  <circle cx="20" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="10"/>
  <circle cx="48" cy="30" r="18" fill="none" stroke="#38bdf8" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
</svg>
              <h1 className="text-5xl md:text-7xl font-black text-white">OwnerClone</h1>
            </div>

            {/* Main Hero Headline */}
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Stop Losing Money<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white-500">
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
                className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300 text-center"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/demo"
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#2a2a2a] hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                See Live Demo
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              No credit card required • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Industry Stats Banner */}
      <section className="relative py-12 bg-[#0f1419]/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">75%</div>
              <div className="text-gray-400">of restaurants experience employee theft</div>
              <div className="text-xs text-gray-500 mt-1">— National Restaurant Association</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">4-10%</div>
              <div className="text-gray-400">of revenue lost to food waste annually</div>
              <div className="text-xs text-gray-500 mt-1">— USDA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">$2,400</div>
              <div className="text-gray-400">average monthly savings with OwnerClone</div>
              <div className="text-xs text-gray-500 mt-1">— Customer data</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pain - Sound Familiar? */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Sound <span className="text-red-400">Familiar?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] md:bg-[#0a0a0a]/60 md:backdrop-blur-xl border-2 border-red-500/50 hover:border-red-500 rounded-2xl p-8 transition-all duration-300">
              <div className="text-5xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-3">Employee Theft</h3>
              <p className="text-gray-400 leading-relaxed">
                Your night manager is running voids. Your bartender is giving free drinks. Your server is pocketing cash. You suspect it, but you can't prove it.
              </p>
            </div>

            <div className="bg-[#0a0a0a] md:bg-[#0a0a0a]/60 md:backdrop-blur-xl border-2 border-yellow-500/50 hover:border-yellow-500 rounded-2xl p-8 transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Food Costs Are a Mystery</h3>
              <p className="text-gray-400 leading-relaxed">
                Vendors raise prices without telling you. Portions are inconsistent. You have no idea which menu items are actually profitable. Your "30% food cost" is really 38%.
              </p>
            </div>

            <div className="bg-[#0a0a0a] md:bg-[#0a0a0a]/60 md:backdrop-blur-xl border-2 border-purple-500/50 hover:border-purple-500 rounded-2xl p-8 transition-all duration-300">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="text-2xl font-bold mb-3">Bad Forecasting Kills Profits</h3>
              <p className="text-gray-400 leading-relaxed">
                You over-order and waste product. You under-order and disappoint customers. Your gut isn't good enough when margins are this tight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Someone Who's Been There */}
      <section className="relative py-20 px-4 bg-[#0f1419]/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Built by Someone Who's <span className="text-[#38bdf8]">Been in Your Shoes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            From ten years in the kitchen working through college to 20 years building and growing a film rental company across the country, our founder's path has been defined by hard work, determination, creativity, and systems that inspire growth.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            OwnerClone was born from watching a trusted employee steal $18,000 over 18 months. Not anymore. This software catches what you miss—so you can focus on running your restaurant, not playing detective.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Three Steps to <span className="text-[#38bdf8]">Take Control</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center text-3xl font-black text-cyan-400">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Your POS</h3>
              <p className="text-gray-400">
                5-minute setup with Toast, Square, Clover, or 50+ other systems. Just click, authorize, done.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center text-3xl font-black text-purple-400">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Analyzes Everything</h3>
              <p className="text-gray-400">
                Our AI tracks every transaction, monitors food costs in real-time, and spots theft patterns instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center text-3xl font-black text-green-400">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Get Actionable Alerts</h3>
              <p className="text-gray-400">
                Receive instant notifications when something's wrong. No more guessing—just clear data you can act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-[#0f1419]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stop Losing Money. <span className="text-[#38bdf8]">Start Today.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of restaurant owners saving $2,400+ per month with OwnerClone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/app-login"
              className="bg-cyan-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] text-center"
            >
              Start Free Trial
            </Link>
            
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-lg rounded-lg hover:bg-[#38bdf8]/10 transition-all duration-300 text-center"
            >
              Talk to Us
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            $0.10 per customer per month • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  )
}
