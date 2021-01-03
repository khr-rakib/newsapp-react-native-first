import React from "react";
import BlockCard from "./cards/BlockCard";

import { useNavigation } from "@react-navigation/native";

const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();

  return (
    <BlockCard
      item={item}
      onPress={() => navigation.navigate("NewsDetail", { item })}
      style={{ marginVertical: 15 }}
    />
  );
};

export default FeaturedNews;
