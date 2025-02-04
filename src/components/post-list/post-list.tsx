import { Post } from "@/api";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => (
  <section>
    {posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    ))}
  </section>
);
