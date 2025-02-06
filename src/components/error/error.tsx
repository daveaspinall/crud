import * as styles from "./error.module.css";

interface ErrorProps {
  variant: "posts" | "network";
}

export const Error = ({ variant = "posts" }: ErrorProps) => (
  <div className={styles.error}>
    {variant === "posts" ? (
      <>
        <span className={styles.emoji} aria-label="Oh no!">
          (&gt;_&lt;)
        </span>
        <span className={styles.title}>Can't find any posts</span>
        <span>Clear your search and try again</span>
      </>
    ) : (
      <>
        <span className={styles.emoji} aria-label="Uh oh!">
          &#92;(^Д^)&#47;
        </span>
        <span className={styles.title}>We've hit a problem</span>
        <span>Please try again later</span>
      </>
    )}
  </div>
);
