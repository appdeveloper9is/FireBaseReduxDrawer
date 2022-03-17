import React, {useEffect, useState} from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {Appbar, TextInput, Button, Title} from 'react-native-paper'
import UserData from "./userData";
import {UpdateEmail} from "../Redux/Actions";
import {useDispatch, useSelector} from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import {auth, userCollection} from "../Firebase";
import {get_data, save_data} from "../Controller";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen =  () => {
    const navigation = useNavigation()
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const user = useSelector(state => state.articles);
    const [chekc, setcheck] = useState(user)


    useEffect( () => {

        const Newdata = async () => {
          await  get_data("new")
                .then((response) => {
                    setcheck(response)
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        Newdata()

    }, [chekc])

    const dispatch = useDispatch();

    const handleSubmit = () => {
        setLoading(true);
        dispatch(UpdateEmail(text))
    }


    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Profile"/>
            </Appbar.Header>
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{padding: 20}}>
                        <Title>Your user Login data</Title>
                        <TextInput
                            label="email"
                            value={auth.currentUser?.email}
                            onChangeText={text => setText(text)}
                            mode="outlined"
                            right={<TextInput.Icon
                                name={() => <Ionicons color="green" name="checkmark-circle" size={25}/>}/>}
                        />
                        <Text>
                            {chekc?.name}
                        </Text>
                        <Button
                            style={{marginTop: 10}}
                            mode="contained"
                            onPress={() => handleSubmit()}
                        >
                            Update
                        </Button>

                    </View>
                    <UserData/>

                    <View>
                        <Image/>
                    </View>
                </View>

            </SafeAreaView>
        </>


    )

}

export default ProfileScreen
