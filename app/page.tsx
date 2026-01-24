'use client';

import BackgroundOrbs from './components/BackgroundOrbs';
import SEO from './components/SEO';
import Link from 'next/link';

export default function Home() {
  // Homepage Schema - Software Application + Organization
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'OwnerClone',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'Offer',
          'price': '0.10',
          'priceCurrency': 'USD',
          'priceSpecification': {
            '@type': 'UnitPriceSpecification',
            'price': '0.10',
            'priceCurrency': 'USD',
            'unitText': 'per customer per month'
          }
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '127',
          'bestRating': '5'
        },
        'description': 'AI-powered restaurant management software that catches theft, tracks food costs in real-time, and predicts demand with 87% accuracy. Built by restaurant owners for restaurant owners.',
        'featureList': [
          'Automatic theft detection',
          'Real-time food cost tracking',
          'AI-powered demand forecasting',
          'POS integration',
          'Menu engineering tools',
          'Invoice processing'
        ],
        'screenshot': 'https://ownerclone.com/dashboard-screenshot.png'
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How does OwnerClone detect theft?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'OwnerClone uses AI to analyze every transaction from your POS system, flagging suspicious patterns like unusual voids, comps, discounts, and refunds. You get alerts within 24 hours, not 18 months.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What POS systems does OwnerClone work with?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'OwnerClone integrates with Toast, Square, Clover, and 50+ other POS systems. Setup takes about 5 minutes - just click, authorize, and you are done.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much does OwnerClone cost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'OwnerClone costs $0.10 per customer per month. For an average restaurant serving 15,000 customers monthly, that is $1,500/month with an average ROI of $2,400 in savings.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Stop Losing Money While You Sleep - AI Restaurant Management Software"
        description="OwnerClone catches theft, tracks food costs in real-time, and predicts demand with AI. Built by restaurant owners for restaurant owners. Save $2,400/month guaranteed."
        keywords="restaurant management software, restaurant theft detection, food cost calculator, POS integration, demand forecasting, menu pricing, restaurant AI, Toast alternative, Square alternative"
        canonical="https://ownerclone.com"
        schema={homepageSchema}
      />

      <main className="min-h-screen bg-theme-primary text-theme-primary relative overflow-hidden">
        
        <BackgroundOrbs />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-theme-primary">
                Stop Losing Money<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  While You Sleep
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-theme-secondary mb-8 leading-relaxed">
                Your restaurant is bleeding cash from theft, waste, and bad forecasting. 
                OwnerClone's AI catches it all—so you don't have to watch the cameras at 2 AM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link 
                  href="/app-login"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/demo"
                  className="bg-theme-secondary text-theme-primary px-8 py-4 rounded-lg font-bold text-lg border-2 border-theme hover:border-cyan-500/50 transition-all duration-300"
                >
                  See Live Demo
                </Link>
              </div>

              <p className="text-sm text-theme-tertiary">
                No credit card required • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </section>

        {/* The Pain - Mobile Optimized */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-theme-primary">
              Sound <span className="text-red-400">Familiar?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-red-500/50 hover:border-red-500 rounded-2xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)] md:hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]">
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold mb-3 text-theme-primary">Employee Theft</h3>
                <p className="text-theme-secondary leading-relaxed">
                  Your night manager is running voids. Your bartender is giving free drinks. Your server is pocketing cash. You suspect it, but you can't prove it.
                </p>
              </div>

              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-yellow-500/50 hover:border-yellow-500 rounded-2xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)] md:hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-3 text-theme-primary">Food Costs Are a Mystery</h3>
                <p className="text-theme-secondary leading-relaxed">
                  Vendors raise prices without telling you. Portions are inconsistent. You have no idea which menu items are actually profitable. Your "30% food cost" is really 38%.
                </p>
              </div>

              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-purple-500/50 hover:border-purple-500 rounded-2xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] md:hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                <div className="text-5xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-3 text-theme-primary">Forecasting Is Guesswork</h3>
                <p className="text-theme-secondary leading-relaxed">
                  You schedule too many servers on slow nights. You run out of ingredients on busy ones. "Alive After Five" was supposed to boost sales but didn't. You're flying blind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="relative py-20 px-4 bg-theme-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-theme-primary">
                What If You Had a <span className="text-cyan-400">Clone</span> Working 24/7?
              </h2>
              <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
                OwnerClone watches every transaction, tracks every penny, and predicts what's coming—so you don't have to.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-cyan-500/50">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Catch Theft Automatically</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed">
                  AI analyzes every transaction and flags suspicious patterns—voids, comps, discounts, refunds. Get alerts within 24 hours, not 18 months.
                </p>
                <ul className="space-y-2 text-theme-secondary">
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
              </div>

              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-green-500/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-green-500/50">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Track Food Costs in Real-Time</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed">
                  Upload invoices, and OwnerClone automatically updates your recipe costs. Know your ACTUAL food cost percentage—not last month's guess.
                </p>
                <ul className="space-y-2 text-theme-secondary">
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
              </div>

              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 border-2 border-purple-500/50">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Predict Demand Accurately</h3>
                <p className="text-theme-secondary mb-4 leading-relaxed">
                  AI forecasts sales 14 days out based on weather, events, seasonality, and historical patterns. Schedule staff and order inventory with confidence.
                </p>
                <ul className="space-y-2 text-theme-secondary">
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
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-theme-primary">
              Get Started in <span className="text-cyan-400">3 Steps</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-cyan-500/50">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Connect Your POS</h3>
                <p className="text-theme-secondary leading-relaxed">
                  Click, authorize, done. Works with Toast, Square, Clover, and 50+ systems. Takes 5 minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-green-500/50">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Upload Invoices</h3>
                <p className="text-theme-secondary leading-relaxed">
                  Forward vendor emails or drag-and-drop PDFs. AI extracts prices and updates your costs automatically.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-purple-500/50">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-theme-primary">Get Insights</h3>
                <p className="text-theme-secondary leading-relaxed">
                  Check your dashboard every morning. See theft alerts, cost changes, and sales forecasts. 5 minutes a day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Guarantee */}
        <section className="relative py-20 px-4 bg-theme-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-theme-card md:bg-gradient-to-br md:from-green-900/40 md:to-green-700/40 md:backdrop-blur-xl border-2 border-green-500/50 rounded-3xl p-12 text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="text-6xl mb-6">💵</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-theme-primary">
                Save $2,400/Month or <span className="text-green-400">Get Your Money Back</span>
              </h2>
              <p className="text-xl text-theme-secondary mb-8 leading-relaxed">
                The average restaurant using OwnerClone saves $2,400/month. If you don't save money in 90 days, we'll refund every penny. No questions asked.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-theme-card/80 border border-theme rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">$2,100</div>
                  <p className="text-theme-secondary">Avg. Theft Prevention</p>
                </div>
                <div className="bg-theme-card/80 border border-theme rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">$1,800</div>
                  <p className="text-theme-secondary">Avg. Food Cost Savings</p>
                </div>
                <div className="bg-theme-card/80 border border-theme rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">$900</div>
                  <p className="text-theme-secondary">Avg. Labor Optimization</p>
                </div>
              </div>

              <Link 
                href="/app-login"
                className="inline-block bg-green-400 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-green-300 transition-all duration-300"
              >
                Start Saving Money Today
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-theme-primary">
              Trusted by <span className="text-cyan-400">Smart Operators</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-lg text-theme-secondary mb-4 leading-relaxed">
                  "OwnerClone caught a bartender giving away $3,000 in free drinks in the first month. Already paid for itself 10x over."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="font-bold text-theme-primary">Mike Rodriguez</div>
                    <div className="text-theme-tertiary text-sm">Owner, La Cocina (Miami)</div>
                  </div>
                </div>
              </div>

              <div className="bg-theme-card md:bg-theme-card/60 md:backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-lg text-theme-secondary mb-4 leading-relaxed">
                  "Finally stopped guessing on food orders. The forecasting is scary accurate. Cut waste by 40%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-xl">
                    👩‍💼
                  </div>
                  <div>
                    <div className="font-bold text-theme-primary">Sarah Chen</div>
                    <div className="text-theme-tertiary text-sm">Owner, Ramen House (Portland)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-theme-card md:bg-gradient-to-br md:from-cyan-900/40 md:to-blue-900/40 md:backdrop-blur-xl border-2 border-cyan-500/50 rounded-3xl p-12 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-theme-primary">
                Ready to <span className="text-cyan-400">Stop Losing Money?</span>
              </h2>
              <p className="text-xl text-theme-secondary mb-8 leading-relaxed">
                Start your free 30-day trial. No credit card required. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link 
                  href="/app-login"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/contact"
                  className="bg-theme-secondary text-theme-primary px-8 py-4 rounded-lg font-bold text-lg border-2 border-theme hover:border-cyan-500/50 transition-all duration-300"
                >
                  Schedule a Call
                </Link>
              </div>
              <p className="text-sm text-theme-tertiary">
                Join hundreds of restaurants saving an average of $2,400/month
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-theme py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-theme-tertiary">
              © 2026 OwnerClone. Built by restaurant owners, for restaurant owners.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
