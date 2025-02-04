import { PostType } from "@/api";
import { usePosts } from "@/hooks/use-posts";

import { Post } from "./post";

interface PostContainerProps {
  post: PostType;
}

export const PostContainer = ({ post }: PostContainerProps) => {
  const { deletePostMutation } = usePosts();
  const { mutate } = deletePostMutation(post);

  return <Post post={post} handleClick={mutate} />;
};
