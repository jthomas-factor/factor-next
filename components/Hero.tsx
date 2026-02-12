'use client';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-[50vh] relative bg-primary/90">
      {/* Background Image */}
      <Image
        src="/hero/hero.avif"
        alt="FACTOR Inc. data-driven industry and infrastructure solutions"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center 2xl:object-bottom absolute inset-0 z-0 scale-x-[-1]"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-[linear-gradient(to_right,#3a5062,transparent)]">
        <div className="text-white flex flex-col container mx-auto">
          <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
            <motion.h1
              variants={fadeIn('up', 0.2)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.8 }}
              className="h1 !text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] mb-4"
            >
              Powering the Future of Industry
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.4)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.8 }}
              className="mb-9 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
            >
              We help businesses make smarter decisions using data, technology,
              and expert insights to manage risks and improve safety.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.4)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.8 }}
            >
              <Button text="Contact us" link="#contact" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
