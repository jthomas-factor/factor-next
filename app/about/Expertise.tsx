'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Image from 'next/image';

const Expertise = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.4)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="mt-18 bg-primary/50 bg-[url('/about/railroad.avif')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="bg-white/75">
        {/* text */}
        <div className="container py-16 flex flex-col gap-8">
          <p className="ml-8 text-primary font-bold lg:w-[50%]">
            FACTOR delivers essential expertise to our clients enabling them to
            better manage the risks inherent in their operations. We apply
            advanced methodologies, technology, and data analysis to support
            risk-based decision-making and create a competitive advantage for
            our clients.
          </p>
          <p className="ml-8 text-primary font-bold lg:w-[50%]">
            FACTOR has been solving challenging risk management problems in the
            transportation, energy, chemical, insurance, and public sectors
            since 1997.
          </p>
        </div>
        {/* Images */}
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 pb-8">
          <div>
            <Image
              src="/about/chemical-plant.avif"
              alt="Industrial chemical plant facility with storage tanks and processing towers representing energy and chemical sector risk management"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 573px"
              quality={75}
              fetchPriority="high"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/about/shipping-boat.avif"
              alt="Container ship at port symbolizing transportation and logistics risk management services"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 573px"
              quality={75}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[400px] right-50 top-[-70] hidden lg:block">
        <motion.div
          variants={fadeIn('up', 0.4)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.6 }}
        >
          <Image
            src="/FACTOR_25th_logo_transparent.png"
            alt="We help clients navigate complexity and succeed with transformative
            solutions at the intersection of geospatial intelligence, software
            engineering, data analytics, and trusted consultation."
            height={900}
            width={1200}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
