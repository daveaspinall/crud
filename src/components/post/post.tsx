import { deletePost, Post as PostType } from "@/api";
import { queryClient } from "@/lib/query-client";
import { useMutation } from "@tanstack/react-query";

interface PostProps {
  post: PostType;
}

export const removePostFromData = (id: number) => {
  const data: PostType[] = queryClient.getQueryData(["posts"]) || [];
  const updatedData = data.filter((item) => item.id !== id);

  queryClient.setQueryData(["posts"], updatedData);
};

export const Post = ({ post }: PostProps) => {
  const { mutate } = useMutation({
    mutationFn: () => deletePost(post.id),
    onSuccess: () => removePostFromData(post.id),
  });

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => mutate()}>Remove</button>
    </article>
  );
};
