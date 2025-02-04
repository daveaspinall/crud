import { deletePost, PostType } from "@/api";
import { Post } from "./post";
import { queryClient } from "@/lib/query-client";
import { useMutation } from "@tanstack/react-query";

interface PostContainerProps {
  post: PostType;
}

export const PostContainer = ({ post }: PostContainerProps) => {
  const { mutate } = useMutation({
    mutationFn: () => deletePost(post.id),
    onSuccess: () => removePostFromData(post.id),
  });

  const removePostFromData = (id: number) => {
    const data: PostType[] = queryClient.getQueryData(["posts"]) || [];
    const updatedData = data.filter((item) => item.id !== id);

    queryClient.setQueryData(["posts"], updatedData);
  };

  return <Post post={post} handleClick={mutate} />;
};
