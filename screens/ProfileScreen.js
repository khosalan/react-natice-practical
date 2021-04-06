import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Profile</Text>
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

export default ProfileScreen;
