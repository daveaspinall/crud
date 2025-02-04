export const JSONPLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (start = 0, end = 10) => {
  const response = await fetch(
    `${JSONPLACEHOLDER_URL}/posts?_start=${start}&_end=${end}`,
  );
  return await response.json();
};
