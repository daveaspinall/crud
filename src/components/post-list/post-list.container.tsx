import { usePosts } from "@/hooks/use-posts";
import { PostList } from "./post-list";

export const PostListContainer = () => {
  const { getPostsQuery } = usePosts();
  const { data, isLoading } = getPostsQuery();

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  return <PostList posts={data} />;
};
