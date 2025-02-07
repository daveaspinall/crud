import { PostType } from "@/api";
import { usePosts } from "@/hooks/use-posts";

import { Post } from "./post";
import { Error } from "@/components/atoms/error/error";

interface PostContainerProps {
  post: PostType;
}

export const PostContainer = ({ post }: PostContainerProps) => {
  const { deletePostMutation } = usePosts();
  const { mutate, isError } = deletePostMutation(post);

  return (
    <>
      {isError && <Error>Unable to delete post! (｡•́︿•̀｡)</Error>}
      <Post post={post} handleClick={mutate} />
    </>
  );
};
