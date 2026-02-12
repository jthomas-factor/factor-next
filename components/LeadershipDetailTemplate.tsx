'use client';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';
import { Leadership } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import PreTitle from './PreTitle';
import { RiLinkedinFill } from 'react-icons/ri';

export default function LeadershipDetailTemplate({
  post,
}: {
  post: Leadership;
}) {
  return (
    <div className="container">
      {/* Breadcrumbs */}
      <nav className="my-8 text-sm text-gray-500 flex items-center gap-2">
        <Link href={`/about`} className="hover:text-primary transition-colors">
          About
        </Link>
        <span>/</span>
        <Link
          href={`/about/leadership`}
          className="hover:text-primary transition-colors"
        >
          Leadership
        </Link>
        <span>/</span>
        <span className="text-gray-700">{post.name}</span>
      </nav>

      {/* Layout */}
      <div className="grid grid-cols-6 gap-8">
        {/* Sidebar */}
        <div className="col-span-2 hidden lg:block">
          <div className="flex flex-col gap-2">
            {/* Image */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full mb-4">
                <Image
                  src={post.imageUrl}
                  alt={post.name}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover rounded"
                  priority
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4"
            >
              <PreTitle text="Education" />
              <div className="border-b border-primary/10"></div>
              <div className="flex flex-col gap-1">
                {post.education.map((ed, index) => {
                  return (
                    <div key={index} className="flex gap-4 items-center">
                      <div className="w-2 h-2 bg-accent rotate-20"></div>
                      <div className="capitalize font-medium text-primary">
                        {ed}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-span-6 lg:col-span-4">
          <div className="pt-4 pb-8 flex flex-col gap-4 rounded overflow-hidden shadow-lg bg-white">
            {/* Title */}
            <div className="px-12 flex flex-col gap-1">
              <motion.div
                variants={fadeIn('left', 0.2)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="h3">{post.name}</h2>
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.4)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-lg font-medium text-primary/80">
                  {post.position}
                </p>
              </motion.div>
              {post.linkedin && (
                <motion.div
                  variants={fadeIn('left', 0.6)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link
                    href={post.linkedin}
                    className="w-8 h-8 flex items-center justify-center text-white bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <RiLinkedinFill />
                    <span className="sr-only">Visit page</span>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Body */}
            <div className="px-12">
              <motion.div
                variants={fadeIn('left', 0.2)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mt-4 mb-8 w-full flex flex-col gap-4">
                  <PortableText value={post.bio} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
