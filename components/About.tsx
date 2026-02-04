'use client'
import Image from 'next/image';
import PreTitle from './PreTitle';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-34 mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <motion.div
              variants={fadeIn('right', 0.2)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              <PreTitle text="About us" />
              <h2 className="h2 mb-6">
                Turning Complex Data into Confident Decisions
              </h2>
              <p>
                FACTOR, Inc. is a mature small business solving tough
                infrastructure, safety, and environmental challenges through
                geospatial, IT, and risk modeling solutions. With 25+ years of
                delivering decision support systems and mission-critical
                software, we help defense, chemical, federal, and transportation
                pertners achieve complex operational goals with measurable
                impact.
              </p>
              <div className="relative w-[400px] h-[200px] flex flex-col text-right mb-6">
                <Image
                  src="/about/FACTOR_25th_logo.svg"
                  fill
                  className="object-contain"
                  alt="25th Anniversary Logo"
                />
              </div>
              <Button text="Contact us" />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[600px] xl:h-[400px] relative">
              <div className="hidden xl:flex w-[600px] h-[400px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src="/about/globe_office_image.jpg"
                fill
                sizes="590px"
                alt="Image representing data across the globe"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
