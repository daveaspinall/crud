import { getPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";

export interface UsePostsProps {
  limit?: number;
}

export const usePosts = ({ limit = 10 }: UsePostsProps) => {
  return useQuery({ queryKey: ["posts"], queryFn: () => getPosts(0, limit) });
};
