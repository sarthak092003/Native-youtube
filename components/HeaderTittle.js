import { Image, StyleSheet, View, Text, ScrollView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import CloudButton from "./CloudButton";
import { useState } from "react";

const HeaderTitle = () => {

    const [activeTile,setActiveTile] = useState("Explore")
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.mainIcon}>
          <MaterialCommunityIcons name="youtube" size={35} color={colors.red} />
          <Text
            style={{ color: colors.ofWhite, fontWeight: "800", fontSize: 20 }}
          >
            YOUTUBE
          </Text>
        </View>
        <View style={styles.restIcon}>
          <MaterialCommunityIcons

            name="cast"
            size={25}
            color={colors.ofWhite}
          />
          <MaterialCommunityIcons
            name="bell-outline"
            size={25}
            color={colors.ofWhite}
          />
          <MaterialIcons name="search" size={25} color={colors.ofWhite} />
          <MaterialCommunityIcons
            name="face-man-profile"
            size={25}
            color={colors.ofWhite}
          />
        </View>
      </View>
        <ScrollView horizontal= {true}>
        <View style = {styles.buttonContainer}>
        <CloudButton title = "Explore" tile= {activeTile} setTile= {setActiveTile}/>
        <CloudButton title = "new"/>
        <CloudButton title = "sports" tile= {activeTile} setTile= {setActiveTile}/>
        <CloudButton title= "comedy" tile= {activeTile} setTile= {setActiveTile}/>
        <CloudButton title = "funny" tile= {activeTile} setTile= {setActiveTile}/>
        <CloudButton title = "movie" tile= {activeTile} setTile= {setActiveTile}/> 
        <CloudButton title = "horror" tile= {activeTile} setTile= {setActiveTile}/>
        </View>
        </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height:100,
    width: "100%",
    flex:1,
    paddingBottom:10,
    backgroundColor:"black"
  },
  iconContainer: {
    backgroundColor: 'black',
    width: "100%",
    height: "60%",
    justifyContent: "center",
    paddingTop:8,
    alignItems: "flex-start",
    
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mainIcon: {
    flexGrow: 1,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer:{
    flexDirection:'row',
    backgroundColor:"white",
    height:'100%'
  },
  restIcon: { flex: 7, flexDirection: "row", justifyContent: "space-around" },
});

export default HeaderTitle;
