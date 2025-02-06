import { render, screen } from "@testing-library/react";

import { MockIntersectionObserver, postBuilder } from "@/utils/testing";
import { PostList } from "./post-list";

vi.mock("@tanstack/react-query", async () => {
  const originalModule = await vi.importActual("@tanstack/react-query");

  return {
    ...originalModule,
    useMutation: () => ({
      mutate: vi.fn(),
    }),
  };
});

describe("PostList component", () => {
  beforeEach(() => {
    vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render a list of posts", async () => {
    const expectedLength = 7;
    const mockPosts = postBuilder.buildList(expectedLength);

    render(<PostList posts={mockPosts} />);

    expect(await screen.findAllByRole("article")).toHaveLength(expectedLength);
  });
});
