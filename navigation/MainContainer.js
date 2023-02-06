import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NetworkScreen from "./screens/NetworkScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PostsScreen from "./screens/PostsScreen";
import NotificationScreen from "./screens/NotificationsScreen";

//Screen names
const homeName = "Home";
const networkName = "My Network";
const postName = "Post";
const notificationsName = "Notifications";
const jobsName = "Jobs";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === networkName) {
              iconName = focused ? "user" : "user";
            } else if (rn === postName) {
              iconName = focused ? "add" : "add-outline";
            } else if (rn === postName) {
              iconName = focused ? "add" : "add-outline";
            } else if (rn === notificationsName) {
              iconName = focused
                ? "md-notifications"
                : "md-notifications-outline";
            } else if (rn === jobsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={networkName} component={NetworkScreen} />
        <Tab.Screen name={postName} component={PostsScreen} />
        <Tab.Screen name={notificationsName} component={NotificationScreen} />
        <Tab.Screen name={jobsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;