import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExpertsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ServicesScreen from "../screens/ServicesScreen";
import HeaderButton from "../components/HeaderButton";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopNavigator = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const exploreNavigator = () => {
  return (
    <TopNavigator.Navigator>
      <TopNavigator.Screen
        name='Experts'
        options={{ tabBarLabel: "Experts" }}
        component={ExploreScreen}
      />
      <TopNavigator.Screen
        name='Services'
        options={{ tabBarLabel: "Services" }}
        component={ServicesScreen}
      />
    </TopNavigator.Navigator>
  );
};

const homeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

const exploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Explore'
        component={exploreNavigator}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Homestack'
        component={homeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Explorestack'
        component={exploreStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user-circle-o' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeDrawer' component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
