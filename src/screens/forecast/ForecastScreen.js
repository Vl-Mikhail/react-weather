import React, { Component } from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import styles from "./styles/ForecastScreen";


class ForecastScreen extends Component {

    static navigationOptions = {
        title: 'Прогноз погоды на 5 дней',
        headerTitleStyle: {
            fontSize: 15,
        },
        headerStyle: {
            backgroundColor: Colors.whiteColor
        },
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons
                name="weather-partlycloudy"
                size={25}
                color={tintColor}
            />
        )

    };

    render () {
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text style={styles.textColor}>Прогноз погоды на 5 дней</Text>
                </View>
            </View>
        );
    }
}

export default ForecastScreen;