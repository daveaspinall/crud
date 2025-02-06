import { postBuilder, MockIntersectionObserver } from "@/utils/testing";
import { render, screen } from "@testing-library/react";
import { Post } from "./post";

describe("Post component", () => {
  const mockPost = postBuilder.build();
  const mockHandleClick = vi.fn();

  beforeEach(() => {
    vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);
  });

  it("should render the post correctly", () => {
    render(<Post post={mockPost} handleClick={mockHandleClick} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });

  it("should call handleClick when the remove button is clicked", () => {
    render(<Post post={mockPost} handleClick={mockHandleClick} />);

    screen.getByRole("button").click();

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
