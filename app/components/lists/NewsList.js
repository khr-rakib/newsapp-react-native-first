import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import VerticalList from "../lists/VerticalList";

const NewsList = ({ route }) => {
  const data = route.params;
  const header = data[0].category.split("-").join(" ").toUpperCase();
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{header}</Text>
      </View>
      <ScrollView style={{ padding: 15 }}>
        <VerticalList data={data} />
      </ScrollView>
    </>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#4e4d4d",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});
