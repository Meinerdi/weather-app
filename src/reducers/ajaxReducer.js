import { FETCH_BASIC_WEATHER } from '../actions/types';

const initialState = {
  homeWeather: [],
};

export const ajaxReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BASIC_WEATHER:
      return {
        ...state,
        homeWeather: action.payload.list,
      };

    default:
      return state;
  }
};
