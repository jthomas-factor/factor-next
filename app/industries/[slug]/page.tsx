import React from 'react';
import {
  getProjectsByTitle,
  getServicesByTitles,
  industryBySlugQuery,
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

  const post = await client.fetch<Post>(industryBySlugQuery, {
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

  const post = await client.fetch<Post>(industryBySlugQuery, {
    slug,
  });

  const relatedProjects = await getProjectsByTitle(post.title);
  const relatedServices = await getServicesByTitles(post.services);

  return (
    <DetailPageTemplate
      title="industries"
      post={post}
      relatedProjects={relatedProjects}
      relatedServices={relatedServices}
    />
  );
};

export default page;
