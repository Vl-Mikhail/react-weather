import React, { Component } from "react";
import { Text, View, TextInput, KeyboardAvoidingView } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LoadingScreen } from "../../commons";
import styles from "./styles/HomeScreen";
import Colors from "../../../constants/Colors";
import weatherIcon from "../../../constants/weatherIcons";

import { connect } from "react-redux";
import { fetchWeather } from "./actions";


@connect(state => ({weather: state.home.weather}), {fetchWeather})
class HomeScreen extends Component {

    state = {
        searchedCity: "Barnaul",
    };

    static navigationOptions = {
        title: 'Прогноз погоды',
        headerStyle: {
            backgroundColor: Colors.whiteColor
        },
        tabBarIcon: ({tintColor}) => (
            <FontAwesome
                name="home"
                size={25}
                color={tintColor}
            />
        )

    };

    componentDidMount () {
        //"redux-promise-middleware": "^4.3.0"
        this.props.fetchWeather(this.state.searchedCity);
    }

    getWeather = () => {
        this.props.fetchWeather(this.state.searchedCity);
    };

    onChangeText = searchedCity => {
        this.setState({
            searchedCity: searchedCity
        })
    };

    render () {

        console.log(this.props);

        const {weather: {isFetched, error}} = this.props;

        if (!isFetched) {
            return <LoadingScreen />;
        } else if (error.on) {
            return (
                <View>
                    <Text>{error.message}</Text>
                </View>
            );
        }

        const {weather: {data: {data: {main, weather, name, sys}}}} = this.props;

        return (
            <View style={styles.root}>
                <KeyboardAvoidingView  behavior='padding' style={styles.topContainer}>
                    <MaterialCommunityIcons
                        name={weatherIcon(weather[0].icon)}
                        size={130}
                        color="white"
                    />
                    <Text style={styles.temp}>{Math.round(main.temp)}°C</Text>
                    <Text style={styles.city}>{name}, {sys.country}</Text>
                    <TextInput style={styles.input}
                               value={this.state.searchedCity}
                               onChangeText={this.onChangeText}
                               onSubmitEditing={this.getWeather}
                               clearButtonMode={"always"}
                               clearTextOnFocus={true}
                               returnKeyType={"search"}
                               enablesReturnKeyAutomatically={true}
                    />
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default HomeScreen;