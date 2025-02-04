import { useForm } from "react-hook-form";
import { usePosts } from "@/hooks/use-posts";

export const SearchForm = () => {
  const { register, handleSubmit, getValues } = useForm();

  const { filterPostsMutation } = usePosts();
  const { mutate } = filterPostsMutation();

  return (
    <form
      onSubmit={handleSubmit((values) => mutate(values))}
      data-testid="search-form"
    >
      <label htmlFor="query">Search</label>
      <input
        id="query"
        placeholder="Search by title"
        {...register("query", {
          onChange: () => mutate(getValues()),
        })}
      />
    </form>
  );
};
