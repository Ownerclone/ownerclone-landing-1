import { Metadata } from 'next'
import Link from 'next/link'
import { FaRocket, FaCheck } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Join Early Access - Lock in Founder Pricing | OwnerClone',
  description: 'Join the OwnerClone early access waitlist and lock in founder pricing forever. Be first to get restaurant management tools built by restaurant owners.',
  keywords: ['restaurant software early access', 'founder pricing', 'restaurant management waitlist', 'early adopter pricing'],
}

export default function EarlyAccess() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="bg-accent-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide">
              🚀 Early Access - Limited Spots
            </span>
          </div>
          <h1 className="mb-6">
            Join the OwnerClone Early Access Program
          </h1>
          <p className="text-xl text-primary-100 mb-4">
            Lock in founder pricing at $0.20 per customer - forever. Help shape the product and get exclusive early access.
          </p>
          <p className="text-lg text-primary-200">
            Early adopters get lifetime pricing protection. When prices increase for new customers, your rate stays the same.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Signup Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Reserve Your Spot</h2>
              
              <form action="https://formspree.io/f/mreeeery" method="POST" className="space-y-6">
                
                <input type="hidden" name="_subject" value="🚀 NEW EARLY ACCESS SIGNUP - OwnerClone" />
                <input type="hidden" name="_next" value="https://ownerclone.com/thank-you" />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="john@restaurant.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-700 mb-2">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Your Restaurant Name"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    City & State *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Atlanta, GA"
                  />
                </div>

                <div>
                  <label htmlFor="pos-system" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current POS System *
                  </label>
                  <select
                    id="pos-system"
                    name="pos-system"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select your POS...</option>
                    <option value="Toast">Toast</option>
                    <option value="Skytab">Skytab</option>
                    <option value="Square">Square</option>
                    <option value="Clover">Clover</option>
                    <option value="Lightspeed">Lightspeed</option>
                    <option value="Revel">Revel</option>
                    <option value="Other">Other</option>
                    <option value="No POS / Looking to upgrade">No POS / Looking to upgrade</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="customers" className="block text-sm font-semibold text-gray-700 mb-2">
                    Approximate Monthly Customer Count
                  </label>
                  <select
                    id="customers"
                    name="customers"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select range...</option>
                    <option value="0-500 customers/month ($100/mo)">0 - 500 customers/month ($100/mo)</option>
                    <option value="500-1000 customers/month ($200/mo)">500 - 1,000 customers/month ($200/mo)</option>
                    <option value="1000-1500 customers/month ($300/mo)">1,000 - 1,500 customers/month ($300/mo)</option>
                    <option value="1500-2000 customers/month ($400/mo)">1,500 - 2,000 customers/month ($400/mo)</option>
                    <option value="2000+ customers/month">2,000+ customers/month</option>
                    <option value="Not sure / Need help calculating">Not sure / Need help calculating</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="biggest-challenge" className="block text-sm font-semibold text-gray-700 mb-2">
                    What's your biggest operational challenge?
                  </label>
                  <textarea
                    id="biggest-challenge"
                    name="biggest-challenge"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors resize-none"
                    placeholder="Food costs, labor management, theft, multiple locations, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Join Early Access Waitlist
                </button>

                <p className="text-sm text-gray-600">
                  * Required fields. By joining, you agree to receive updates about OwnerClone. You can unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Benefits & Details */}
            <div className="space-y-8">
              {/* What You Get */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-500 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Adopter Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Founder Pricing Forever:</strong> Lock in $0.20/customer pricing. Never pay more, even when we raise prices.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Shape the Product:</strong> Direct input on features and priorities. We build what you need.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Early Access:</strong> Get new features before anyone else. Help us test and refine.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>White Glove Onboarding:</strong> Dedicated setup help and training. We make sure you succeed.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Founder's Circle:</strong> Exclusive community of early adopters. Direct access to the team.</span>
                  </li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">Confirmation Email</p>
                      <p className="text-sm text-gray-600">You'll receive a confirmation within 24 hours with next steps.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Discovery Call</p>
                      <p className="text-sm text-gray-600">We'll schedule a call to understand your needs and show you the platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold text-gray-900">Early Access Invite</p>
                      <p className="text-sm text-gray-600">When spots open, you'll get an invite to start using OwnerClone.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-semibold text-gray-900">Onboarding & Success</p>
                      <p className="text-sm text-gray-600">We set everything up and ensure you're getting ROI from day one.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* POS Upgrade CTA */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Get OwnerClone FREE</h3>
                <p className="text-gray-700 mb-4">
                  Considering a POS upgrade? Get OwnerClone included free when you switch to a supported POS system.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Ask About POS Upgrade Program →
                </Link>
              </div>

              {/* Social Proof */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Built by Restaurant Owners</h3>
                <p className="text-gray-700">
                  OwnerClone was created by someone who spent 20 years building a successful business, then years running three restaurant concepts. Every feature comes from real experience - the systems we wish we'd had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a cost to join the waitlist?</h3>
                <p className="text-gray-700">
                  No. Joining the waitlist is completely free and there's no commitment. We'll reach out when spots are available and you decide if it's right for you.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">When will OwnerClone be available?</h3>
                <p className="text-gray-700">
                  We're currently in development with early access starting in Q2 2026. Early adopters will get access first as we open spots gradually.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Will my pricing really stay at $0.20/customer forever?</h3>
                <p className="text-gray-700">
                  Yes. Early adopters lock in founder pricing for life. When we raise prices for new customers (likely to $0.30-0.40/customer), your rate never changes. This is our way of rewarding people who believe in us early.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if I'm not ready to commit yet?</h3>
                <p className="text-gray-700">
                  No problem. Join the waitlist to stay informed, and when we reach out you can decide if timing is right. There's no obligation. However, founder pricing is only available to early adopters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
