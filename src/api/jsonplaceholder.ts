export const JSONPLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (start = 0, end = 10) => {
  const response = await fetch(
    `${JSONPLACEHOLDER_URL}/posts?_start=${start}&_end=${end}`,
  );
  return await response.json();
};

export const filterPostsByTitle = async (query: string) => {
  const response = await fetch(
    `${JSONPLACEHOLDER_URL}/posts?title_like=${query}`,
  );
  return await response.json();
};

export const deletePost = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    },
  );
  return await response.json();
};
