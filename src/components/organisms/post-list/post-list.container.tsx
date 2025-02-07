import { usePosts } from "@/hooks/use-posts/use-posts";
import { Emoji } from "@/components/atoms/emoji/emoji";
import { PostList } from "./post-list";

export const PostListContainer = () => {
  const { getPostsQuery } = usePosts();
  const { data, isLoading, isError, isLoadingError } = getPostsQuery();

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError || isLoadingError) {
    return <Emoji variant="network" />;
  }

  if (data?.length === 0) {
    return <Emoji variant="posts" />;
  }

  return <PostList posts={data} />;
};
