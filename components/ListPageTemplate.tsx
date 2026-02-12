import { Post } from '@/lib/types';
import PreTitle from './PreTitle';
import PostListTemplate from './PostListTemplate';

const ListPageTemplate = ({
  title,
  posts,
}: {
  title: string;
  posts: Post[];
}) => {
  return (
    <div className="container mx-auto pt-8 xl:pt-24">
      <PreTitle text={title} />
      <div className="border-b border-primary/10"></div>

      <div className="grid gap-2 mb-12 mt-4 w-full">
        <PostListTemplate title={title} posts={posts} />
      </div>
    </div>
  );
};

export default ListPageTemplate;
