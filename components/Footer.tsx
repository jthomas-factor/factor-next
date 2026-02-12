'use client';
import { RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';
import Socials from './Socials';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Logo from './Logo';
import Link from 'next/link';
import { footerLinks } from '@/lib/constant';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn('up', 0.1)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-white"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[90px]">
          <div className="flex-1">
            <div className="w-[25%] mb-10">
              <Logo />
            </div>
            <ul className="grid grid-cols-3 gap-y-2 gap-x-4">
              {footerLinks.map((link, index) => (
                <li key={index} className="text-primary">
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 text-primary">
            <p className="h4 mb-4">Contact</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <div>
                  <p>Corporate Headquarters</p>
                  <p>10th Ave. S. Suite 560 Nashville, TN 37203</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+1 615 321 4848</p>
                <p>+1 202 891 6000</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:px-10 py-12 border-t border-primary/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-primary">
          Copyright &copy; 2026 FACTOR, Inc. All Rights Reserved
        </p>
        <Socials
          containerStyles="flex gap-6 text-primary"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
