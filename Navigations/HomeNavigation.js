import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { signOut } from "../actions/authActions";

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
          title: "Home",
        }}
      />
      <Tab.Screen
        name='Explorestack'
        component={exploreStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='search' size={size} color={color} />
          ),
          title: "Explore",
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
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(signOut());
  };
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeTintColor: "red" }}
      initialRouteName='Home'
      drawerContent={(props) => (
        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}></View>
            <View style={{ flex: 1, marginTop: 10 }}>
              <DrawerItemList {...props} />
            </View>
            <View style={{ marginVertical: 20, justifyContent: "center" }}>
              <DrawerItem
                label='Log Out'
                onPress={logoutHandler}
                icon={() => (
                  <Ionicons name='settings' size={24} color='black' />
                )}
              />
            </View>
          </View>
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name='Home' component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
