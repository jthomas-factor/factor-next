import React from 'react';
import { leadershipBySlugQuery } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { Leadership } from '@/lib/types';
import LeadershipDetailTemplate from '@/components/LeadershipDetailTemplate';
import { draftMode } from 'next/headers';

type Props = {
  params: Promise<{ slug: string }>;
};

const LeaderPage = async ({ params }: Props) => {
  const { slug } = await params;
  const { isEnabled: isDraftMode } = await draftMode();

  const post = await client
    .withConfig({
      perspective: isDraftMode ? 'drafts' : 'published',
      useCdn: !isDraftMode,
      token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined,
    })
    .fetch<Leadership>(leadershipBySlugQuery, {
      slug,
    });

  return <LeadershipDetailTemplate post={post} />;
};

export default LeaderPage;
