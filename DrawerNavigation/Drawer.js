import React, {useEffect, useState} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeStack, ProfileS, VideosStack} from "../Stack";
import SideDrawer from "../SideDrawer";
import ProfileScreen from "../Components/ProfileScreen";
import {useSelector} from "react-redux";
import {get_data} from "../Controller";

const Drawer = createDrawerNavigator()

const DrawerNavigation =()=> {
    const [getStorageData, setStorageData] = useState("")



    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}
            drawerContent={(props) => <SideDrawer {...props}/>}>
            <Drawer.Screen  name="Home" component={HomeStack} />
            <Drawer.Screen  name="Videos" component={VideosStack} />
            <Drawer.Screen  name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigation
