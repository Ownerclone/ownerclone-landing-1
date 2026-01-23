import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';
import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer'; // TEMPORARILY COMMENTED OUT

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OwnerClone | AI-Powered Restaurant Management',
  description: 'Catch theft, optimize costs, and predict demand with AI. The complete restaurant management platform.',
  keywords: 'restaurant management, AI restaurant software, theft detection, food cost control, demand forecasting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
