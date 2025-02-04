import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchForm } from "./search-form";

const mockMutate = vi.fn();

vi.mock("@tanstack/react-query", async () => {
  const originalModule = await vi.importActual("@tanstack/react-query");

  return {
    ...originalModule,
    useMutation: () => ({
      mutate: mockMutate,
    }),
  };
});

describe("SearchForm component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should trigger the filter posts mutation on change", () => {
    const expectedInput = "abc";

    render(<SearchForm />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: expectedInput } });

    expect(mockMutate).toHaveBeenCalledTimes(1);
    expect(mockMutate).toHaveBeenCalledWith({
      query: expectedInput,
    });
  });

  it("should trigger the filter posts mutation on submit", async () => {
    render(<SearchForm />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "{enter}");

    expect(mockMutate).toHaveBeenCalledTimes(1);
  });
});
