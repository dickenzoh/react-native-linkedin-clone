import React from "react";
import { View, Text, Image } from "react-native";
import { Stack, Avatar } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";

const Topbar = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Avatar
          color="white"
          image={
            <Image
              source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 28,
                marginLeft: 5,
              }}
            />
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;
