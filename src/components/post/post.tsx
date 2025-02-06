import { motion } from "framer-motion";
import { PostType } from "@/api";
import { Button } from "@/components/button/button";

import Delete from "./delete.svg?react";
import * as styles from "./post.module.css";

interface PostProps {
  post: PostType;
  handleClick: () => void;
}

const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
  viewport: { once: true },
};

export const Post = ({ post, handleClick }: PostProps) => (
  <motion.article
    className={styles.post}
    aria-labelledby={`post-${post.id}-heading`}
    {...motionProps}
  >
    <div className={styles.body}>
      <h2 id={`post-${post.id}-heading`} className={styles.title}>
        {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
    <Button className={styles.button} onClick={handleClick}>
      <Delete aria-hidden /> <span aria-label="Remove this post">Remove</span>
    </Button>
  </motion.article>
);
