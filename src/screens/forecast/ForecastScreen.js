import React, { Component } from "react";
import { ListView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LoadingScreen } from "../../commons";
import Colors from "../../../constants/Colors";
import styles from "./styles/ForecastScreen";
import { List, ListItem } from "react-native-elements";
import weatherIcon from "../../../constants/weatherIcons";
import moment from "moment";


import { connect } from "react-redux";
import { fetchForecast } from "./actions";

@connect(state => ({weather: state.forecast.weather}), {fetchForecast})
class ForecastScreen extends Component {

    state = {
        searchedCity: this.props.navigation.state.params,
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
    };
    static navigationOptions = {
        title: 'Прогноз погоды на 5 дней',
        headerTitleStyle: {
            // fontSize: 15,
            fontFamily: 'Cochin'
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

    componentDidMount () {
        this.props.fetchForecast(this.state.searchedCity).then(() => this._loadInitialState());
    }

    _loadInitialState = () => {
        const {weather: {data: {data: {list}}}} = this.props;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(list)
        });
    };

    renderRow (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={`Temp: ${Math.round(rowData.main.temp)}°C`}
                subtitle={rowData.weather[0].main}
                label={<Text style={{height: 70}}>
                    {moment(rowData.dt_txt).format('MMM Do, h:mm')}
                </Text>}
                hideChevron={true}
                // rightTitle="Hello"
                // leftIcon={{name: "wb-cloudy"}}
                // rightIcon={{name: "wb-cloudy"}}
            />
        )
    }

    render () {

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

        const {weather: {data: {data: {city, list}}}} = this.props;

        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text style={styles.city}>{city.name}, {city.country}</Text>
                    <Text style={styles.city}>{`Температура сейчас: ${list[0].main.temp}°C`}</Text>
                </View>
                <View style={{flex: 3}}>
                    <List>
                        <ListView
                            renderRow={this.renderRow}
                            dataSource={this.state.dataSource}
                        />
                    </List>
                </View>
            </View>
        );
    }
}

export default ForecastScreen;