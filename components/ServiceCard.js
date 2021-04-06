import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { Avatar } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { FontAwesome } from "@expo/vector-icons";

import Badge from "./Badge";
import Colors from "../constants/colors";

const ServiceCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/exercise.jpeg")}
          style={styles.image}
        >
          <Badge style={styles.status}>Online</Badge>
          <Badge style={styles.favourite}>
            <FontAwesome name='heart-o' color='red' size={18} />
          </Badge>
          <View style={styles.ratingContainer}>
            <AirbnbRating
              defaultRating={props.rating}
              size={15}
              isDisabled
              showRating={false}
              starContainerStyle={{ alignItems: "flex-start" }}
            />
            <Text style={styles.ratingText}>{`${
              Math.round(props.rating * 100) / 100
            } (${props.ratingCount} reviews)`}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{props.title}</Text>
          <Badge style={styles.proBatch}>PRO</Badge>
        </View>
        <Text style={styles.price}>${props.price}</Text>
        <Text>{`Duration - ${props.duration} mins`}</Text>

        <View style={styles.owner}>
          <Avatar.Image
            size={24}
            source={require("../assets/exercise.jpeg")}
            style={styles.avatar}
          />
          <Text numberOfLines={1}>{props.userName}</Text>
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

  imageContainer: {
    height: "60%",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  ratingContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    paddingHorizontal: 10,
    flexDirection: "row",
  },

  status: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: 10,
    color: Colors.green,
    backgroundColor: "#fff",
    elevation: 5,
  },

  favourite: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
    color: Colors.green,
    backgroundColor: "#fff",
    elevation: 5,
  },

  ratingText: {
    color: Colors.white,
    marginLeft: 10,
  },

  innerContainer: {
    marginHorizontal: 5,
  },

  headingContainer: {
    flexDirection: "row",
    marginTop: 5,
  },

  heading: {
    fontWeight: "bold",
  },

  proBatch: {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 5,
    backgroundColor: Colors.darkBlue,
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

  price: {
    color: Colors.gray,
  },
});

export default ServiceCard;
