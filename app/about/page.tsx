import { client } from '@/sanity/lib/client';
import { leadershipGridQuery } from '@/lib/queries';
import { Leadership } from '@/lib/types';
import { Metadata } from 'next';
import PreTitle from '@/components/PreTitle';
import Mission from './Mission';
import Expertise from './Expertise';
import Team from './Team';
import TechCompliance from './TechCompliance';

export const metadata: Metadata = {
  title:
    'About FACTOR | Geospatial Risk Management & GIS Consulting Since 1997',
  description:
    'FACTOR delivers geospatial intelligence, GIS software development, and advanced risk management solutions for transportation, energy, chemical, insurance, and public sector clients. SOC 2 and NIST SP 800-171 compliant.',
  keywords: [
    'geospatial intelligence',
    'GIS consulting',
    'risk management solutions',
    'ArcGIS development',
    'NIST SP 800-171 compliant',
    'SOC 2 compliant',
    'federal geospatial contractor',
    'transportation risk analysis',
  ],
  openGraph: {
    title: 'FACTOR | Geospatial Intelligence & Risk Management Experts',
    description:
      'Advanced GIS, software engineering, and risk analytics supporting transportation, energy, chemical, insurance, and federal clients.',
    type: 'website',
  },
};

const AboutPage = async () => {
  const posts = await client.fetch<Leadership[]>(leadershipGridQuery);

  return (
    <div className="flex flex-col gap-4 pt-8 xl:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'FACTOR',
            foundingDate: '1997',
            areaServed: 'United States',
            serviceType: [
              'Geospatial Intelligence',
              'Risk Management Consulting',
              'GIS Software Development',
              'Federal Technology Consulting',
            ],
            knowsAbout: [
              'ArcGIS',
              'Spatial Data Analytics',
              'Transportation Risk',
              'Energy Infrastructure Risk',
              'NIST SP 800-171',
              'SOC 2 Compliance',
            ],
          }),
        }}
      />

      <section className="container">
        <PreTitle text="About" />
      </section>
      <main className="flex flex-col gap-24">
        <Mission />
        <Expertise />
        <Team posts={posts} />
        <TechCompliance />
      </main>
    </div>
  );
};

export default AboutPage;
