import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/query-client";

import { Homepage } from "@/components/pages/home";
import "./App.css";
import { PaginationProvider } from "./hooks/use-pagination/use-pagination";

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <PaginationProvider>
      <Homepage />
      <ReactQueryDevtools initialIsOpen={false} />
    </PaginationProvider>
  </QueryClientProvider>
);
