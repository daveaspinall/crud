import { render, screen } from "@testing-library/react";

import { PostList } from "./post-list";
import { postBuilder } from "@/utils/testing/mock-builder";

describe("PostList component", () => {
  it("should render a list of posts", async () => {
    const expectedLength = 7;
    const mockPosts = postBuilder.buildList(expectedLength);

    render(<PostList posts={mockPosts} />);

    expect(await screen.findAllByRole("article")).toHaveLength(expectedLength);
  });
});
