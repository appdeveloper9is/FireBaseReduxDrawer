import React from "react";
import {Text, TouchableOpacity, SafeAreaView, Dimensions, View} from "react-native";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {useDispatch} from "react-redux";
import {Logout} from "./Redux/Actions";
import {clearAsyncStorage} from "./Controller";
import {logout} from "./api";

const SideDrawerCustom = (props) => {

    const height = Dimensions.get("window").height
    const width = Dimensions.get("window").width
    const dispatch = useDispatch();

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <DrawerContentScrollView {...props}>

                <View style={{alignItems:"center"}}>
                    <Text style={{fontFamily:"Monoton-Regular",color:"white", fontSize:20}}>
                        Red Wire
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: height / 20,
                        borderWidth: 0.5,
                        justifyContent: "center",
                        borderBottomColor: "white",
                        alignItems: "center"
                    }}
                    onPress={() => props.navigation.navigate("Home")}>
                    <Text style={{fontSize: 15, color: "white"}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: height / 20,
                        borderBottomWidth: 0.5,
                        justifyContent: "center",
                        borderBottomColor: "white",
                        alignItems: "center"
                    }}

                    onPress={() => props.navigation.navigate("Videos")}

                >
                    <Text style={{fontSize: 15, color: "white"}}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: height / 20,
                        borderWidth: 0.5,
                        justifyContent: "center",
                        borderBottomColor: "white",
                        alignItems: "center"
                    }}

                    onPress={() => props.navigation.navigate("Profile")}

                >
                    <Text style={{fontSize: 15, color: "white"}}>Profile</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>dispatch(Logout())} style={{
                    height: height / 20,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "white",
                }}>
                    <Text style={{fontSize: 15, color: "white"}}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}

export default SideDrawerCustom
