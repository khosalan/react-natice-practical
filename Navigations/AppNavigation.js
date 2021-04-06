import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigation from "./AuthNaviation";
import HomeNavigation from "./HomeNavigation";

const AppNavigation = () => {
  const isAuth = useSelector((state) => !!state.auth.customerAccessToken);
  console.log(isAuth);
  return (
    <NavigationContainer>
      {/* {isAuth && <HomeNavigation />}
      {!isAuth && <AuthNavigation />} */}
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
