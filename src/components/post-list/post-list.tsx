import { PostType } from "@/api";
import { PostContainer } from "../post/post.container";

import * as styles from "./post-list.module.css";

interface PostListProps {
  posts: PostType[];
}

export const PostList = ({ posts }: PostListProps) => (
  <ul className={styles.list} aria-label="List of posts">
    {posts.map((post) => (
      <li className={styles.item}>
        <PostContainer key={post.id} post={post} />
      </li>
    ))}
  </ul>
);
