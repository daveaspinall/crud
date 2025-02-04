import { render, screen } from "@testing-library/react";

import { PostList } from "./post-list";
import { postBuilder } from "@/utils/testing/mock-builder";

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
