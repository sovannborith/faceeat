import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
/* import { StyleSheet, Text, View } from "react-native"; */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomDrawer from "./src/navigation/CustomDrawer";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
