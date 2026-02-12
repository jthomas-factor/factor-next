'use client';
import { Leadership } from '@/lib/types';
import LeadershipGrid from './LeadershipGrid';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

type Prop = {
  posts: Leadership[];
};

const Team = ({ posts }: Prop) => {
  return (
    <motion.section
      variants={fadeIn('up', 0.4)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="container"
    >
      <h2 className="h3 mb-4">Our Team</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rotate-20"></div>
          <div className="capitalize font-medium text-primary">
            For tackling complex technical challenges, we have a well-rounded
            and experienced team of consultants, subject matter experts, and
            technology development staff.
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rotate-20"></div>
          <div className="capitalize font-medium text-primary">
            Our staff brings certifications in project management (PMP), GIS
            (GISP), cybersecurity (CISSP), database administration, and solution
            development.
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rotate-20"></div>
          <div className="capitalize font-medium text-primary">
            We have a senior team of seasoned desktop application, web, and data
            developers.
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rotate-20"></div>
          <div className="capitalize font-medium text-primary">
            FACTOR’s leadership team is focused on continuing our exceptional
            record of exceeding customer expectations, providing a challenging
            and rewarding work environment, and driving company growth.
          </div>
        </li>
      </ul>
      <LeadershipGrid posts={posts} />
    </motion.section>
  );
};

export default Team;
