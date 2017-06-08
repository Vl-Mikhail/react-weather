import { WeatherApi } from "../../../constants/api";

const weatherApi = new WeatherApi();

export const FETCH_FORECAST = 'FETCH_FORECAST';

export const fetchForecast = (city) => ({
    type: FETCH_FORECAST,
    payload: weatherApi.fetchForecast(city)
});