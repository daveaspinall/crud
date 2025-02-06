import { usePosts } from "@/hooks/use-posts";
import { Error } from "@/components/atoms/error/error";
import { PostList } from "./post-list";

export const PostListContainer = () => {
  const { getPostsQuery } = usePosts();
  const { data, isLoading, isError, isLoadingError } = getPostsQuery();

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError || isLoadingError) {
    return <Error variant="network" />;
  }

  if (data?.length === 0) {
    return <Error variant="posts" />;
  }

  return <PostList posts={data} />;
};
