import { FETCH_FORECAST } from './actions';

const INITIAL_STATE = {
    weather: {
        data: [],
        isFetched: false,
        error: {
            on: false,
            message: null
        }
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${FETCH_FORECAST}_PENDING`:
            return INITIAL_STATE;
        case `${FETCH_FORECAST}_FULFILLED`:
            return {
                weather: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
        case `${FETCH_FORECAST}_REJECTED`:
            return {
                weather: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error when fetching weather'
                    }
                }
            };
        default:
            return state;
    }
};