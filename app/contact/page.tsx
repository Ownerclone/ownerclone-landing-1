'use client';

import { Metadata } from 'next'
import { useState } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Formspree integration
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Let's <span className="text-[#38bdf8]">Talk</span>
          </h1>
          <p className="text-xl text-gray-300">
            Questions? Feedback? Feature requests? We're here.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-[#38bdf8]">Message</span>
              </h2>
              
              {isSubmitted ? (
                <div className="bg-[#10b981]/10 border-2 border-[#10b981] rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-[#10b981] mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors"
                      placeholder="john@restaurant.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-300 mb-2">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors"
                      placeholder="Your Restaurant Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-type" className="block text-sm font-semibold text-gray-300 mb-2">
                      What can we help you with?
                    </label>
                    <select
                      id="inquiry-type"
                      name="inquiry-type"
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="POS Upgrade">POS Upgrade - Get OwnerClone FREE</option>
                      <option value="Schedule a Demo">Schedule a Demo</option>
                      <option value="Join Waitlist">Join Waitlist</option>
                      <option value="Pricing Questions">Questions About Pricing</option>
                      <option value="Feature Questions">Questions About Features</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:bg-[#1a1a1a] focus:outline-none text-white transition-colors resize-none"
                      placeholder="Tell us about your restaurant and how we can help"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#38bdf8] text-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#0ea5e9] transition-colors shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}

              <p className="text-sm text-gray-400 mt-4">We typically respond within 24 hours</p>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Get OwnerClone FREE */}
              <div className="bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/5 border-2 border-[#10b981] rounded-2xl p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Get OwnerClone <span className="text-[#10b981]">FREE</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  Upgrade your POS system and get OwnerClone included at no cost.
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#10b981] mr-2">✓</span>
                    <span>Switch to Toast or Skytab POS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#10b981] mr-2">✓</span>
                    <span>Get OwnerClone included free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#10b981] mr-2">✓</span>
                    <span>Save $200-400/month</span>
                  </li>
                </ul>
                
                  href="/pricing"
                  className="block w-full text-center bg-[#10b981] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#059669] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Contact Info */}
              <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Other Ways to Reach Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#38bdf8] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:hello@ownerclone.com" className="text-[#38bdf8] hover:text-[#0ea5e9] transition">
                        hello@ownerclone.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#38bdf8] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                      💬
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Live Chat</h4>
                      <p className="text-gray-400 text-sm">Available 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#38bdf8] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                      🎥
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Schedule a Demo</h4>
                      <p className="text-gray-400 text-sm">See OwnerClone in action</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/pricing" className="block text-gray-300 hover:text-[#38bdf8] transition">
                    → View Pricing
                  </a>
                  <a href="/features" className="block text-gray-300 hover:text-[#38bdf8] transition">
                    → See Features
                  </a>
                  <a href="/roadmap" className="block text-gray-300 hover:text-[#38bdf8] transition">
                    → Product Roadmap
                  </a>
                  <a href="/free-tools" className="block text-gray-300 hover:text-[#38bdf8] transition">
                    → Free Calculator Tools
                  </a>
                </div>
              </div>

              {/* Media Inquiries */}
              <div className="backdrop-blur-xl bg-white/5 border border-[#2a2a2a] rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-2">For Media Inquiries</h4>
                <a href="mailto:press@ownerclone.com" className="text-[#38bdf8] hover:text-[#0ea5e9] transition">
                  press@ownerclone.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
