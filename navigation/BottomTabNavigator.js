import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NetworkScreen from "./screens/NetworkScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PostsScreen from "./screens/PostsScreen";
import NotificationScreen from "./screens/NotificationsScreen";
import Topbar from "../components/Topbar";
import { TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Searchbar from "../components/Searchbar";
import CreatePost from "./screens/CreatePost";
import DrawerNavigator from "../components/Drawer";

//Screen names
const homeName = "Home";
const networkName = "My Network";
const postName = "Post";
const notificationsName = "Notifications";
const jobsName = "Jobs";
const createPostName = "CreatePost";

const Tab = createBottomTabNavigator();

const searchBar = () => {
  return <TextInput />;
};

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === networkName) {
            iconName = focused ? "people" : "people-outline";
          } else if (rn === postName) {
            iconName = focused ? "add" : "add-outline";
          } else if (rn === postName) {
            iconName = focused ? "add-circle-sharp" : "add-circle-outline";
          } else if (rn === notificationsName) {
            iconName = focused
              ? "md-notifications"
              : "md-notifications-outline";
          } else if (rn === jobsName) {
            iconName = focused ? "bag-handle" : "bag-handle-sharp";
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
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleContainerStyle: {
            marginLeft: 45,
          },
          headerTitle: () => <Searchbar />,
          headerLeft: () => <Topbar />,
          headerRight: () => <Topbar />,
        })}
      />
      <Tab.Screen
        name={networkName}
        component={NetworkScreen}
        options={{ headerTitle: () => <Topbar /> }}
      />
      <Tab.Screen name={postName} component={CreatePost} />
      <Tab.Screen name={notificationsName} component={NotificationScreen} />
      <Tab.Screen
        name={jobsName}
        component={SettingsScreen}
        options={{ title: "My profile" }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
