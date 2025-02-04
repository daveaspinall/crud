import { postBuilder } from "@/utils/testing/mock-builder";
import { Post } from "./post";
import { render, screen } from "@testing-library/react";

describe("Post component", () => {
  const mockPost = postBuilder.build();

  it("should render the post correctly", () => {
    render(<Post post={mockPost} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });
});
