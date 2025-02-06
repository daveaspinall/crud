import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

import { Homepage } from "./pages/home";
import "./App.css";

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Homepage />
  </QueryClientProvider>
);
