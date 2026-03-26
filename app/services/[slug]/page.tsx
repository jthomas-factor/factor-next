import React from 'react';
import {
  getIndustriesByTitles,
  getProjectsByTitle,
  serviceBySlugQuery,
} from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Post } from '@/lib/types';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { isEnabled: isDraftMode } = await draftMode();

  const post = await client.withConfig({
    perspective: isDraftMode ? 'drafts' : 'published',
    useCdn: !isDraftMode,
    token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined,
  }).fetch<Post>(serviceBySlugQuery, {
    slug,
  });

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.summary,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.summary,
      images:
        post.seo?.imageUrl
          ? [{ url: post.seo.imageUrl }]
          : post.imageUrl
            ? [{ url: post.imageUrl }]
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

  const post = await client.fetch<Post>(serviceBySlugQuery, {
    slug,
  });

  const relatedProjects = await getProjectsByTitle(post.title);
  const relatedIndustries = await getIndustriesByTitles(post.industries);

  return (
    <DetailPageTemplate
      title="industries"
      post={post}
      relatedProjects={relatedProjects}
      relatedIndustries={relatedIndustries}
    />
  );
};

export default page;
