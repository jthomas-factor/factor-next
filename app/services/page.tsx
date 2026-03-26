import { client } from '@/sanity/lib/client';
import { servicesQuery } from '@/lib/queries';
import { Post } from '@/lib/types';
import ListPageTemplate from '@/components/ListPageTemplate';
import { draftMode } from 'next/headers';

const Services = async () => {
  const { isEnabled: isDraftMode } = await draftMode();

  const posts = await client.withConfig({
    perspective: isDraftMode ? 'drafts' : 'published',
    useCdn: !isDraftMode,
    token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined,
  }).fetch<Post[]>(servicesQuery);

  const title = 'services';

  return <ListPageTemplate title={title} posts={posts} />;
};

export default Services;
