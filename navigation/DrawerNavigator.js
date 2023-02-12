import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyRewardsStackNavigator from "./stack-navigators/MyRewardsStackNavigator";
import LocationsStackNavigator from "./stack-navigators/LocationsStackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-elements";

import BottomTabNavigator from "./BottomTabNavigator";
import { Avatar } from "react-native-elements";
import GroupsScreen from "./screens/GroupsScreen";
import Events from "./screens/Events";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = (props) => {
    return (
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            height: 200,
            justifyContent: "space-evenly",
            alignItems: "center",
            top: -5,
          }}
        >
          <Image
            source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
            style={{
              borderRadius: 28,
              width: "20%",
              height: "30%",
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "#000" }}>Kinoti Dickens</Text>
            <Text style={{ color: "#000" }}>View Profile</Text>
          </View>
          <Divider height={5} color="#000" />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
        },
      }}
      drawerContent={DrawerHeaderContent}
    >
      <Drawer.Screen
        name={"Groups"}
        component={GroupsScreen}
        options={{
          drawerLabel: "Groups",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="firewire" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Events"}
        component={Events}
        options={{
          drawerLabel: "Events",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="location-enter"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={"Settings"}
        component={SettingsScreen}
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="setting" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});

export default DrawerNavigator;
