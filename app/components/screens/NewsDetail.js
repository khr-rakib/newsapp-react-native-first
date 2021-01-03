import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import newsApi from "../../api/newsApi";
import HorizontalList from "../lists/HorizontalList";
import Close from "../common/Close";
import { useNavigation } from "@react-navigation/native";
import ActivityIndicator from "../common/ActivityIndicator";

const { width, height } = Dimensions.get("window");

const NewsDetail = ({ route }) => {
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { id: postId, category: postCategory } = route.params.item;

  const fetchNews = async (id) => {
    setLoading(true);
    const result = await newsApi.getSingle(id);
    setNews(result);
    setLoading(false);
  };

  const fetchRelatedNews = async (category) => {
    setLoading(true);
    const result = await newsApi.getByCategory(category, 6);
    setRelatedNews(result.filter((item) => item.id !== postId));
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(postId);
    fetchRelatedNews(postCategory);
  }, []);

  const { title, content, thumbnail } = news;

  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.relatedNewsContainer}>
          <HorizontalList data={relatedNews} title="Related News" />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedNewsContainer: {
    padding: 10,
  },
});
