import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {UpdateUserData} from "../Redux/Actions";
import {useDispatch, useSelector} from "react-redux";
import {doc, getDoc} from "firebase/firestore";
import {userCollection} from "../Firebase";
import {get_data, save_data} from "../Controller";



const UserData =  ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const error = useSelector(state => state.articles.error);
    const user = useSelector(state => state.articles);
    const dispatch = useDispatch();
    const [state, setstate] = useState(user)

    useEffect( () => {

        const Newdata = async () => {
            const washingtonRef = doc(userCollection, "op", user.isid);
            const docSnap = await getDoc(washingtonRef);
            await save_data("new", docSnap.data())
            setstate(docSnap.data())
        }
        Newdata()


    }, [state])


    // useFocusEffect(
    //     useCallback(()=>{
    //
    //         const Newdata = async () => {
    //             {
    //                 const washingtonRef = doc(userCollection, "op", user.isid);
    //                 const docSnap = await getDoc(washingtonRef);
    //                 await save_data("new", docSnap.data())
    //                 setstate(docSnap.data())
    //             }
    //             }
    //
    //         return () => Newdata()
    //     },[]
    // ) )
    //

    const handleSubmit = (values) => {

        setLoading(true);
        dispatch(UpdateUserData(values, user, user.isid)).then(({payload}) => {
            setLoading(false);
            if (payload.error) {
                alert(error)
            } else {
                alert("updated");

            }

        });
    }
    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                name: state.name ? state.name : '',
                lastname: user.user.lastname ? user.user.lastname : '',
                age: user.user.age ? user.user.age : ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('The name is required'),
                lastname: Yup.string().required('The lastname is required'),
                age: Yup.number().required('The age is required')
            })}
            onSubmit={values => handleSubmit(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
                <View style={{padding: 20}}>
                    <TextInput
                        label="name"
                        mode="flat"

                        error={errors.name && touched.name ? true : false}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <TextInput
                        label="lastname"
                        mode="flat"
                        error={errors.lastname && touched.lastname ? true : false}
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        value={values.lastname}
                    />
                    <TextInput
                        label="age"
                        mode="flat"
                        error={errors.age && touched.age ? true : false}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                    />
                    <Button
                        style={{marginTop: 10}}
                        mode="contained"
                        onPress={handleSubmit}
                        loading={loading}
                    >
                        Update
                    </Button>

                    <View>
                        <Text>
                            {state.name}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {state.lastname}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {state.age}
                        </Text>
                    </View>
                </View>

            )}
        </Formik>
    )

}
export default UserData;
