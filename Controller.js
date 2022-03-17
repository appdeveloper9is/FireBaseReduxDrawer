import AsyncStorage from "@react-native-async-storage/async-storage";

const get_data = async (key) => {


    try {
        const value = await AsyncStorage.getItem(key)
        const data = JSON.parse(value)

        return data
    } catch (e) {
        console.log('Failed to fetch the data from storage');
    }
}


const save_data = async (key, value) => {

    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

const clearAsyncStorage = async() => {
    await AsyncStorage.clear();
}

export { save_data, get_data, clearAsyncStorage }
