import apiClient from "./client";

const getAll = async () => {
  try {
    const res = await apiClient.get("/news");
    if (res.data.success) {
      return res.data.news;
    }
  } catch (error) {
    console.log("Error while getting all news", error.message);
    return [];
  }
};

const getSingle = async (id) => {
  try {
    const res = await apiClient.get(`/news/single/${id}`);
    if (res.data.success) {
      return res.data.news;
    }
  } catch (error) {
    console.log("Error while getting single news", error.message);
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;
  try {
    const res = await apiClient.get(endpoint);
    if (res.data.success) {
      return res.data.news;
    }
  } catch (error) {
    console.log("Error while getting categories news", error.message);
    return [];
  }
};

const searchPost = async (query) => {
  if (!query) {
    return {};
  }
  try {
    const result = await apiClient.post(`/news/search/${query}`);
    return result.data;
  } catch (error) {
    console.log("Error while searching - searchPost newsApi", error.message);
  }
};

export default {
  getAll,
  getSingle,
  searchPost,
  getByCategory,
};
