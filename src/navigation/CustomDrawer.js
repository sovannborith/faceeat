import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";

import { MainLayout } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";
import CustomDrawerItem from "../components/CustomDrawerItem";
const Drawer = createDrawerNavigator();

const DrawerScreenContainer = ({ children }) => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, SIZES.radius * 2],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius,
        transform: [{ scale }],
        overflow: "hidden",
      }}
    >
      {children}
    </Animated.View>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "vertical",
            alignItems: "center",
            marginLeft: SIZES.radius * 5,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              alignItems: "center",
            }}
            onPress={() => console.log("Profile")}
          >
            <Image
              source={dummyData.myProfile?.profile_image}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{ color: COLORS.white, ...FONTS.h3, fontWeight: "600" }}
            >
              {dummyData.myProfile?.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}
            >
              View your profile
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor: COLORS.lightGray1,
          }}
        ></View>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          ></View>

          <CustomDrawerItem
            label="Track Your Order Item"
            icon={icons.location}
          />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        drawerContent={(props) => {
          return (
            <CustomDrawerContent {...props} navigation={props.navigation} />
          );
        }}
        initialRoute="MainLayout"
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <DrawerScreenContainer>
              <MainLayout {...props} />
            </DrawerScreenContainer>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
