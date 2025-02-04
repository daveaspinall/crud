import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api";

import { PostList } from "./post-list";

export const PostListContainer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(0, 100),
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  return <PostList posts={data} />;
};
