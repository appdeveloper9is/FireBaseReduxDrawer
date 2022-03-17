import axios from 'axios';
import {autoSignIn, loginUser, registerUser, logout, updateUserData, pdateEmail, check} from "../../api";
const URL = `https://jsonplaceholder.typicode.com`;

export function getArticles(){
    const request = axios.get(`${URL}/posts`).then(response => response.data)

    return {
        type:'GET_ARTICLES',
        payload:request
    }
}
export const RegisterUser = (values) => ({
    type:'registerUsers',
    payload: registerUser(values)
})

export const LoginUser = (values) => ({
    type:'loginUsers',
    payload: loginUser(values)
})

export const AutoSignIn =(values)=>({
    type:"autoSignIn",
    payload: values
})

export const Logout =()=>({
    type:"logout",
    payload:logout()
})


export const UpdateUserData = (values,user, gg) => ({
    type:'UPD_USER_DATA',
    payload: updateUserData(values,user,gg)
})

export const UpdateEmail = (values) => ({
    type:'updateEmail',
    payload: pdateEmail(values)
})

export const Check = (check) => ({
    type:'check',
    payload: check(check)
})




