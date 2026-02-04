'use client'
import Image from 'next/image';
import Link from 'next/link';
import PreTitle from './PreTitle';
import { RiArrowRightUpLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Button from './Button';

const workData = [
  {
    img: '/work/nhrm-feature.jpg',
    project: 'NRI',
    description: 'National Risk Index',
    href: '/',
  },
  {
    img: '/work/coe-feature.jpg',
    project: 'COE',
    description: 'Common Operating Environment',
    href: '/',
  },
  {
    img: '/work/statue-of-liberty.jpg',
    project: 'MSRAM',
    description: 'Maritime Security Risk Analysis Model',
    href: '/',
  },
  {
    img: '/work/rcrms-feature.jpg',
    project: 'RCRMS',
    description: 'Rail Corridor Risk Managment System',
    href: '/',
  },
];

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <PreTitle text="Our work" center />
          <h2 className="h2 mb-3">Project Highlights</h2>
          <p className="mb-11 max-w-[500px] mx-auto">
            FACTOR is proud to support a wide range of federal, defense, and
            infrastructure-focused agencies. Our trusted partnership span civil
            and military clients, helping them tackle complex problems in
            geospatial science, emergency planning, and mission-critical data
            systems.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('up', 0.3)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                sizes="350px"
                className="object-cover"
                alt={item.description}
              />
              <div className="w-[90%] h-[84px] bg-white absolute bottom-4 flex justify-between items-center text-primary md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h3 className="text-primary font-primary font-semibold tracking-[1px]">
                    {item.project}
                  </h3>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-white text-2xl flex justify-center items-center absolute right-3"
                  aria-label="Read more about this project"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
        <Button text="View all projects" link="/projects"/>
      </motion.div>
    </div>
  );
};

export default Work;
