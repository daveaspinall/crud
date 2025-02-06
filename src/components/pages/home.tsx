import classNames from "classnames";

import { SearchForm } from "@/components/organisms/search-form/search-form";
import { PostListContainer } from "@/components/organisms/post-list/post-list.container";

import * as styles from "./home.module.css";

export const Homepage = () => (
  <>
    <header className={classNames(styles.row, styles.header)}>
      <div className={styles.container}>
        <SearchForm />
      </div>
    </header>
    <main className={styles.row}>
      <div className={styles.container}>
        <PostListContainer />
      </div>
    </main>
  </>
);
