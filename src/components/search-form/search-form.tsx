import { filterPostsByTitle } from "@/api";
import { queryClient } from "@/lib/query-client";
import { useMutation } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";

export const SearchForm = () => {
  const { register, handleSubmit, getValues } = useForm();

  const { mutate } = useMutation({
    mutationFn: (values: FieldValues) => filterPostsByTitle(values.query),
    onSuccess: (data) => queryClient.setQueryData(["posts"], data),
  });

  return (
    <form onSubmit={handleSubmit((values) => mutate(values))}>
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
