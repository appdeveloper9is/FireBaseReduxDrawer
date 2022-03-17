import {Dimensions} from "react-native";
import Toast from 'react-native-toast-message';
export const height = Dimensions.get("window").height
export const width = Dimensions.get("window").width



export const showToast = (type,text1,text2) => {
    switch(type){
        case 'success':
            Toast.show({
                type: 'success',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
            });
            break;
        case 'error':
            Toast.show({
                type: 'error',
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
            });
            break;
        default:
            null
    }
}


