import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://factorinc.com'),
  title: 'FACTOR, Inc. | Geospatial, Data & Risk Modeling Solutions',

  description:
    'FACTOR, Inc. delivers geospatial science, data analytics, and software solutions to help organizations manage risk, improve safety, and make confident decisions.',

  keywords: [
    'FACTOR Inc',
    'geospatial services',
    'risk modeling',
    'data analytics',
    'decision support systems',
    'government contractor',
    'infrastructure safety',
    'environmental analysis',
    'GIS consulting',
    'software development',
  ],

  openGraph: {
    title: 'FACTOR, Inc. | Powering the Future of Industry',
    description:
      'Geospatial, data, and software solutions for infrastructure, safety, and environmental challenges.',
    url: 'https://factorinc.com',
    siteName: 'FACTOR, Inc.',
    images: [
      {
        url: '/hero/hero.png',
        width: 1200,
        height: 630,
        alt: 'FACTOR Inc. Industry Data and Technology Solutions',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FACTOR, Inc. | Powering the Future of Industry',
    description:
      'Helping organizations manage risk through geospatial and data-driven solutions.',
    images: ['/hero/hero.png'],
  },

  alternates: {
    canonical: 'https://factorinc.com',
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Home = () => {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FACTOR, Inc.',
            url: 'https://factorinc.com',
            logo: 'https://factorinc.com/logo.png',
            description:
              'Geospatial, data, and software solutions for infrastructure, safety, and environmental challenges.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '209 10th Ave. S. Suite 560',
              addressLocality: 'Nashville',
              addressRegion: 'TN',
              postalCode: '37203',
              addressCountry: 'US',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+1-615-321-4848',
                contactType: 'customer service',
              },
              {
                '@type': 'ContactPoint',
                telephone: '+1-202-891-6000',
                contactType: 'government contracts',
              },
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
