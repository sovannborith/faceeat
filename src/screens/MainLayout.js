import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

import { useDrawerStatus } from "@react-navigation/drawer";

import { COLORS } from "../constants";

const MainLayout = () => {
  const isDrawerOpen = useDrawerStatus();

  //if (progress>0) isDrawerOpen =
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar style={isDrawerOpen == "open" ? "light" : "dark"} />
      <Text>Main Layout</Text>
    </Animated.View>
  );
};

export default MainLayout;
