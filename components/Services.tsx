'use client';
import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Button from './Button';
import {
  PiMapPinSimpleAreaFill,
  PiChartBarFill,
  PiDesktopFill,
} from 'react-icons/pi';
import PreTitle from './PreTitle';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const serviceData = [
  {
    name: 'geospatial',
    icon: <PiMapPinSimpleAreaFill className="!w-10 !h-10" />,
    title: 'Geospatial Science & Engineering',
    description:
      'Understanding your operational environment is essential for optimizing efficiency and safety. We help clients collect, develop, compile, analyze, visualize, disseminate, and archive geospatial data and maximize the use of public and private data sets for critical decision-making. We primarily help clients that work in the transportation, energy, chemical, and insurance industries and help them navigate complex regulatory requirements for transportation routing, planning, and situational awareness for hazardous materials.',
    serviceList: [
      'GIS Analysis, Editing, & Tool Development',
      'Routing & Network Risk Modeling',
      'Environmental & Emergency Planning Support',
      'Situational Awareness & Resilience Planning',
    ],
    thumbs: [
      {
        url: '/services/Image-3-Main-Slider.jpeg',
      },
      {
        url: '/services/network.jpg',
      },
    ],
  },
  {
    name: 'data',
    icon: <PiChartBarFill className="!w-10 !h-10" />,
    title: 'Data & Decision Support',
    description:
      'Many organizations struggle with realizing competitive advantages that can be gained through innovative use of data, modeling, and analytics. Data is growing with the Internet of Things (IoT) and the related tools and processes continue to rapidly evolve. We help clients harness the power of data through data integration, data architecture, data modeling, data visualization, and machine learning.',
    serviceList: [
      'Big Data Processing & Lifecycle Management',
      'Secure Data Sharing & Visualization Dashboards',
      'Secure Data Management & Governance',
      'Business Intelligence & Analytics Integration',
    ],
    thumbs: [
      {
        url: '/services/businessmen-businesswomen.jpg',
      },
      {
        url: '/services/consulting.jpg',
      },
    ],
  },
  {
    name: 'development',
    icon: <PiDesktopFill className="!w-10 !h-10" />,
    title: 'Full Stack Software Development',
    description:
      'Information technology solutions can improve operations and help automate some of the most complex tasks. We help clients design, develop, and implement software and integrated system solutions to support data analytics and operational decision-making. We have experience modernizing legacy applications and databases including developing new cloud-based solutions to maximize our client’s potential for exploiting data sharing and system integration opportunities.',
    serviceList: [
      'Systems Engineering, Cloud Migration, DevSecOps',
      'Secure Application Development with REST/GraphQL APIs',
      'Digital Transformation & Process Automation',
    ],
    thumbs: [
      {
        url: '/services/laptop.jpg',
      },
      {
        url: '/services/website.jpg',
      },
    ],
  },
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>('geospatial');

  return (
    <section id="services" className="pt-16 xl:pt-34">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <PreTitle text="Services" center={true} />
          <h2 className="h2 mb-3">Core Capabilities</h2>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="geospatial"
            onValueChange={value => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList
              aria-label="FACTOR Service Categories"
              className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]"
            >
              {serviceData.map(item => {
                return (
                  <TabsTrigger
                    key={item.name}
                    aria-label={`${item.title} Services`}
                    value={item.name}
                    className="cursor-pointer w-full rounded-none h-[100px] flex items-center relative shadow p-0 outline-none transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name ?
                          'bg-primary text-white'
                        : 'bg-secondary text-white'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="flex-1 bg-white shadow h-[490px] p-[30px]">
              {serviceData.map(item => {
                return (
                  <TabsContent
                    key={item.name}
                    value={item.name}
                    className="m-0"
                  >
                    <motion.div
                      variants={fadeInVariant}
                      whileInView="show"
                      initial="hidden"
                      exit="hidden"
                      className="flex flex-col md:flex-row gap-[30px]"
                    >
                      <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                        {item.thumbs.map((thumb, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                            >
                              <Image
                                src={thumb.url}
                                fill
                                sizes="200px"
                                alt={'Picture representing ' + item.title}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <div>
                          <h3 className="h3 mb-6">{item.title}</h3>
                          <p className="mb-10">{item.description}</p>
                          <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mb-12">
                            {item.serviceList.map((service, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-2 h-2 bg-accent rotate-20"></div>
                                  <div className="capitalize font-medium text-primary">
                                    {service}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          <Button text="Read more" link="services" />
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
