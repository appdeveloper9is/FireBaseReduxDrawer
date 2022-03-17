import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Button, Input} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {LoginUser, RegisterUser} from "./Redux/Actions";

const Login = () => {
    const [securEntry, setSecurEntry] = useState(true);
    const [loading, setLoading] = useState(false)
    const error = useSelector(state => state.articles.error)
    const us = useSelector(state => state.articles)
    console.log("us", us)

    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        dispatch(LoginUser(values))
    }

    useEffect(() => {
        if (error) {

        }
    }, [error])


    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "#d74444"}}>
            <View style={{alignItems: "center"}}>
                <Text style={{fontFamily: "Monoton-Regular", fontSize: 40, color: "white"}}>
                    RedWire
                </Text>
            </View>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('The email is required'),
                    password: Yup.string()
                        .max(10, 'Must be 10 or less')
                        .required('Required')
                })}
                onSubmit={values => handleSubmit(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                    <View>


                        <Input
                            placeholder="Email"
                            leftIcon={{type: 'antdesign', name: 'mail', color: "white"}}
                            inputStyle={styles.inputStyle}
                            placeholderTextColor={"grey"}
                            inputContainerStyle={styles.inputContainerStyle}
                            onChangeText={handleChange('email')}
                            renderErrorMessage={errors.email && touched.email}
                            errorMessage={errors.email}
                            errorStyle={{color: "black", marginLeft: 20}}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />


                        <Input
                            placeholder="Password"
                            secureTextEntry={securEntry}
                            leftIcon={{type: 'antdesign', name: 'lock', color: "white"}}
                            inputStyle={styles.inputStyle}
                            placeholderTextColor={"grey"}
                            renderErrorMessage={errors.password && touched.password}
                            errorMessage={errors.password}
                            errorStyle={{color: "black", marginLeft: 20}}
                            inputContainerStyle={styles.inputContainerStyle}
                            rightIcon={{
                                type: 'antdesign',
                                name: securEntry ? 'eye' : 'eyeo',
                                onPress: () => setSecurEntry(!securEntry)
                            }}

                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <View style={{marginHorizontal: 25}}>

                            <Button buttonStyle={{backgroundColor: "black", marginTop: 10}} loading={loading}
                                    title="Login" onPress={handleSubmit}>

                            </Button>
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: "red"
    },
    container: {

        alignItems: 'center'
    },
    inputStyle: {
        fontSize: 15,
        color: "white"
    },
    inputContainerStyle: {
        borderBottomWidth: 3,
        borderBottomColor: "black",
        marginHorizontal: 20,
    }
})
export default Login
