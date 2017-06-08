import { combineReducers } from 'redux';

import {
    HomeReducer, ForecastReducer
} from '../screens';

export default combineReducers({
    home: HomeReducer,
    forecast: ForecastReducer
});