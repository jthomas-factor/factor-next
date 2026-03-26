import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/lib/queries';
import { Post } from '@/lib/types';
import ListPageTemplate from '@/components/ListPageTemplate';
import { draftMode } from 'next/headers';

const Projects = async () => {
  const { isEnabled: isDraftMode } = await draftMode();

  const posts = await client.withConfig({
    perspective: isDraftMode ? 'drafts' : 'published',
    useCdn: !isDraftMode,
    token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined,
  }).fetch<Post[]>(projectsQuery);

  const title = 'projects';

  return <ListPageTemplate title={title} posts={posts} />;
};

export default Projects;
