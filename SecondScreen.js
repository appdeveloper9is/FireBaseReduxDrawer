import React, {useEffect} from "react";
import {Text} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import {getArticles} from "./Redux/Actions";

const SecondScreen =()=>{
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();
    console.log("articles",articles)
    useEffect(()=>{
        dispatch(getArticles())
    },[dispatch])

    return(

        <>
            <Text>
                SecondScreen
            </Text>
        </>
    )

}
export default SecondScreen
