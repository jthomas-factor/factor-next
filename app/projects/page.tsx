'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import PreTitle from '@/components/PreTitle';
import Button from '@/components/Button';
import { SERVICES } from '@/lib/constant';
import Link from 'next/link';

const projects = [
  {
    title: 'Transportation Risk Assessment',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, officia dignissimos accusamus ratione ad explicabo ipsam saepe earum molestiae velit neque distinctio consequuntur tempore accusantium aliquid beatae temporibus corporis nulla!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui quibusdam fugit laboriosam optio repudiandae, sint debitis perferendis laborum obcaecati labore voluptate consequatur, quasi numquam aut blanditiis earum ipsum amet.',
    industries: [],
    services: [SERVICES.geospatial, SERVICES.data],
    featuredImage: '/work/tra-feature.jpg',
    url: '/transportation-risk-assessment',
  },
  {
    title: 'Rail Corridor Risk Management System',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, officia dignissimos accusamus ratione ad explicabo ipsam saepe earum molestiae velit neque distinctio consequuntur tempore accusantium aliquid beatae temporibus corporis nulla!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui quibusdam fugit laboriosam optio repudiandae, sint debitis perferendis laborum obcaecati labore voluptate consequatur, quasi numquam aut blanditiis earum ipsum amet.',
    industries: [],
    services: [SERVICES.development, SERVICES.data],
    featuredImage: '/work/rcrms-feature.jpg',
    url: '/rail-corridor-risk-management-system',
  },
  {
    title: 'National Risk Index',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, officia dignissimos accusamus ratione ad explicabo ipsam saepe earum molestiae velit neque distinctio consequuntur tempore accusantium aliquid beatae temporibus corporis nulla!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui quibusdam fugit laboriosam optio repudiandae, sint debitis perferendis laborum obcaecati labore voluptate consequatur, quasi numquam aut blanditiis earum ipsum amet.',
    industries: [],
    services: [SERVICES.geospatial],
    featuredImage: '/work/nhrm-feature.jpg',
    url: '/national-risk-index',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto pt-8 mb-16">
      <PreTitle text="Projects" />
      <div className="border-b border-primary/10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="pt-4 xl:pt-8 mb-4">
            <div className="container mx-auto pb-16">
              <div className="flex flex-col gap-2">
                <div className="flex-1">
                  <motion.div
                    variants={fadeIn('right', 0.2)}
                    whileInView="show"
                    initial="hidden"
                    viewport={{ once: false, amount: 0.2 }}
                    className="max-w-[540px]"
                  >
                    <h2 className="h2 mb-6">
                      <Link href={project.url}>{project.title}</Link>
                    </h2>
                    <p className="mb-10">{project.summary}</p>
                    <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mb-12">
                      {project.services.map((service, index) => {
                        return (
                          <li key={index} className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-accent rotate-20"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </div>
                <motion.div
                  variants={fadeIn('left', 0.2)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex-1 flex"
                >
                  <Link
                    href={project.url}
                    className="w-[500px] h-[300px] relative"
                  >
                    <Image
                      src={project.featuredImage}
                      fill
                      sizes="590px"
                      alt="Image representing data across the globe"
                      className="object-cover"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
