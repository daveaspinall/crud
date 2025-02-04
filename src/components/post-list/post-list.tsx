import { PostType } from "@/api";
import { PostContainer } from "../post/post.container";

interface PostListProps {
  posts: PostType[];
}

export const PostList = ({ posts }: PostListProps) => (
  <section>
    {posts.map((post) => (
      <PostContainer key={post.id} post={post} />
    ))}
  </section>
);
