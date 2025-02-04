import { QueryClientProvider } from "@tanstack/react-query";

import { PostContainer } from "./components/post-container/post-container";
import { SearchForm } from "./components/search-form/search-form";
import { queryClient } from "./lib/query-client";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm />
      <PostContainer />
    </QueryClientProvider>
  );
};

export default App;
