import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PostListContainer } from "./components/post-list/post-list.container";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostListContainer />
    </QueryClientProvider>
  );
};

export default App;
