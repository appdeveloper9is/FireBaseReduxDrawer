import React from "react";
import {ActivityIndicator, Text, View,StyleSheet} from "react-native";

const Register =()=>(


    <View style={styles.contentContainer}>
        <ActivityIndicator color="black"/>
    </View>

)
const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        backgroundColor:"red",
        alignItems:'center',
        justifyContent:'center'
    }
})


export default Register


