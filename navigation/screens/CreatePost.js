import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";
import Screen from "../../components/Screen";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";
import DropdownComponent from "../../components/Dropdown";
import VisibleTo from "../../components/VisibleTo";

export default function CreatePost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigator = useNavigation();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the Images.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setImage(result);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handleOnPress = () => {
    if (image) {
      alert("Please remove the previosuly selected Image to add a new one");
      return;
    }
    selectImage();
  };

  const profileData = {
    name: "Kinoti Dickens",
    title: "Software Developer",
    profileImage: "https://mui.com/static/images/avatar/2.jpg",
  };

  const handlePost = async (e) => {
    if (image === null) {
      navigator.navigate("Home");
    }
  };

  return (
    <Screen style={styles.post}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://mui.com/static/images/avatar/2.jpg",
          }}
        />
        <View style={styles.desc}>
          <Text style={styles.name}>Kinoti Dickens</Text>
          <VisibleTo />
        </View>
        <Button style={styles.postButton} onPress={handlePost} title="Post" />
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="What do you want to talk about?"
        multiline={true}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <TouchableHighlight underlayColor={colors.light} onPress={handleOnPress}>
        <View style={styles.photoDiv}>
          <MaterialIcons name="photo-camera" size={24} color="gray" />
          <Text style={styles.addPhoto}>Add a photo</Text>
        </View>
      </TouchableHighlight>
      {image ? (
        <View style={styles.remove}>
          <Text style={{ textAlign: "center" }}>
            {image.uri.split("/").slice(-1)[0]}
          </Text>
          <Entypo
            onPress={() => setImage(null)}
            name="cross"
            size={24}
            color="red"
          />
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "white",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 0,
    paddingRight: 15,
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  share: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 3,
    textAlign: "center",
    width: 100,
  },
  textArea: {
    height: Dimensions.get("window").height / 2,
    fontSize: 18,
    padding: 5,
    marginTop: 20,
  },
  photoDiv: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    padding: 20,
    alignItems: "center",
  },
  addPhoto: {
    fontSize: 18,
    marginLeft: 15,
  },
  postButton: {
    marginTop: 40,
  },
  remove: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  desc: {
    flex: 1,
  },
});
