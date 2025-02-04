import { usePosts } from "@/hooks/use-posts";
import { PostList } from "./post-list";

export const PostListContainer = () => {
  const { data, isLoading } = usePosts({ limit: 10 });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <PostList posts={data} />;
};
