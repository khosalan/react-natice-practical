import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import AppNavigation from "./Navigations/AppNavigation";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
