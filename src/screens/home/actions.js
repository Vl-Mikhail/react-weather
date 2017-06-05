import { WeatherApi } from "../../../constants/api";

const weatherApi = new WeatherApi();

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => ({
    type: FETCH_WEATHER,
    payload: weatherApi.fetchWeather(city)
});