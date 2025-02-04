import { postBuilder } from "@/utils/testing/mock-builder";
import {
  deletePost,
  fetchPosts,
  filterPostsByTitle,
  JSONPLACEHOLDER_URL,
} from ".";

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
      expect(fetch).toHaveBeenCalledWith(
        `${JSONPLACEHOLDER_URL}/posts?_start=0&_end=10`,
      );
    });

    it("handles a fetch failure", async () => {
      global.fetch = vi.fn(() => Promise.reject("API is down"));

      await expect(fetchPosts()).rejects.toEqual("API is down");
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("filterPostsByTitle", () => {
    const mockPostList = postBuilder.buildList(5);

    it("should call the jsonplaceholder endpoint with the query", async () => {
      const expectedQuery = "abc";

      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockPostList),
        } as Response),
      );

      await expect(filterPostsByTitle(expectedQuery)).resolves.toEqual(
        mockPostList,
      );

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `${JSONPLACEHOLDER_URL}/posts?title_like=${expectedQuery}`,
      );
    });
  });

  describe("deletePost", () => {
    const mockPostList = postBuilder.buildList(5);

    it("should call the jsonplaceholder endpoint with the query", async () => {
      const expectedId = 1;

      global.fetch = vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockPostList),
        } as Response),
      );

      await expect(deletePost(1)).resolves.toEqual(mockPostList);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `${JSONPLACEHOLDER_URL}/posts/${expectedId}`,
        {
          method: "DELETE",
        },
      );
    });
  });
});
