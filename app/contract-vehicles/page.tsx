import PreTitle from '@/components/PreTitle';
import Contracts from './Contracts';
import Intro from './Intro';
import PointOfContact from './PointOfContact';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contract Vehicles | FACTOR, Inc.',
  description:
    'Access FACTOR through GSA MAS and FAA eFAST contracts. Learn how federal, state, and local agencies can procure consulting and IT services.',

  keywords: [
    'FACTOR Inc',
    'GSA MAS',
    'FAA eFAST',
    'government contracts',
    'federal procurement',
    'IT services',
    'consulting services',
    'IDIQ contracts',
  ],

  openGraph: {
    title: 'Contract Vehicles | FACTOR, Inc.',
    description:
      'Access FACTOR through GSA MAS and FAA eFAST contracts for consulting and IT services.',
    url: 'https://factorinc.com/contracts',
    siteName: 'FACTOR, Inc.',
    images: [
      {
        url: '/about/Mark-Lepofsky_WCX2592-on-blue-small.jpg',
        width: 800,
        height: 800,
        alt: 'FACTOR Point of Contact - Mark Lepofsky',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contract Vehicles | FACTOR, Inc.',
    description:
      'Learn how to access FACTOR via GSA MAS and FAA eFAST contracts.',
    images: ['/about/Mark-Lepofsky_WCX2592-on-blue-small.jpg'],
  },

  alternates: {
    canonical: 'https://factorinc.com/contracts',
  },
};

const page = () => {
  return (
    <main className="container mx-auto pt-8 xl:pt-24">
      <Script
        id="contracts-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FACTOR, Inc.',
            url: 'https://factorinc.com',
            contactPoint: {
              '@type': 'ContactPoint',
              name: 'Mark Lepofsky',
              telephone: '+1-202-891-6000',
              contactType: 'Government Contracts',
              email: 'GSAorders@factorinc.com',
            },
            areaServed: 'US',
            sameAs: [],
          }),
        }}
      />
      <PreTitle text="Contract Vehicles" />
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 xl:col-span-5">
          <Intro />
          <Contracts />
        </div>
        <div className="col-span-6 xl:col-span-1">
          <PointOfContact />
        </div>
      </div>
    </main>
  );
};

export default page;
