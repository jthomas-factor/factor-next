'use client';
import React from 'react';
import { Leadership } from '@/lib/types';
import Link from 'next/link';
import { RiCheckboxCircleFill, RiArrowRightUpLine } from 'react-icons/ri';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

type Props = {
  posts: Leadership[];
};

const LeadershipGrid = ({ posts }: Props) => {
  return (
    <>
      <div className="pt-4">
        <motion.div
          variants={fadeIn('up', 0.3)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="hidden lg:grid grid-cols-2">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`about/leadership/${post.slug}`}
                aria-label="Read more about this project"
              >
                <div className="relative w-full h-[600px] overflow-hidden group flex justify-center">
                  <Image
                    src={post.imageUrl}
                    fill
                    sizes="350px"
                    className="object-cover"
                    alt={post.name}
                  />

                  <div className="w-[90%] h-[84px] bg-white absolute bottom-4 flex justify-between items-center text-primary md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                    <div className="pl-8">
                      <h3 className="text-primary font-primary font-semibold tracking-[1px]">
                        {post.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <RiCheckboxCircleFill className="text-accent text-xl" />
                        <p className="px-2">{post.position}</p>
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
            <Button text="Meet the Leadership" link="about/leadership" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LeadershipGrid;
