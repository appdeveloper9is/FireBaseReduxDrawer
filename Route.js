import React, {useEffect, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./Login";
import DrawerNavigation from "./DrawerNavigation/Drawer";
import {useDispatch, useSelector} from "react-redux";
import VideoScreen from "./Components/VideoScreen";
import {LogoTxt} from "./Stack";
import ProfileScreen from "./Components/ProfileScreen";
import Register from "./Register";
import {autoSignIn} from "./api";

export const Stack = createNativeStackNavigator();

const Route = ({navigation}) => {

    const articles = useSelector(state => state.articles);

    const dispatch = useDispatch();

    useEffect(()=>{
        autoSignIn(dispatch)
        },[])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {articles.isAuth ? (
                    <>
                        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown: false}}/>
                        <Stack.Screen
                            options={{
                                headerTintColor: "red", headerTitle: () => <LogoTxt/>, headerStyle: {
                                    backgroundColor: "black",
                                }
                            }} name="Video_screen" component={VideoScreen}/>
                        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>

                    </> ):
                    (
                        articles.loading ?
                            <Stack.Screen name="Login" component={Register} options={{headerShown: false}}/> :
                            <Stack.Screen name="Register" component={Login} options={{headerShown: false}}/>

                    )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;

