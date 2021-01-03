import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import newsApi from "../../api/newsApi";
import { useNavigation } from "@react-navigation/native";

const VerticalCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const res = await newsApi.getByCategory(category);
    navigation.navigate("NewsList", res);
  };

  if (item.type === "viewMore") {
    return <ViewMore onPress={() => handleViewMore(item.category)} />;
  }
  return <FlatCard item={item} onPress={onPress} />;
};

export default VerticalCard;

const styles = StyleSheet.create({});
