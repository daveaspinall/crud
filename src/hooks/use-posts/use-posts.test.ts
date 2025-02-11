import { postBuilder } from "@/utils/testing/mock-builder";
import { removePostFromData } from "./use-posts";
import { QueryClient } from "@tanstack/react-query";

describe("removePostFromData", () => {
  it("should remove a specific post from the post data", () => {
    const mockSetQueryData = vi.fn();

    const mockPostData = postBuilder.buildList(4);
    const mockQueryClient = {
      getQueryData: () => mockPostData,
      setQueryData: mockSetQueryData,
    };

    const postIdBeingDeleted = mockPostData[1].id;
    const expectedData = [...mockPostData].filter(
      (item) => item.id !== postIdBeingDeleted,
    );

    removePostFromData(
      postIdBeingDeleted,
      mockQueryClient as unknown as QueryClient,
    );

    expect(mockSetQueryData).toHaveBeenCalledWith(["posts"], expectedData);
  });
});
