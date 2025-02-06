import { render, screen } from "@testing-library/react";

import { PostListContainer } from "./post-list.container";
import { postBuilder } from "@/utils/testing/mock-builder";
import { PostType } from "@/api";

let mockPosts: PostType[];
let isLoading: boolean;
let isError: boolean;
let isLoadingError: boolean;

vi.mock("@tanstack/react-query", async () => {
  const originalModule = await vi.importActual("@tanstack/react-query");

  return {
    ...originalModule,
    useQuery: () => ({
      data: mockPosts,
      isLoading,
      isError,
      isLoadingError,
    }),
    useMutation: () => ({
      mutate: vi.fn(),
    }),
  };
});

describe("PostListContainer component", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockPosts = postBuilder.buildList(10);
    isLoading = false;
    isError = false;
    isLoadingError = false;
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

  it(`should display "can't find any posts..." when no posts are returned in the data`, async () => {
    mockPosts = [];

    render(<PostListContainer />);

    expect(await screen.findByText("Can't find any posts")).toBeInTheDocument();
  });

  it(`should display "we've hit a problem..." when there is an issue fetching the data`, async () => {
    isError = true;
    isLoadingError = true;

    render(<PostListContainer />);

    expect(await screen.findByText("We've hit a problem")).toBeInTheDocument();
  });
});
