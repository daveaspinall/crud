import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

import { queryClient } from "@/lib/query-client";
import { deletePost, fetchPosts, filterPostsByTitle, PostType } from "@/api";
import { useCallback } from "react";

export const removePostFromData = (id: number, queryClient: QueryClient) => {
  const data: PostType[] = queryClient.getQueryData(["posts"]) || [];
  const updatedData = data.filter((item) => item.id !== id);

  queryClient.setQueryData(["posts"], updatedData);
};

export const usePosts = () => {
  const getPostsQuery = useCallback(() => {
    return useQuery({
      queryKey: ["posts"],
      queryFn: () => fetchPosts(0, 100),
    });
  }, []);

  const filterPostsMutation = useCallback(() => {
    return useMutation({
      mutationFn: (values: FieldValues) => filterPostsByTitle(values.query),
      onSuccess: (data) => queryClient.setQueryData(["posts"], data),
    });
  }, []);

  const deletePostMutation = useCallback((post: PostType) => {
    return useMutation({
      mutationFn: () => deletePost(post.id),
      onSuccess: () => removePostFromData(post.id, queryClient),
    });
  }, []);

  return {
    queryClient,
    getPostsQuery,
    filterPostsMutation,
    deletePostMutation,
  };
};
