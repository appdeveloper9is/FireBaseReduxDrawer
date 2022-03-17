import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MainStack, Profile} from "./Home";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const navigation = useNavigation()

    const Style = {
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"red"

        },
        headerLeft:()=>{

            return(

                <Text onPress={()=>navigation.openDrawer()}>Hack</Text>
            )
        }
    }
    return (
        <Tab.Navigator>
            <Tab.Screen options={Style}  name="Home" component={MainStack} />
            <Tab.Screen options={Style} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator
