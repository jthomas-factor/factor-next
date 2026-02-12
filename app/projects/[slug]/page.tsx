import React from 'react';
import {
  getIndustriesByTitles,
  getServicesByTitles,
  projectBySlugQuery,
} from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/types';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch<Post>(projectBySlugQuery, {
    slug,
  });

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.summary,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.summary,
      images:
        post.seo?.imageUrl ? [{ url: post.seo.imageUrl }]
        : post.imageUrl ? [{ url: post.imageUrl }]
        : [],
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: true,
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const post = await client.fetch<Post>(projectBySlugQuery, {
    slug,
  });

  const relatedServices = await getServicesByTitles(post.services);
  const relatedIndustries = await getIndustriesByTitles(post.industries);

  return (
    <DetailPageTemplate
      title="projects"
      post={post}
      relatedIndustries={relatedIndustries}
      relatedServices={relatedServices}
    />
  );
};

export default page;
