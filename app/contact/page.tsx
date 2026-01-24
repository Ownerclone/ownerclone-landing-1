import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us - Schedule a Demo | OwnerClone',
  description: 'Get in touch with OwnerClone.',
  keywords: ['contact OwnerClone'],
}

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navigation />

        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Contact <span className="text-[#38bdf8]">Us</span>
            </h1>
            <p className="text-xl text-gray-300">Get in touch with the OwnerClone team</p>
          </div>
        </section>

        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8">
              <form action="https://formspree.io/f/meeeeevo" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-lg focus:border-[#38bdf8] focus:outline-none text-white resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#38bdf8] text-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#0ea5e9] transition-colors">Send Message</button>
              </form>
            </div>

            <div className="mt-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-[#38bdf8] text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:info@ownerclone.com" className="text-[#38bdf8]">info@ownerclone.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-[#38bdf8] text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">Atlanta, Georgia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
