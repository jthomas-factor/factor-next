'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { Post } from '@/lib/types';
import Button from './Button';

type Props = {
  title: string;
  posts: Post[];
};

const PostListTemplate = ({ title, posts }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] w-full">
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
            <div className="relative w-full h-[280px] shrink-0">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>

            {/* Text */}
            <div className="px-6 pt-4 pb-6 flex flex-col gap-6 flex-grow">
              <div className="relative group">
                <h3 className="h3">{post.title}</h3>
                <span className="absolute left-0 top-full mt-1 hidden group-hover:block whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded shadow">
                  {post.title}
                </span>
              </div>
              <p className="line-clamp-2 mt-auto">{post.subtitle}</p>

              <div className="mt-auto">
                <Button text="Read More" link={`/${title}/${post.slug}`} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PostListTemplate;
