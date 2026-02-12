'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { Leadership } from '@/lib/types';
import Button from './Button';
import PreTitle from './PreTitle';

type Props = {
  posts: Leadership[];
};

const ListLeadershipTemplate = ({ posts }: Props) => {
  return (
    <div className="container mt-6">
      <PreTitle text="Leadership" />
      <div className="border-b border-primary/10"></div>
      <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] w-full">
        {posts.map((post, i) => (
          <motion.div
            key={post._id}
            variants={fadeIn('down', 0.2 * (i + 1))}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white">
              {/* Image */}
              <div className="w-full h-120 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.name}
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover rounded"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Text */}
              <div className="px-6 pt-4 pb-6 flex flex-col gap-6 flex-grow">
                <div className="relative group">
                  {' '}
                  <h2 className="h3 line-clamp-1">{post.name}</h2>{' '}
                  <span className="absolute left-0 top-full mt-1 hidden group-hover:block whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded shadow">
                    {' '}
                    {post.name}{' '}
                  </span>{' '}
                </div>
                <p className="line-clamp-2">{post.position}</p>

                <div className="mt-auto">
                  <Button
                    text="Read More"
                    link={`/about/leadership/${post.slug}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListLeadershipTemplate;
