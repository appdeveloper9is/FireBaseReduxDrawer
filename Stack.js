import React from 'react';


import VideosScreen from "./Components/VideosScreen"
import HomeScreen from './Components/HomeScreen';
import ArticleScreen from './Components/ArticleScreen'
import {Stack} from "./Route";
import ProfileScreen from "./Components/ProfileScreen";
import Feather from "react-native-vector-icons/Feather";
import {Text, View} from "react-native";


export const LogoTxt = () => {


    return (<View style={{alignItems: "center", borderBottomWidth: 3, borderBottomColor: "red"}}>
            <Text style={{fontFamily: "Monoton-Regular", color: "white", fontSize: 20}}>
                Red Wire
            </Text>
        </View>


    )
}

export const ProfileS = ({navigation}) => (

    <Stack.Navigator screenOptions={{
        headerTitleAlign: "center", headerTintColor: "red", headerTitle: () => <LogoTxt/>

        , headerStyle: {

            backgroundColor: "black",
        }
    }}>
        <Stack.Screen options={{
            headerLeft: () => {
                return (<Feather onPress={() => navigation.openDrawer()} name={"menu"} size={28} color={"white"}/>)
            }
        }} name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>)


export const VideosStack = ({navigation}) => (


    <Stack.Navigator screenOptions={{
        headerTitleAlign: "center", headerTintColor: "red", headerTitle: () => <LogoTxt/>

        , headerStyle: {
            backgroundColor: "black", borderBottomColor: "red", borderBottomWidth: 10,


        }
    }}
                     initialRouteName="Videos_screen">
        <Stack.Screen options={{
            headerLeft: () => {
                return (<Feather onPress={() => navigation.openDrawer()} name={"menu"} size={28} color={"white"}/>)
            }
        }} name="Videos_screen" component={VideosScreen}/>

    </Stack.Navigator>)

export const HomeStack = ({navigation}) => (

    <Stack.Navigator screenOptions={{
        headerTitleAlign: "center", headerTintColor: "red", headerTitle: () => <LogoTxt/>

        , headerStyle: {
            backgroundColor: "black", borderBottomColor: "red",
        }
    }}>
        <Stack.Screen options={{
            headerLeft: () => {
                return (<Feather onPress={() => navigation.openDrawer()} name={"menu"} size={28} color={"white"}/>)
            }
        }} name="Home_Screen" component={HomeScreen}/>
        <Stack.Screen name="Article_Screen" component={ArticleScreen}/>
    </Stack.Navigator>)
