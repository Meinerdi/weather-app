import axios from 'axios';
import { FETCH_BASIC_WEATHER } from './types';
import { FETCH_SEARCHED_CITY } from './types';
import { SET_ERROR_WRONG_CITY } from './types';

// AC
export const setHomeWeather = (result) => ({
  type: FETCH_BASIC_WEATHER,
  payload: result.data,
});

export const setSearchedWeather = (result) => {
  return {
    type: FETCH_SEARCHED_CITY,
    payload: result,
  };
};

export const setErrorWrongCity = () => ({
  type: SET_ERROR_WRONG_CITY,
  payload: 'Wrong city name...',
});

// Thunk
export const fetchHomeWeather = () => async (dispatch) => {
  const result = await axios.get(
    `http://api.openweathermap.org/data/2.5/group?id=706482,1244178,1850147&units=metric&appid=ddb67a55a354faf00bbc8de4c78cf368`
  );

  dispatch(setHomeWeather(result));
};

export const fetchSearhedCity = (city) => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ddb67a55a354faf00bbc8de4c78cf368`
    );
    dispatch(setSearchedWeather(result));
  } catch {
    dispatch(setErrorWrongCity());
  }
};
