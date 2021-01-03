import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import Title from "../common/Title";
import Subtitle from "../common/Subtitle";

const BlockCard = ({ style, imageStyle, item, onPress }) => {
  const { title, thumbnail, desc } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image style={[styles.image, imageStyle]} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{desc}</Subtitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
