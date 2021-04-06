import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ExpertsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Explore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExpertsScreen;
