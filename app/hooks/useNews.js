import { useState, useEffect } from "react";
import newsApi from "../api/newsApi";

export default useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [techNews, setTechNews] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = [...data]
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, 5);

    if (result.length) {
      result.push({ type: "viewMore", category: category, id: category });
    }

    return result;
  };

  const filterMultipleNews = async () => {
    setLoading(true);
    const allNews = await newsApi.getAll();

    setFeaturedNews(filterFeatured(allNews));
    setTechNews(filterByCategory(allNews, "tech"));
    setPoliticalNews(filterByCategory(allNews, "political"));
    setBreakingNews(filterByCategory(allNews, "breaking-news"));
    setEntertainmentNews(filterByCategory(allNews, "entertainment"));
    setLoading(false);
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading,
  ];
};
