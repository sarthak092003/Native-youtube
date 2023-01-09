import { Image, StyleSheet, View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../constants/colors";
import { useEffect, useState } from "react";

const VideoShowcase = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContanier}>
        <Image
          source={{uri:item.thumbnail_url}}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <MaterialCommunityIcons
          name="face-man-profile"
          size={30}
          color={colors.ofWhite}
          style  ={styles.profile}
        />
        <View style = {styles.tittleContainer}>
        <Text
          style={styles.videoTittleStyles}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.title}
        </Text>
        <Text style = {styles.videoInfo}>
              {item.channel.name} . 1k views . 19 minutes ago
        </Text>
        </View>
        <SimpleLineIcons
          name="options-vertical"
          size={12}
          color={colors.ofWhite}
          style = {styles.threeDots}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContanier: {
    flex: 5,
    backgroundColor: "black",
    justifyContent: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: 400,
    height: 200,
  },
  bottomContainer: {
    paddingHorizontal: 5,
    flex: 1,
    paddingBottom:15,
    backgroundColor: 'black',
    alignContent: "center",
    flexDirection: "row",

  },
  profile:{
    paddingRight:0,
  },
  videoTittleStyles: {
    fontSize: 17,
    letterSpacing: 0.2,
    color: colors.ofWhite,
    paddingTop: 5,
    paddingLeft: 6,
    width: "100%",
    fontWeight:'800',
    lineHeight: 18,
  },
  threeDots:{
    paddingTop:10,
    paddingRight:5
  },
  tittleContainer:{
    width:"90%"

  },
  videoInfo:{
    color:colors.lightGrey,
    paddingHorizontal:5,
    fontSize:13,
    fontWeight:"400"

  }
});

export default VideoShowcase;
