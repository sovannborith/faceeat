import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
/* import { StyleSheet, Text, View } from "react-native"; */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomDrawer from "./src/navigation/CustomDrawer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./src/stores/rootReducer";

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
