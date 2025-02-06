import * as styles from "./posts-error.module.css";

export const PostsError = () => (
  <div className={styles.error}>
    <span className={styles.emoji} aria-label="Oh no!">
      (&gt;_&lt;)
    </span>
    <span className={styles.title}>Can't find any posts</span>
    <span>Clear your search and try again</span>
  </div>
);
