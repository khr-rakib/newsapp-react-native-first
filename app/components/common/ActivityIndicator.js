import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
