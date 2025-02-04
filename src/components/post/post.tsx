import { PostType } from "@/api";

interface PostProps {
  post: PostType;
  handleClick: () => void;
}

export const Post = ({ post, handleClick }: PostProps) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={handleClick}>Remove</button>
  </article>
);
