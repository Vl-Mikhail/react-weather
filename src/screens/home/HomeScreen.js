import React, { Component } from "react";
import { AsyncStorage, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LoadingScreen } from "../../commons";
import styles from "./styles/HomeScreen";
import weatherIcon from "../../../constants/weatherIcons";

import { connect } from "react-redux";
import { fetchWeather } from "./actions";


@connect(state => ({weather: state.home.weather}), {fetchWeather})
class HomeScreen extends Component {

    state = {
        refreshing: false,
        searchedCity: "Barnaul",
    };

    static navigationOptions = {
        header: null,
        // title: 'Прогноз погоды',
        // headerTitleStyle: {fontFamily: 'Cochin'},
        // headerStyle: {
        //     backgroundColor: Colors.whiteColor
        // },
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
            searchedCity: searchedCity,
        });
        AsyncStorage.setItem('city', searchedCity);
    };

    onSearchPressed = () => {
        const {navigate} = this.props.navigation;
        navigate("ForecastScreen", this.state.searchedCity);
    };

    render () {

        console.log(this.props.weather);

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
                <KeyboardAvoidingView behavior='padding' style={styles.topContainer}>
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
                    {/*<Text>{AsyncStorage.getItem('city')}</Text>*/}
                </KeyboardAvoidingView>
                <View style={styles.flowRight}>
                    <TouchableOpacity style={styles.ForecastButton}
                                      onPress={this.onSearchPressed}>
                        <Text style={styles.ButtonText}>Прогноз погоды на 5 дней</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HomeScreen;