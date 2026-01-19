import { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Thank You - We\'ll Be In Touch Soon | OwnerClone',
  description: 'Thank you for your interest in OwnerClone. We\'ll be in touch within 24 hours.',
}

export default function ThankYou() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaCheckCircle className="text-white text-8xl mx-auto mb-8 animate-bounce" />
          
          <h1 className="text-white mb-6">
            Thank You!
          </h1>
          
          <p className="text-2xl text-primary-100 mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg text-white mb-4">
              <strong>For POS upgrade inquiries,</strong> we'll typically reach out within a few hours.
            </p>
            <p className="text-primary-100">
              Check your email (and spam folder) for a confirmation message.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-primary-100 mb-6">
              While you wait, explore more about OwnerClone:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/features"
                className="px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Explore Features
              </Link>
              
              <Link 
                href="/roadmap"
                className="px-6 py-3 bg-primary-700 text-white font-bold rounded-lg border-2 border-white hover:bg-primary-600 transition-colors duration-200"
              >
                See Our Roadmap
              </Link>
              
              <Link 
                href="/blog"
                className="px-6 py-3 bg-primary-700 text-white font-bold rounded-lg border-2 border-white hover:bg-primary-600 transition-colors duration-200"
              >
                Read Our Blog
              </Link>
            </div>

            <div className="mt-8">
              <Link 
                href="/"
                className="text-primary-100 hover:text-white underline"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
