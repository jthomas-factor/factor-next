'use client';
import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import {
  PiComputerTowerFill,
  PiPresentationChartFill,
  PiScrollFill,
} from 'react-icons/pi';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from 'next/link';

const serviceData = [
  {
    name: 'consulting',
    icon: <PiPresentationChartFill className="!w-10 !h-10" />,
    title: 'INTEGRATED CONSULTING SERVICES',
    description:
      'Services provided under Special Item Number (SIN) 541611 include:',
    serviceList: [
      'Management or strategy consulting, including research, evaluations, studies, analyses, scenarios/simulations, reports, business policy and regulation development assistance and strategy formulation',
      'Facilitation and related decision support services',
      'Survey services, using a variety of methodologies, including survey planning, design, and development; survey administration; data validation and analysis; reporting, and stakeholder briefings',
      'Advisory and assistance services in accordance with FAR 37.203',
    ],
  },
  {
    name: 'IT',
    icon: <PiComputerTowerFill className="!w-10 !h-10" />,
    title: 'INFORMATION TECHNOLOGY (IT) PROFESSIONAL SERVICES',
    description:
      'Services provided under Special Item Number (SIN) 54151S include:',
    serviceList: [
      'Cloud services (all associated labor)',
      'Cognitive computing',
      'Conversion and implementation support',
      'Database planning and design',
      'Internet of Things (IoT)',
      'IT project management',
      'Migration services (of all kinds)',
      'Network services',
      'Programming',
      'Resources and facilities management',
      'Systems analysis, design, and implementation',
      'Other services relevant to 29 CFR 541.400',
    ],
  },
  {
    name: 'MAS Info',
    icon: <PiScrollFill className="!w-10 !h-10" />,
    title: 'MAS CONTRACT INFORMATION',
    link: (
      <div className="flex flex-col gap-4">
        <Link
          href="https://s3.amazonaws.com/factorinc.com/FACTOR+GSA+Pricelist+-+2024-05-22.pdf"
          className="underline font-bold"
        >
          MAS Price List
        </Link>
        <ul>
          GSA Contracts:
          <li>National Customer Service Center</li>
          <ul>
            <li>
              <Link href="https://www.gsa.gov/about-us/contact-us">
                Contact us | GSA
              </Link>
            </li>
            <li>
              <Link href="tel:+18004883111">800-488-3111</Link>
            </li>
            <li>
              <Link href="mailto:ncsccustomer.service@gsa.gov">
                ncsccustomer.service@gsa.gov
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    ),
    serviceList: [
      'Business Size: Small Business',
      'Geographic Coverage: Domestic US and OCONUS',
      '5-year, multiple award, Indefinite Delivery/Indefinite Quantity (IDIQ) GWAC',
      '0.75% Industrial Funding Fee',
      'Contract Number: 47QRAA19D007Q',
      'Effective Dates: May 03, 2019 through April 02, 2029',
      'Prompt Payment, Quantity, and Dollar Volume Discounts: 0%',
    ],
  },
  {
    name: 'eFAST',
    icon: <PiScrollFill className="!w-10 !h-10" />,
    title: 'FAA eFast Contract Information',
    description:
      'Available Services include Research & Development (R&D), Engineering Services (ES), and Computer System Development (CSD)',
    link: (
      <div>
        <ul>
          FAA Contact:
          <li>eFAST Support Team</li>
          <ul>
            <li>
              <Link href="mailto:NATL-eFast-Admin@faa.gov">
                NATL-eFast-Admin@faa.gov
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    ),
    serviceList: [
      'Business Size: Small Business',
      'Electronic FAA Accelerated and Simplified Master Ordering Agreement (MOA)',
      'Contract Number: 693KA9-22-A-00126',
      'Effective Dates: March 18, 2022 through September 30, 2029',
    ],
  },
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Contracts = () => {
  const [activeTab, setActiveTab] = useState<string>('consulting');

  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Tabs
        defaultValue="consulting"
        onValueChange={value => setActiveTab(value)}
        className="flex flex-col xl:flex-row w-full gap-[30px]"
      >
        <TabsList
          aria-label="Contract Service Categories"
          className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]"
        >
          {serviceData.map((item) => {
            return (
              <TabsTrigger
                key={item.name}
                value={item.name}
                aria-label={`${item.title} Contract Information`}
                className="cursor-pointer w-full rounded-none h-[100px] flex items-center relative shadow p-0 outline-none transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                    activeTab === item.name
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-white'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] ml-16">
                  {item.name}
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="flex-1 bg-white shadow p-[30px]">
          {serviceData.map((item) => {
            return (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <motion.div
                  variants={fadeInVariant}
                  whileInView="show"
                  initial="hidden"
                  exit="hidden"
                  className="flex flex-col md:flex-row gap-[30px]"
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="h3">{item.title}</h3>
                    <p>{item.description}</p>
                    <>{item.link}</>
                    <ul className="grid grid-cols-1 gap-4 mb-8">
                      {item.serviceList.map((service, index) => {
                        return (
                          <li key={index} className="flex items-center gap-4">
                            <div className="p-1 w-2 h-2 bg-accent rotate-20"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Contracts;
