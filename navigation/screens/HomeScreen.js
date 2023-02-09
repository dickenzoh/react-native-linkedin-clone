import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
//import { db } from "../config/firebase";

export default function Feed() {
  //const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     db.collection("posts")
  //       .orderBy("timestamp", "desc")
  //       .onSnapshot((snapshot) => {
  //         var posts = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           post: doc.data(),
  //         }));
  //         setPosts(posts);
  //       });
  //   }, []);

  const Posts = [
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: [
        "https://mui.com/static/images/avatar/2.jpg",
        "https://mui.com/static/images/avatar/2.jpg",
        "https://mui.com/static/images/avatar/2.jpg",
      ],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
    {
      name: "tagged",
      title: "tagged",
      description: "tagged",
      likes: "5",
      profileImage: "https://mui.com/static/images/avatar/2.jpg",
      images: ["https://mui.com/static/images/avatar/2.jpg"],
      id: 15,
    },
  ];
  //setPosts(Posts);
  console.log(Posts);
  //   ({
  //     post: { name, title, description, likes, profileImage, images },
  //     id,
  //   }) => (

  return (
    <Screen>
      <ScrollView>
        {Posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            name={post.name}
            title={post.title}
            description={post.description}
            profileImage={post.profileImage}
            images={post.images}
            likes={post.likes}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
