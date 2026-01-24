import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ownerclone.com'),
  title: {
    default: 'OwnerClone | Restaurant Management Software Built by Restaurant Owners',
    template: '%s | OwnerClone'
  },
  description: 'AI-powered restaurant management software that catches theft, tracks food costs in real-time, and predicts demand. Built by restaurant owners for restaurant owners in Atlanta, GA.',
  keywords: 'restaurant management software, restaurant theft detection, food cost calculator, POS integration, demand forecasting, menu pricing, restaurant AI, Atlanta restaurant software',
  authors: [{ name: 'Mateo Monti' }],
  creator: 'Mateo Monti',
  publisher: 'OwnerClone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ownerclone.com',
    siteName: 'OwnerClone',
    title: 'OwnerClone | Restaurant Management Software',
    description: 'AI-powered restaurant management that catches theft, tracks food costs, and predicts demand. Built by restaurant owners for restaurant owners.',
    images: [
      {
        url: 'https://ownerclone.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OwnerClone Restaurant Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OwnerClone | Restaurant Management Software',
    description: 'AI-powered restaurant management that catches theft, tracks food costs, and predicts demand.',
    images: ['https://ownerclone.com/og-image.png'],
    creator: '@ownerclone',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
