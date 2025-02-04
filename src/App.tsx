import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/query-client";
import { SearchForm } from "./components/search-form/search-form";
import { PostListContainer } from "./components/post-list/post-list.container";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm />
      <PostListContainer />
    </QueryClientProvider>
  );
};

export default App;
