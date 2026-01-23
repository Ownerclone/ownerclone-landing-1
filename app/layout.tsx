import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
