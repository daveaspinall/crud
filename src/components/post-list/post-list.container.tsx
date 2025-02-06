import { usePosts } from "@/hooks/use-posts";
import { PostList } from "./post-list";
import { PostsError } from "../posts-error/posts-error";

export const PostListContainer = () => {
  const { getPostsQuery } = usePosts();
  const { data, isLoading } = getPostsQuery();

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (data.length === 0) {
    return <PostsError />;
  }

  return <PostList posts={data} />;
};
