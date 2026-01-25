'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
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
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-200">
                Built by <span className="text-cyan-400">Restaurant Owners</span>
                <br />For Restaurant Owners
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We&apos;ve lived through the chaos, the theft, the burnout. We built OwnerClone to spare you the same pain.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Cards */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border-2 border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">Help First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re not here to sell you software. We&apos;re here to help you succeed. Every feature, every price point, every decision is made with your success in mind.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">We&apos;ve Been There</h3>
                <p className="text-gray-300 leading-relaxed">
                  80-hour weeks. Theft. Food cost nightmares. Forecasting disasters. We&apos;ve experienced every pain point firsthand. That&apos;s why we built OwnerClone.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Real Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  No fluff. No complicated dashboards that require training. Just AI-powered tools that solve real problems and save you real money.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-cyan-400">
                The Real Story
              </h2>
              <p className="text-xl text-gray-400">
                From kitchens to cameras to code
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12">
              {/* Founder Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-8 border-b border-white/10">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                  👨‍💼
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-gray-200">Mateo Monti</h3>
                  <p className="text-xl text-cyan-400 mb-1">Founder & CEO, OwnerClone</p>
                  <p className="text-gray-400">30 years building businesses | 10 years as restaurant owner</p>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <div>
                  <h4 className="text-2xl font-bold text-gray-200 mb-4">The Early Years</h4>
                  <p>
                    <strong className="text-gray-200">I started in restaurant kitchens at age 13.</strong> Dishwasher, prep cook, line cook, expo, server, bartender, manager—I did it all. By 22, I&apos;d worked every position and learned the industry inside out.
                  </p>
                </div>

                <p>Then I left to chase a different dream: making movies.</p>

                <p>
                  <strong className="text-gray-200">I spent 20 years in the film industry,</strong> working with some of the best cinematographers, directors, and producers in the world. I started my own independent rental company that grew into one of the largest owner-operator film equipment companies globally—with locations in LA, Atlanta, Pittsburgh, and New York.
                </p>

                <p>
                  I built a 1,700-item web store selling equipment worldwide, added two sound stages, and was living the dream. I was building, scaling, and succeeding.
                </p>

                <p className="text-yellow-400 font-semibold">Then I lost everything in a divorce.</p>

                <div className="pt-6">
                  <h4 className="text-2xl font-bold text-gray-200 mb-4">Back to My Roots</h4>
                  <p>
                    <strong className="text-gray-200">So I reinvented myself</strong> by following my second passion: food. I started with a coffee truck serving the film community. That truck needed a home base, so I opened a restaurant. Then another. Then another. Three concepts over 10 years.
                  </p>
                </div>

                <p>I thought my years of business experience would make it easy.</p>

                <p className="text-yellow-400 font-semibold text-xl">I was wrong.</p>

                <div className="backdrop-blur-xl bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
                  <p className="text-red-300 font-semibold text-xl mb-2">
                    My night manager stole $40,000 from me.
                  </p>
                  <p className="text-gray-300">
                    He ran a void scam for 18 months—ringing up orders, serving the food, voiding the transaction after the customer left, and pocketing the cash. I only caught him because my food costs didn&apos;t make sense.
                  </p>
                </div>

                <p>
                  It took weeks of investigation with my Sous Chef. A server tipped me off about missing cash from a busy day. Then another week manually reviewing reports to find the pattern.
                </p>

                <p>
                  My food costs were out of control. Portions were inconsistent. Vendors raised prices without me noticing. I had no idea which menu items were profitable. <strong className="text-gray-200">I was working 80-hour weeks and still losing money.</strong>
                </p>

                <p>Eventually, I closed all three restaurants. The operational chaos, the theft, the burnout—it was unsustainable.</p>

                <div className="pt-6">
                  <h4 className="text-2xl font-bold text-gray-200 mb-4">The Lightbulb Moment</h4>
                  <p>
                    <strong className="text-gray-200">But I realized something:</strong> Big chains like Chipotle and McDonald&apos;s use AI to catch theft, predict demand, and optimize costs. They have teams of analysts, data scientists, and operations managers.
                  </p>
                </div>

                <p>
                  Independent restaurants? We have... ourselves. And maybe a bookkeeper who comes in once a month.
                </p>

                <p className="text-cyan-400 font-semibold text-xl">
                  That&apos;s why they have 30% profit margins and we&apos;re fighting for 10%. They have systems. We have chaos.
                </p>

                <p>
                  <strong className="text-gray-200">So I built OwnerClone.</strong>
                </p>

                <p>
                  After 30 years in business—20 building companies, 10 running restaurants—I know what operators actually need. Not another complicated system that requires a PhD to use. But AI that works in the background, catching problems before they cost you thousands.
                </p>

                <div className="backdrop-blur-xl bg-cyan-900/20 border-l-4 border-cyan-400 p-6 rounded-r-lg mt-8">
                  <p className="text-cyan-300 font-semibold text-lg">
                    I&apos;m building the tool I wish I had when I was drowning in spreadsheets at 2 AM, trying to figure out why my numbers didn&apos;t add up. Join me in leveling the playing field for independent restaurant owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-cyan-700/10 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-3xl font-bold text-gray-200 mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Give independent restaurants the same technology advantages that big chains have—at a price they can afford. Level the playing field so owners can compete, thrive, and actually make money doing what they love.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-purple-700/10 border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-gray-200 mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A world where independent restaurant owners don&apos;t have to choose between working 80-hour weeks or going out of business. Where technology works FOR you, not against you. Where running a profitable restaurant is sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-center text-cyan-400">
                How We Operate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔒</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Your Data Is Sacred</h4>
                    <p className="text-gray-400">
                      We&apos;ll never sell it, share it, or use it for anything but helping YOU. Your restaurant data stays yours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Real People, Real Support</h4>
                    <p className="text-gray-400">
                      No chatbots. No outsourced call centers. Just real restaurant people who get it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Transparent Pricing</h4>
                    <p className="text-gray-400">
                      No hidden fees. No surprise charges. Just simple, usage-based pricing that scales with you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Move Fast</h4>
                    <p className="text-gray-400">
                      Restaurants move fast. So do we. Features ship weekly. Support responds in minutes, not days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">We Teach</h4>
                    <p className="text-gray-400">
                      Free calculators, guides, and resources. Even if you never buy our software, we want to help you succeed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Long-Term Partners</h4>
                    <p className="text-gray-400">
                      We succeed when you succeed. Our incentives are aligned with your profitability, not our sales quotas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-center text-cyan-400">
                Why We&apos;re Different
              </h2>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0">❌</div>
                  <div>
                    <h4 className="text-2xl font-bold text-red-400 mb-2">Other Restaurant Software</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Built by tech people who&apos;ve never worked in a restaurant</li>
                      <li>• Complicated dashboards that require 40 hours of training</li>
                      <li>• Expensive contracts that lock you in for years</li>
                      <li>• Support teams that don&apos;t understand restaurant operations</li>
                      <li>• Generic solutions that don&apos;t solve your real problems</li>
                    </ul>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0">✅</div>
                  <div>
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">OwnerClone</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Built by restaurant owners who lived through the pain</li>
                      <li>• Works in the background—5 minutes a day, not 5 hours</li>
                      <li>• Usage-based pricing with no long-term contracts</li>
                      <li>• Support from people who&apos;ve managed restaurants</li>
                      <li>• Laser-focused on the problems that actually cost you money</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-3xl p-12 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-cyan-400">
                Ready to Stop Losing Money?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of independent restaurant owners who are finally taking control of their operations. We&apos;re here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/app-login"
                  className="backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 hover:text-white transition-all px-8 py-4 rounded-lg font-bold text-lg text-center"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/contact"
                  className="backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all px-8 py-4 rounded-lg font-bold text-lg text-center"
                >
                  Schedule a Call
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No credit card required • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
