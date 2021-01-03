import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

const Screen = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? "always" : "never";

  return (
    <ScrollView
      scrollEnabled={!isSearchFocused}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      style={styles.container}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});

export default Screen;
