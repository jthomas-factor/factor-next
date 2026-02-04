'use client'
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Hero = () => {
  return (
    <section className="h-[50vh] overflow-hidden relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-secondary/50">
        <div className="text-white flex flex-col container mx-auto">
          <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
            <motion.h1
              variants={fadeIn('up', 0.2)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.8 }}
              className="h1 !text-white mb-4"
            >
              Powering the Future of Industry
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.4)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.8 }}
              className="mb-9"
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
              <Button text="See our services" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
