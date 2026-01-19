import { Metadata } from 'next'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us - Schedule a Demo | OwnerClone',
  description: 'Get in touch with OwnerClone. Schedule a demo, ask about our POS upgrade program, or learn how we can help your independent restaurant succeed.',
  keywords: ['contact OwnerClone', 'restaurant software demo', 'POS upgrade program', 'restaurant management consultation'],
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">
            Let's Talk About Your Restaurant
          </h1>
          <p className="text-xl text-primary-100">
            Schedule a demo, ask about getting OwnerClone free with a POS upgrade, or just say hello. We're here to help independent restaurant owners succeed.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form action="https://formspree.io/f/meeeeevo" method="POST" className="space-y-6">
                
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-700 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Your Restaurant Name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-semibold text-gray-700 mb-2">
                    What can we help you with? *
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select an option...</option>
                    <option value="🔥 POS Upgrade - Get OwnerClone FREE">🔥 POS Upgrade - Get OwnerClone FREE</option>
                    <option value="Schedule a Demo">Schedule a Demo</option>
                    <option value="Join Waitlist / Early Access">Join Waitlist / Early Access</option>
                    <option value="Questions About Pricing">Questions About Pricing</option>
                    <option value="Questions About Features">Questions About Features</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your restaurant and how we can help..."
                  ></textarea>
                </div>

                <input type="hidden" name="_subject" value="New OwnerClone Contact Form Submission" />
                <input type="hidden" name="_next" value="https://ownerclone.com/thank-you" />
                <input type="hidden" name="_replyto" value="info@ownerclone.com" />

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4">
                * Required fields. We typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Info & Special Offers */}
            <div className="space-y-8">
              {/* POS Upgrade CTA */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Get OwnerClone FREE</h3>
                <p className="text-gray-700 mb-4">
                  Upgrade your POS system and get OwnerClone included at no cost. We partner with leading POS providers to make this happen.
                </p>
                <p className="text-gray-700 mb-6">
                  Select "POS Upgrade - Get OwnerClone FREE" in the form, or email us directly:
                </p>
                <a
                  href="mailto:info@ownerclone.com?subject=POS%20UPGRADE%20INQUIRY%20-%20Get%20OwnerClone%20FREE&body=Hi%2C%0A%0AI'm%20interested%20in%20upgrading%20my%20POS%20system%20and%20getting%20OwnerClone%20for%20free.%0A%0ARestaurant%20Name%3A%20%0ACurrent%20POS%20System%3A%20%0ALocation%3A%20%0APhone%3A%20%0A%0APlease%20tell%20me%20more%20about%20this%20program.%0A%0AThanks!"
                  className="block w-full text-center px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Email Us About POS Upgrade →
                </a>
              </div>

              {/* Contact Information */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaEnvelope className="text-primary-600 text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@ownerclone.com" className="text-primary-600 hover:text-primary-700">
                        info@ownerclone.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-primary-600 text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">
                        Atlanta, Georgia<br />
                        Serving restaurants nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/pricing" className="block text-primary-600 hover:text-primary-700 font-semibold">
                    → View Pricing & Early Adopter Rates
                  </Link>
                  <Link href="/features" className="block text-primary-600 hover:text-primary-700 font-semibold">
                    → Explore All Features
                  </Link>
                  <Link href="/roadmap" className="block text-primary-600 hover:text-primary-700 font-semibold">
                    → See Our Product Roadmap
                  </Link>
                  <Link href="/blog" className="block text-primary-600 hover:text-primary-700 font-semibold">
                    → Read Restaurant Owner Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">We're Here to Help</h2>
            <p className="text-lg text-gray-700 mb-4">
              OwnerClone was built by restaurant owners who understand your challenges. When you reach out, you're talking to people who've been in your shoes.
            </p>
            <p className="text-lg text-gray-700">
              We typically respond within 24 hours. For POS upgrade inquiries, we'll get back to you even faster - usually within a few hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
