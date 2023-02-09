import React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

const Searchbar = () => {
  const searchFilterFunction = (text) => {
    console.log(text);
  };
  return (
    <Text>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction("")}
        placeholder="Type Here..."
        value="type"
      />
    </Text>
  );
};

export default Searchbar;
