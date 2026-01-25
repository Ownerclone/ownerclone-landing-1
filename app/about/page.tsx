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
                <strong className="text-white">I opened my first restaurant in 2015.</strong> It was an Italian place in Brooklyn—my dream come true. But within six months, I realized the dream was a nightmare.
              </p>

              <p>
                My food costs were through the roof. I was working 80-hour weeks. And I had this nagging feeling that money was disappearing, but I couldn&apos;t prove it.
              </p>

              <p>
                <strong className="text-white">Then I caught my night manager stealing.</strong> He&apos;d been running a void scam for 18 months—ringing up orders, serving the food, voiding the transaction after the customer left, and pocketing the cash.
              </p>

              <p className="text-red-400 font-semibold">
                $40,000. Gone.
              </p>

              <p>
                That&apos;s when I realized something: <strong className="text-white">if you own a restaurant, you need three things to survive:</strong>
              </p>

              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-cyan-400">A way to catch theft before it bankrupts you</strong></li>
                <li><strong className="text-cyan-400">A way to know your actual food costs (not what you think they are)</strong></li>
                <li><strong className="text-cyan-400">A way to predict busy and slow nights so you&apos;re not constantly over or understaffed</strong></li>
              </ol>

              <p>
                I spent the next three years building those tools for myself. Spreadsheets. Scripts. Automations. And it worked. <strong className="text-white">My food costs dropped from 38% to 28%. I caught two more employees stealing. And I finally stopped working 80-hour weeks.</strong>
              </p>

              <p>
                But here&apos;s the thing: <strong className="text-white">I shouldn&apos;t have had to build this myself.</strong>
              </p>

              <p>
                So I built OwnerClone—the tool I wish I&apos;d had from day one. Not for big chains. Not for corporate restaurant groups. <strong className="text-cyan-400">For people like me. Independent owners trying to make it work.</strong>
              </p>

              <p className="text-lg font-semibold text-white">
                This isn&apos;t just software. It&apos;s a clone of everything I wish I&apos;d known, from someone who&apos;s been exactly where you are right now.
              </p>

              <p className="text-gray-400 italic">
                — Matt, Founder & CEO
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
