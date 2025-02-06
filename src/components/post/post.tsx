import { PostType } from "@/api";
import { Button } from "@/components/button/button";

import Delete from "./delete.svg?react";
import * as styles from "./post.module.css";

interface PostProps {
  post: PostType;
  handleClick: () => void;
}

export const Post = ({ post, handleClick }: PostProps) => (
  <article className={styles.post} aria-labelledby={`post-${post.id}-heading`}>
    <div className={styles.body}>
      <h2 id={`post-${post.id}-heading`} className={styles.title}>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
    <Button className={styles.button} onClick={handleClick}>
      <Delete aria-hidden /> <span aria-label="Remove this post">Remove</span>
    </Button>
  </article>
);
