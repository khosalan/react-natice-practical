import React from "react";
import { View } from "react-native";
import { Badge } from "react-native-paper";

const CustomBadge = (props) => {
  return <Badge {...props}>{props.children}</Badge>;
};

export default CustomBadge;
