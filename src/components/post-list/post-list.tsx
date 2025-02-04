import { Post as PostType } from "@/api";
import { Post } from "../post/post";

interface PostListProps {
  posts: PostType[];
}

export const PostList = ({ posts }: PostListProps) => (
  <section>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </section>
);
