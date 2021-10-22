import React from "react";
import { View, Text } from "react-native";

import Animated from "react-native-reanimated";

import { COLORS } from "../constants";

const MainLayout = () => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Hello</Text>
    </Animated.View>
  );
};

export default MainLayout;
