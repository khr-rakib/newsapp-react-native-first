import React from "react";
import HorizontalList from "./lists/HorizontalList";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech News" data={data} />;
};

export default TechNews;
