import React from "react";
import { View, Text } from "react-native";

import { FONTS, COLORS } from "../constants";

const Header = ({ constainerStyle, title, leftComponent, rightComponent }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...constainerStyle,
      }}
    >
      {/* Left */}
      {leftComponent}
      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ ...FONTS.h3, fontWeight: "bold", color: COLORS.primary }}
        >
          {title}
        </Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
