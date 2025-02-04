import { postBuilder } from "@/utils/testing/mock-builder";
import { fetchPosts } from ".";

describe("jsonplaceholder", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("fetchPosts", () => {
    const mockPostList = postBuilder.buildList(5);

    it("should return a list of posts", async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockPostList),
        } as Response),
      );

      await expect(fetchPosts()).resolves.toEqual(mockPostList);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("handles a fetch failure", async () => {
      global.fetch = vi.fn(() => Promise.reject("API is down"));

      await expect(fetchPosts()).rejects.toEqual("API is down");
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
