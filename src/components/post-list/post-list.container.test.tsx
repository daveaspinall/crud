import { render, screen } from "@testing-library/react";

import { PostListContainer } from "./post-list.container";
import { postBuilder } from "@/utils/testing/mock-builder";

const mockPosts = postBuilder.buildList(10);

let isLoading = false;

vi.mock("@tanstack/react-query", async () => {
  const originalModule = await vi.importActual("@tanstack/react-query");

  return {
    ...originalModule,
    useQuery: () => ({
      data: mockPosts,
      isLoading,
    }),
    useMutation: () => ({
      mutate: vi.fn(),
    }),
  };
});

describe("PostListContainer component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch posts on render", async () => {
    render(<PostListContainer />);

    expect(await screen.findAllByRole("article")).toHaveLength(10);
  });

  it(`should display "loading..." when the query is fetching the data`, async () => {
    isLoading = true;

    render(<PostListContainer />);

    expect(await screen.findByText("Loading posts...")).toBeInTheDocument();
  });
});
