import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Avatar } from "react-native-paper";

const ServiceCard = (props) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/exercise.jpeg")} />
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{props.title}</Text>
        <Text>$100</Text>
        <Text>Duration - 2hrs</Text>

        <View style={styles.owner}>
          <Avatar.Image
            size={24}
            source={require("../assets/exercise.jpeg")}
            style={styles.avatar}
          />
          <Text>Name</Text>
          <Image
            source={require("../assets/exercise.jpeg")}
            style={styles.countryLogo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // marginVertical: 5,
    // width: "100%",

    // flexDirection: "row",
    height: 250,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },

  image: {
    width: "100%",
    height: "60%",
  },

  innerContainer: {
    marginHorizontal: 5,
  },

  heading: {
    fontWeight: "bold",
  },

  owner: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    marginHorizontal: 5,
  },

  countryLogo: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
});

export default ServiceCard;
