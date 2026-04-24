'use client';
import React from 'react';
import { Post } from '@/lib/types';
import Link from 'next/link';
import { RiCheckboxCircleFill, RiArrowRightUpLine } from 'react-icons/ri';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';
import PreTitle from './PreTitle';
import Button from './Button';

type Props = {
  posts: Post[];
};

const Worklist = ({ posts }: Props) => {
  return (
    <>
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
            <h3 className="mb-3">Project Highlights</h3>
            <p className="mb-11 max-w-[500px] mx-auto">
              FACTOR is proud to support a wide range of federal, defense, and
              infrastructure-focused agencies. Our trusted partnerships span
              civil and military clients, helping them tackle complex problems
              in geospatial science, emergency planning, and mission-critical
              data systems.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`projects/${post.slug}`}
                aria-label="Read more about this project"
              >
                <div className="relative w-full h-[492px] overflow-hidden group flex justify-center">
                  <Image
                    src={post.imageUrl}
                    fill
                    sizes="350px"
                    className="object-cover"
                    alt={post.subtitle}
                  />

                  <div className="w-[90%] h-[84px] bg-white absolute bottom-4 flex justify-between items-center text-primary md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                    <div className="pl-8">
                      <h4 className="text-primary font-primary font-semibold tracking-[1px]">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <RiCheckboxCircleFill className="text-accent text-xl" />
                        <p className="px-2">{post.subtitle}</p>
                      </div>
                    </div>

                    <div className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-white text-2xl flex justify-center items-center mr-4">
                      <RiArrowRightUpLine className="hover:rotate-45 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center mt-4">
            <Button text="View all projects" link="/projects" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Worklist;
