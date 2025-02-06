import { useForm } from "react-hook-form";
import { usePosts } from "@/hooks/use-posts";

import Search from "./search.svg?react";
import * as styles from "./search-form.module.css";

export const SearchForm = () => {
  const { register, handleSubmit, getValues } = useForm();

  const { filterPostsMutation } = usePosts();
  const { mutate } = filterPostsMutation();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((values) => mutate(values))}
      data-testid="search-form"
    >
      <legend className={styles.legend}>Search posts by title</legend>
      <label className={styles.label} htmlFor="query">
        Search posts
      </label>
      <Search className={styles.icon} aria-hidden />
      <input
        id="query"
        className={styles.input}
        placeholder="Search posts by title"
        {...register("query", {
          onChange: () => mutate(getValues()),
        })}
      />
    </form>
  );
};
