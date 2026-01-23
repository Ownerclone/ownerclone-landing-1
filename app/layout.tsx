import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OwnerClone - Restaurant Management Software for Independent Owners',
  description: 'Restaurant management software built by owners for owners. Automate operations, track food & labor costs, and boost profits with POS integration. Toast & Skytab compatible. Starting at $0.20/customer.',
  keywords: ['restaurant management software', 'restaurant POS integration', 'food cost calculator', 'labor cost tracking', 'restaurant analytics', 'independent restaurant software', 'Toast POS integration', 'Skytab POS integration'],
  authors: [{ name: 'OwnerClone' }],
  openGraph: {
    title: 'OwnerClone - Restaurant Management Software',
    description: 'Built by restaurant owners for restaurant owners. Automate your operations and increase profits.',
    url: 'https://ownerclone.com',
    siteName: 'OwnerClone',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OwnerClone - Restaurant Management Software',
    description: 'Built by restaurant owners for restaurant owners',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
