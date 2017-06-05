import Expo from "expo";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Colors from "./constants/Colors";
import Root from "./src/Root";

import { Provider } from "react-redux";
import store from "./src/redux/store";


EStyleSheet.build(Colors);

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}

Expo.registerRootComponent(App);
