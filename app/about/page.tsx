// app/about/page.tsx
// About Page with Lucide React Icons (NO EMOJIS!)

import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Heart,           // Help First
  Flame,           // We've Been There  
  Zap,             // Real Solutions
  Shield,          // Data Privacy
  MessageCircle,   // Real Support
  DollarSign,      // Transparent Pricing
  Clock,           // Speed Matters
  GraduationCap,   // Education
  UserCheck        // Partnership
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About OwnerClone - Built by Restaurant Owners',
  description: 'Meet the team behind OwnerClone. We\'re restaurant owners who lived through theft, food cost nightmares, and 80-hour weeks. Now we\'re here to help you avoid the same pain.',
  keywords: ['restaurant management software', 'about ownerclone', 'restaurant owner tools', 'food cost software'],
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Fixed SVG Background */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url(/bg-glow.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />

      {/* Content Layer */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-center">
            <h1 className="text-5xl font-bold text-cyan-400 mb-4">
              Built by Restaurant Owners,
              <br />
              For Restaurant Owners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;ve lived through the chaos, the theft, the burnout. We built OwnerClone to spare you the same pain.
            </p>
          </div>

          {/* Core Values - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Help First */}
            <div className="backdrop-blur-xl bg-white/5 border border-green-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-green-500/10 border border-green-400/30 rounded-xl mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                Help First
              </h3>
              <p className="text-gray-300">
                We&apos;re not here to sell you software. We&apos;re here to help you succeed. Every feature, every price point, every decision is made with your success in mind.
              </p>
            </div>

            {/* We've Been There */}
            <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-xl mb-4">
                <Flame className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                We&apos;ve Been There
              </h3>
              <p className="text-gray-300">
                80-hour weeks. Theft. Food cost nightmares. Forecasting disasters. We&apos;ve experienced every pain point firsthand. That&apos;s why we built OwnerClone.
              </p>
            </div>

            {/* Real Solutions */}
            <div className="backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl p-6">
              <div className="inline-flex p-3 bg-purple-500/10 border border-purple-400/30 rounded-xl mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                Real Solutions
              </h3>
              <p className="text-gray-300">
                No fluff. No complicated dashboards that require training. Just AI-powered tools that solve real problems and save you real money.
              </p>
            </div>
          </div>

          {/* Founder Story */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              The Story Behind OwnerClone
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">I started in restaurant kitchens at age 13.</strong> Dishwasher, prep cook, line cook, expo, server, bartender, manager—I did it all. By 22, I'd worked every position and learned the industry inside out.
              </p>

              <p>
                Then I left to chase a different dream: making movies.
              </p>

              <p>
                <strong className="text-white">I spent 20 years in the film industry,</strong> working with some of the best cinematographers, directors, and producers in the world. I started my own independent rental company that grew into one of the largest owner-operator film equipment companies globally—with locations in LA, Atlanta, Pittsburgh, and New York.
              </p>

              <p>
                I built a 1,700-item web store selling equipment worldwide, added two sound stages, and was living the dream. I was building, scaling, and succeeding.
              </p>

              <p>
                Then I lost everything in a divorce.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8">Back to My Roots</h3>

              <p>
                <strong className="text-white">So I reinvented myself</strong> by following my second passion: food. I started with a coffee truck serving the film community. That truck needed a home base, so I opened a restaurant. Then another. Then another.
              </p>

              <p>
                Over 10 years, I owned and operated three restaurant concepts. I thought my years of business experience would make it easy.
              </p>

              <p className="text-yellow-400 font-semibold text-xl">
                I was wrong.
              </p>

              <p>
                My night manager stole $40,000 from me running a void scam for 18 months. I only caught him because my food costs didn't make sense. It took weeks of investigation with my Sous Chef, a tip from a server about missing cash, and another week manually reviewing reports to find the pattern.
              </p>

              <p>
                My food costs were out of control. Portions were inconsistent. My vendors were raising prices without me noticing. I was working 80-hour weeks and still losing money.
              </p>

              <p>
                Eventually, I closed all three restaurants. The operational chaos, the theft, the burnout—it was too much.
              </p>

              <p>
                <strong className="text-white">But here's what I realized:</strong> Big chains like Chipotle and McDonald's use AI to catch theft, predict demand, and optimize costs. Why couldn't independent restaurants have access to the same technology?
              </p>

              <p>
                So I built OwnerClone. It does what I wish I could've cloned myself to do: watch every transaction 24/7, track every penny of food cost, and predict what's coming two weeks out.
              </p>

              <p className="text-cyan-400 font-semibold text-lg">
                I'm building the tool I wish I had when I was in your shoes.
              </p>

              <p className="text-gray-400 italic">
                — Mateo Monti, Founder & CEO
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mission */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-300/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To give independent restaurant owners the tools, data, and confidence they need to run profitable businesses without burning out.
              </p>
            </div>

            {/* Vision */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-300/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300">
                A world where restaurant owners don&apos;t have to choose between profitability and their personal lives. Where theft is caught instantly. Where food costs are transparent. Where you know exactly what&apos;s coming.
              </p>
            </div>
          </div>

          {/* Operating Principles */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              How We Operate
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Data Privacy */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <Shield className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Your Data is Yours
                </h4>
                <p className="text-gray-400 text-sm">
                  We don&apos;t sell your data. Ever. Your sales, invoices, and business info are completely private.
                </p>
              </div>

              {/* Real Support */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <MessageCircle className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Real Human Support
                </h4>
                <p className="text-gray-400 text-sm">
                  No chatbots. No ticket systems. Real people who know restaurants, available when you need help.
                </p>
              </div>

              {/* Transparent Pricing */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Transparent Pricing
                </h4>
                <p className="text-gray-400 text-sm">
                  $0.10 per customer. That&apos;s it. No hidden fees. No surprise charges. Simple and fair.
                </p>
              </div>

              {/* Speed Matters */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <Clock className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Speed Matters
                </h4>
                <p className="text-gray-400 text-sm">
                  Fast setup. Fast results. Fast support. We respect your time because we know how little of it you have.
                </p>
              </div>

              {/* Education First */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Education First
                </h4>
                <p className="text-gray-400 text-sm">
                  We don&apos;t just give you tools. We teach you how to use them to run a better business.
                </p>
              </div>

              {/* Partnership */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
                <UserCheck className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  We&apos;re Partners
                </h4>
                <p className="text-gray-400 text-sm">
                  Your success is our success. If you don&apos;t save or make more money than OwnerClone costs, we&apos;ll refund you.
                </p>
              </div>
            </div>
          </div>

          {/* Why We're Different */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
              Why We&apos;re Different
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Other Software */}
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  Other Software
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-400">Built by tech companies who&apos;ve never run a restaurant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-400">Complicated dashboards that require training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-400">Flat monthly fees that hurt you when business is slow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-400">Support that takes days to respond</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-gray-400">More interested in selling add-ons than solving problems</span>
                  </li>
                </ul>
              </div>

              {/* OwnerClone */}
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  OwnerClone
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">Built by restaurant owners who&apos;ve been in your shoes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">So simple you&apos;ll understand it in 5 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">Pay only when you have customers ($0.10 each)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">Real humans respond in minutes, not days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300">150% ROI guarantee—we track it for you automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Back Control?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the restaurant owners who are catching theft, cutting costs, and finally getting their lives back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="backdrop-blur-xl bg-cyan-500/30 border border-cyan-300/50 text-white hover:bg-cyan-500/40 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Join Early Access
              </Link>
              <Link
                href="/contact"
                className="backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Talk to a Human
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
