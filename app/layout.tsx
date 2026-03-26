import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { draftMode } from 'next/headers';
import VisualEditingWrapper from '@/components/VisualEditingWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Factor, Inc.',
  description:
    'Solving challenging risk management problems in the transportation, energy, chemical, insurance, and public sectors since 1997.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Topbar />
        <Header />
        {children}
        {isEnabled && <VisualEditingWrapper />}
        <Footer />
      </body>
    </html>
  );
}
