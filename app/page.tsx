export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-space">
      {/* Hero Section - Space Age Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        {/* Gradient Orbs for Depth */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-blue"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-blue" style={{ animationDelay: '1s' }}></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 text-center">
          {/* Main Headline - Smaller, Better Layout */}
          <h1 className="font-black mb-6 leading-tight">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white block mb-2">Restaurant Management Software</span>
            <span className="text-lg sm:text-xl md:text-2xl text-gray-400 font-normal block mb-4">Built by</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-bright block">Restaurant Owners & Chefs</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            No more spreadsheets. Profit first. Automated operations. Real-time analytics with AI-driven insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Primary Button - Glass Effect */}
            <a 
              href="#demo" 
                className="group relative px-8 py-4 bg-[#38bdf8] hover:bg-[#0ea5e9] text-grey font-bold text-lg rounded-lg transition-all duration-300"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            {/* Secondary Button - Glass Effect */}
            <a 
              href="#how-it-works" 
              className="px-8 py-4 glass-effect text-white font-bold text-lg rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Only $0.20 per customer visit per month</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Someone Who's Been in Your Shoes Section */}
      <section className="relative pt-0 pb-20 px-4 bg-gradient-to-b from-transparent to-[#0f1419]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Built by Someone Who's <span className="text-cyan-bright">Been in Your Shoes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our founder spent two decades building a successful film equipment rental business with locations across multiple cities and international operations. After achieving that success, he decided to enter the restaurant industry and opened three concepts: an Italian restaurant, a BBQ smokehouse, and a sports bar. Despite having entrepreneurial experience, the restaurant industry was different - operational chaos that couldn't be seen until it was too late. Those experiences led to the creation of OwnerClone: a system that shows you the problems before they become disasters.
          </p>
        </div>
      </section>

      {/* Problems Section - 3 Cards */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem Card 1 */}
            <div className="card-space rounded-2xl p-8">
              <div className="text-5xl mb-4">😰</div>
              <h3 className="text-2xl font-bold text-white mb-4">You're Losing Money and Don't Know Where</h3>
              <p className="text-gray-400">
                Food costs spike. Inventory disappears. You're working 80-hour weeks but your bank account says something different. The numbers don't add up, but you can't figure out why.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="card-space rounded-2xl p-8">
              <div className="text-5xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold text-white mb-4">You Can't Scale Without Losing Quality</h3>
              <p className="text-gray-400">
                When you're at the restaurant, everything runs smoothly. The moment you leave, costs explode, quality drops, and staff takes advantage. You're trapped.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="card-space rounded-2xl p-8">
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
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0f1419] to-transparent">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            OwnerClone Shows You the <span className="text-cyan-bright">Problems Before They Become Disasters</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            After experiencing the restaurant industry firsthand, we spent two years building the system every independent owner needs. OwnerClone integrates with your POS system (Toast, Skytab, or manual uploads) to automatically track everything that matters. No more spreadsheets. No more guessing. No more surprises.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="card-space rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
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

          {/* Feature 2 */}
          <div className="card-space rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
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

          {/* Feature 3 */}
          <div className="card-space rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
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

          {/* Feature 4 */}
          <div className="card-space rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
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
            Get Started in Minutes, <span className="text-cyan-bright">Not Months</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            No complicated setup. No training required. Just connect your POS system and start making better decisions.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Connect Your POS</h3>
              <p className="text-gray-400">Toast, Skytab, or manual report uploads. Takes 5 minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">We Import Your Data</h3>
              <p className="text-gray-400">All your sales, inventory, and labor data automatically syncs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get Instant Insights</h3>
              <p className="text-gray-400">See exactly where you're making and losing money.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-blue flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Make Better Decisions</h3>
              <p className="text-gray-400">Data-driven decisions that increase profits immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-transparent to-[#0f1419]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 rounded-full glass-effect text-cyan-400 font-semibold mb-8">
            ✨ The OwnerClone Advantage
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            We don't get paid if you're not saving more or making more than we cost.
          </h2>

          <div className="space-y-6 text-left max-w-2xl mx-auto mb-12">
            <div className="flex items-start gap-4 card-space rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">We Track Your ROI Continuously</h3>
                <p className="text-gray-400">OwnerClone doesn't just show you where you're saving money - we calculate and display your exact return on investment in real-time. You'll always know if the platform is worth what you're paying.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 card-space rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">150% ROI Guarantee</h3>
                <p className="text-gray-400">If your return on investment falls below 150% of what you're paying us, we schedule a meeting with you immediately. We'll review your operations together, identify where the value isn't showing up, and work with you to get back on track.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 card-space rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
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

          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <p className="text-xl text-white font-semibold">
              This means you can try OwnerClone with confidence, knowing that if it's not delivering 150% of what you're paying, we'll fix it together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#demo" 
              className="group relative px-12 py-5 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-bold text-xl rounded-lg transition-all duration-300 glow-blue-hover"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#pricing" 
              className="px-12 py-5 glass-effect text-white font-bold text-xl rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
