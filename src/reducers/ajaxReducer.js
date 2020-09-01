import { FETCH_BASIC_WEATHER } from '../actions/types';
import { FETCH_SEARCHED_CITY } from '../actions/types';
import { SET_ERROR_WRONG_CITY } from '../actions/types';

const initialState = {
  homeWeather: [],
  searchedCity: null,
  errorMessage: '',
};

export const ajaxReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BASIC_WEATHER:
      return {
        ...state,
        homeWeather: action.payload.list,
      };

    case FETCH_SEARCHED_CITY:
      return {
        ...state,
        searchedCity: action.payload.data,
      };

    case SET_ERROR_WRONG_CITY:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
