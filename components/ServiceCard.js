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

const ServiceCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/exercise.jpeg")}
          style={styles.image}
        >
          <View
            style={{
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              paddingHorizontal: 10,
              flexDirection: "row",
            }}
          >
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
      <View style={{ flex: 1 }}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>{props.title}</Text>
          <Text>${props.price}</Text>
          <Text>{`Duration - ${props.duration} mins`}</Text>

          <View style={styles.owner}>
            <Avatar.Image
              size={24}
              source={require("../assets/exercise.jpeg")}
              style={styles.avatar}
            />
            <Text>{props.userName}</Text>
            <Image
              source={require("../assets/exercise.jpeg")}
              style={styles.countryLogo}
            />
          </View>
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

  imageContainer: {
    height: "60%",
    // borderWidth: 1,
  },

  ratingText: {
    color: "white",
    marginLeft: 10,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
