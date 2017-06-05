import axios from "axios";
import { KEY } from "./keyWeather";

axios.defaults.baseURL = 'http://api.openweathermap.org';

class WeatherApi {
    async fetchWeather (city) {
        try {
            return await axios.get(`/data/2.5/weather?q=${city}ru&units=metric&appid=${KEY}`);
        } catch (e) {
            throw e;
        }

    }

    async fetchForecast (city) {
        try {
            return await axios.get(`/data/2.5/forecast?q=${city}ru&units=metric&appid=${KEY}`);
        } catch (e) {
            throw e;
        }

    }
}

export {
    WeatherApi
};