/**
 * @format
 */
import  React from "react";

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from "./Redux/Reducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const percistConfig = {

    key:"root",
    storage:AsyncStorage,
}

const persistedReducer = persistReducer(percistConfig,reducers)
const createStoreWithMiddleware = createStore(
    // persistedReducer,
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);

const persist = persistStore(createStoreWithMiddleware)


const reduxApp = () => (
    <Provider store={createStoreWithMiddleware}>
        {/*<PersistGate persistor = {persist} loading={null} >*/}
            <App/>
        {/*</PersistGate>*/}
    </Provider>
)

AppRegistry.registerComponent(appName, () => reduxApp);
