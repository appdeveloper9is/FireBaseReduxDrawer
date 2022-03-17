import {auth, userCollection} from "../Firebase";
import React from "react";
import { doc, updateDoc, getDoc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,updateEmail} from "firebase/auth";
import {AutoSignIn} from "../Redux/Actions";
import {clearAsyncStorage} from "../Controller";
let userProfile = null
let hack = null

export const registerUser = async ({email, password}) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password).then(
            async function (response) {

                userProfile = {
                    uid: response.user.uid,
                    email: response.user.email,

                };
                hack = await setDoc(doc(userCollection, "op", response.user.uid), {
                    userProfile,
                });
            });

        return {isAuth: true, user: userProfile, isid:userProfile.uid}
    } catch (error) {
        return {error: error.message}
    }
}

export const loginUser = async ({email, password}) => {

    let check = null
    let c = null
    try {
        await signInWithEmailAndPassword(auth, email, password).then(
            function (response) {
                check = response.user.uid
                c = response.user
            }
        );
        return {isAuth: true, isid:check}

    } catch (error) {
        return {error: error.message}
    }
}

export const autoSignIn = (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(AutoSignIn({
                isAuth: true, loading: false, isid: user.uid
            }));
        } else {
            dispatch(AutoSignIn({
                isAuth: false, loading: false
            }));
        }
    });
}

export const logout =async () => {

    await auth.signOut()
    await clearAsyncStorage()
    return {isAuth: false, isid: null, user:[]}

}

export const updateUserData = async (values, user, gg) => {

    try {

        const washingtonRef = doc(userCollection, "op", gg);
        await updateDoc(washingtonRef, values);
        const docSnap = await getDoc(washingtonRef);
        console.log("docSnap", docSnap.data())

        return {user: docSnap.data(), error: null}
    } catch (error) {
        return {user: user, error: error.message}
    }
}

export const pdateEmail = async (email) => {

    updateEmail(auth.currentUser, email).then(() => {
    }).catch((error) => {
      alert(error.message)
    });


}

export const check = async (check) => {

    return {user:check}

}

