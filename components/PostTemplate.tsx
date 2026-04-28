'use client';
import React from 'react';
import { Post } from '@/lib/types';
import Image from 'next/image';
import { fadeIn } from '@/lib/variants';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import PreTitle from '@/components/PreTitle';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Props = {
  post: Post;
};

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const PostTemplate = ({ post }: Props) => {
  return (
    <div className="pt-4 pb-8 flex flex-col gap-4 rounded overflow-hidden shadow-lg bg-white">
      {/* Title */}
      <div className="px-12">
        <motion.div
          variants={fadeIn('left', 0.2)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="h3">{post.title}</h2>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-lg font-medium text-primary/80">{post.subtitle}</p>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        variants={fadeIn('up', 0.6)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={700}
            className="w-full h-auto object-cover rounded"
            priority
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Body */}
      <div className="px-12">
        <motion.div
          variants={fadeIn('left', 0.2)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mt-4 mb-8 w-full flex flex-col gap-4">
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="my-6 w-full">
                      <Image
                        src={urlFor(value).url()}
                        alt={value.alt || ''}
                        width={1200}
                        height={700}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                  ),
                  imageWithText: ({ value }) => (
                    <div className={`flex gap-6 items-center my-6 ${value.imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="w-1/3 shrink-0">
                        <Image
                          src={urlFor(value.image).url()}
                          alt={value.text || ''}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover rounded"
                        />
                      </div>
                      <p className="text-base leading-relaxed">{value.text}</p>
                    </div>
                  ),
                },
              }}
            />
          </div>
        </motion.div>

        {post.tools && (
          <>
            {/* Tools */}
            <motion.div
              variants={fadeIn('left', 0.1)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              <PreTitle text="Tools and Techniques" />
            </motion.div>

            <div className="border-b border-primary/10 mb-4"></div>

            <div className="grid grid-cols-1 gap-2">
              {post.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  variants={fadeIn('up', 0.1 + i)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="rounded overflow-hidden shadow-lg bg-primary text-white container py-6 px-8 flex flex-col gap-2">
                    <p className="font-bold">{tool.name}</p>
                    <p>{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostTemplate;
