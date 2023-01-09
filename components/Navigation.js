import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoPage from "../pages/VideoPage";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from "../constants/colors";

const Navigation = ()=>{
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator  screenOptions={{ headerShown: false}} tabBarOptions={
            {
                
                activeTintColor: colors.ofWhite,
                activeBackgroundColor:'black',
                inactiveBackgroundColor:"black"
            }
        } >
                <Tab.Screen component={VideoPage} name= "Home" options={{ tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" size={size} color={color} />
              )}}/>
                <Tab.Screen component={VideoPage} name= "shorts" options={{ tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="music-video" size={size} color={color} />
              )}}/>
                <Tab.Screen component={VideoPage} name= "Add" options={{ tabBarIcon: ({ color, size }) => (
                    <Feather name="plus-circle" size={35} color={color} />
              )}}/>
                <Tab.Screen component={VideoPage} name= "subscription" options={{ tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="subscriptions" size={size} color={color} />
              )}}/>
                <Tab.Screen component={VideoPage} name= "library" options={{ tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="video-library" size={size} color={color} />
              )}}/>


            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Navigation