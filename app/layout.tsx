import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OwnerClone - Restaurant Management Software',
  description: 'AI-powered restaurant management for independent owners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light-mode');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        
        {/* Global Footer */}
        <footer className="relative z-10 py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              
              {/* Logo + Tagline */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="-5 0 85 60" className="h-10 w-auto">
                    <circle cx="20" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10"/>
                    <circle cx="48" cy="30" r="18" fill="none" className="stroke-cyan-400/60" strokeWidth="10" strokeDasharray="85 113" transform="rotate(40, 48, 30)"/>
                  </svg>
                  <span className="text-2xl font-black text-cyan-400/90">OwnerClone</span>
                </div>
                <p className="text-gray-400 mb-4">
                  AI-powered restaurant management for independent owners who refuse to lose money.
                </p>
                <p className="text-sm text-gray-500">
                  © 2026 OwnerClone, Inc. All rights reserved.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-bold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/features" className="text-gray-400 hover:text-cyan-400 transition">Features</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition">Pricing</Link></li>
                  <li><Link href="/roadmap" className="text-gray-400 hover:text-cyan-400 transition">Roadmap</Link></li>
                  <li><Link href="/demo" className="text-gray-400 hover:text-cyan-400 transition">Demo</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition">Blog</Link></li>
                  <li><Link href="/free-tools" className="text-gray-400 hover:text-cyan-400 transition">Free Tools</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition">Terms</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition">Privacy</Link></li>
                  <li><Link href="/security" className="text-gray-400 hover:text-cyan-400 transition">Security</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              <p>Built by restaurant owners, for restaurant owners. 🍽️</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
