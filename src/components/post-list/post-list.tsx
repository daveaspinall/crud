import { PostType } from "@/api";
import { PostContainer } from "@/components/post/post.container";

import * as styles from "./post-list.module.css";

interface PostListProps {
  posts: PostType[];
}

export const PostList = ({ posts }: PostListProps) => (
  <ul className={styles.list} aria-label="List of posts">
    {posts.map((post) => (
      <li className={styles.item} key={post.id}>
        <PostContainer post={post} />
      </li>
    ))}
  </ul>
);
