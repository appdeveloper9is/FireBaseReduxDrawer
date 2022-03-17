import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";


const HomeScreen = ({navigation}) => {

    const REdner = () => {
        return (
            <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Article_Screen")}>
                <View style={{backgroundColor: "white", marginHorizontal: 10, marginTop: 10}}>
                    <View style={{marginHorizontal: 10, marginTop: 10}}>
                        <View style={{}}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 15,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style={{marginVertical: 10}}>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "lightgray"}}>
            <ScrollView>
                <REdner/>
                <REdner/>
                <REdner/>
                <REdner/>
                <REdner/>
            </ScrollView>
        </SafeAreaView>
    )

}
export default HomeScreen
