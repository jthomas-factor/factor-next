import { client } from '@/sanity/lib/client';
import { leadershipQuery } from '@/lib/queries';
import { Leadership } from '@/lib/types';
import ListLeadershipTemplate from '@/components/ListLeadershipTemplate';
import { draftMode } from 'next/headers';

const LeadershipPage = async () => {
  const { isEnabled: isDraftMode } = await draftMode();

  const posts = await client
    .withConfig({
      perspective: isDraftMode ? 'drafts' : 'published',
      useCdn: !isDraftMode,
      token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined,
    })
    .fetch<Leadership[]>(leadershipQuery);

  return <ListLeadershipTemplate posts={posts} />;
};

export default LeadershipPage;
