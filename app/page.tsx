import BackgroundOrbs from './components/BackgroundOrbs';
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Orbs */}
      <BackgroundOrbs />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-black leading-tight mb-8">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#38bdf8] block mb-4">OwnerClone</span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white block mb-3">Restaurant Management Software</span>
            <span className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal block mb-4">Built by</span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#38bdf8] block">Restaurant Owners & Chefs</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            No more spreadsheets. Profit first. Automated operations. Real-time analytics with AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/contact" 
              className="px-10 py-4 bg-[#38bdf8] text-black font-bold text-lg rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
            >
              Get Started Today
            </a>
            
            <a 
              href="#how-it-works" 
              className="px-10 py-4 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-lg rounded-lg hover:bg-[#38bdf8]/10 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Only $0.20 per customer visit per month</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Someone Who's Been in Your Shoes */}
      <section className="relative py-20 px-4 bg-[#0f1419]/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Built by Someone Who's <span className="text-[#38bdf8]">Been in Your Shoes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From ten years in the kitchen working his way through college to 20 years building and growing a film rental company across the country, our founder's path has been defined by hard work, determination, creativity, and systems that inspire growth. After returning to restaurants as an owner for the past ten years, he has come face to face with the hidden challenges that owners like him see every day. From that experience came OwnerClone - a groundbreaking restaurant management system that turns chaos into clarity.
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#ef4444] hover:shadow-[0_0_40px_rgba(239,68,68,0.2)] transition-all duration-300">
              <div className="text-5xl mb-4">😰</div>
              <h3 className="text-2xl font-bold text-white mb-4">You're Losing Money and Don't Know Where</h3>
              <p className="text-gray-400">
                Food costs spike. Inventory disappears. You're working 80-hour weeks but your bank account says something different. The numbers don't add up, but you can't figure out why.
              </p>
            </div>

            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#fbbf24] hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] transition-all duration-300">
              <div className="text-5xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold text-white mb-4">You Can't Scale Without Losing Quality</h3>
              <p className="text-gray-400">
                When you're at the restaurant, everything runs smoothly. The moment you leave, costs explode, quality drops, and staff takes advantage. You're trapped.
              </p>
            </div>

            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#a855f7] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Spreadsheets and Guesswork Aren't Working</h3>
              <p className="text-gray-400">
                You spend hours updating spreadsheets that are outdated the moment you save them. You're making decisions based on gut feeling instead of data, and it's killing your margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OwnerClone Shows You Section */}
      <section className="relative py-20 px-4 bg-[#0f1419]/30" id="how-it-works">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            OwnerClone Shows You the <span className="text-[#38bdf8]">Problems Before They Become Disasters</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            After experiencing the restaurant industry firsthand, we spent two years building the system every independent owner needs. OwnerClone integrates with your POS system (Toast, Skytab, or manual uploads) to automatically track everything that matters. No more spreadsheets. No more guessing. No more surprises.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#10b981] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10b981]/20 border border-[#10b981]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Automated Food Cost Management</h3>
                <p className="text-gray-400">
                  Food costs can bleed money silently until you're already in trouble. OwnerClone tracks ingredient costs in real-time, calculates recipe profitability down to the gram, and alerts you when costs spike before they destroy your margins. Automatic recipe building gets you started in minutes - no more spending weeks building an inventory system from scratch.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#3b82f6] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/20 border border-[#3b82f6]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart Labor Cost Tracking</h3>
                <p className="text-gray-400">
                  When owners can't be at the restaurant daily, labor costs often explode. Overtime happens. Theft occurs. OwnerClone monitors labor patterns, flags anomalies, and helps you optimize schedules even when you're not physically present. Maintain control without being there 80 hours a week.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#ef4444] hover:shadow-[0_0_40px_rgba(239,68,68,0.2)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#ef4444]/20 border border-[#ef4444]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Theft Detection That Actually Works</h3>
                <p className="text-gray-400">
                  Industry data shows manager void scams average $40,000 before they're discovered. OwnerClone's Theft Shield monitors every void, comp, and discount in real-time, flagging patterns that indicate theft before it becomes a five-figure problem.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#a855f7] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#a855f7]/20 border border-[#a855f7]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Demand Forecasting</h3>
                <p className="text-gray-400">
                  Being understaffed kills service. Being overstaffed kills profits. OwnerClone predicts your traffic seven days out using weather data, local events, and historical patterns, so you can schedule perfectly and prep precisely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Get Started in Minutes, <span className="text-[#38bdf8]">Not Months</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            No complicated setup. No training required. Just connect your POS system and start making better decisions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-lg shadow-[#38bdf8]/50">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Connect Your POS</h3>
              <p className="text-gray-400">Toast, Skytab, or manual report uploads. Takes 5 minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-lg shadow-[#10b981]/50">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">We Import Your Data</h3>
              <p className="text-gray-400">All your sales, inventory, and labor data automatically syncs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#a855f7] to-[#9333ea] flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-lg shadow-[#a855f7]/50">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get Instant Insights</h3>
              <p className="text-gray-400">See exactly where you're making and losing money.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-lg shadow-[#f97316]/50">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Make Better Decisions</h3>
              <p className="text-gray-400">Data-driven decisions that increase profits immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 bg-[#0f1419]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            The <span className="text-[#38bdf8]">OwnerClone</span> Advantage
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-12 leading-relaxed">
            We don't get paid if you're not saving more or making more than we cost.
          </h3>

          <div className="space-y-6 text-left max-w-2xl mx-auto mb-12">
            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#10b981]/30 rounded-xl p-6 hover:border-[#10b981] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">We Track Your ROI Continuously</h3>
                  <p className="text-gray-400">OwnerClone doesn't just show you where you're saving money - we calculate and display your exact return on investment in real-time. You'll always know if the platform is worth what you're paying.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#10b981]/30 rounded-xl p-6 hover:border-[#10b981] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">150% ROI Guarantee</h3>
                  <p className="text-gray-400">If your return on investment falls below 150% of what you're paying us, we schedule a meeting with you immediately. We'll review your operations together, identify where the value isn't showing up, and work with you to get back on track.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#10b981]/30 rounded-xl p-6 hover:border-[#10b981] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Consultant Built In for Your Protection</h3>
                  <p className="text-gray-400">You're not just buying software - you're getting an operational consultant who is financially incentivized to make sure you succeed. When your ROI drops, we work directly with you to solve the problem. Your success is our success.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#38bdf8]/20 to-[#10b981]/20 border-2 border-[#38bdf8] rounded-2xl p-8 max-w-2xl mx-auto mb-12 backdrop-blur-sm shadow-[0_0_60px_rgba(56,189,248,0.2)]">
            <p className="text-xl text-white font-semibold">
              This means you can try OwnerClone with confidence, knowing that if it's not delivering 150% of what you're paying, we'll fix it together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="px-12 py-5 bg-[#38bdf8] text-black font-bold text-xl rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 shadow-lg hover:shadow-[0_0_50px_rgba(56,189,248,0.5)]"
            >
              Get Started Today
            </a>
            
            <a 
              href="/pricing" 
              className="px-12 py-5 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-xl rounded-lg hover:bg-[#38bdf8]/10 transition-all duration-300"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
