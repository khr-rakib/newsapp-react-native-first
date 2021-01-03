import React, { useState } from "react";

import useNews from "../../hooks/useNews";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeaturedNews from "../FeaturedNews";
import BreakingNews from "../BreakingNews";
import EntertainmentNews from "../EntertainmentNews";
import PoliticalNews from "../PoliticalNews";
import TechNews from "../TechNews";
import ActivityIndicator from "../common/ActivityIndicator";

const Home = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading,
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setIsSearchFocused={setIsSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

export default Home;
