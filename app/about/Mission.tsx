'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Mission = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="container flex flex-col gap-4"
    >
      <h1 className="h3">
        Geospatial Intelligence & Risk Management Experts Since 1997
      </h1>
      <p>
        We help clients navigate complexity and succeed with transformative
        solutions at the intersection of geospatial intelligence, software
        engineering, data analytics, and trusted consultation.
      </p>
      <p>
        Industry and government agencies rely on our secure, scalable, and
        insight-driven systems and expertise to manage risk, strengthen
        resilience, and boost efficiency.
      </p>
    </motion.section>
  );
};

export default Mission;
