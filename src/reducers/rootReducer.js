import { combineReducers } from 'redux';
import { ajaxReducer } from './ajaxReducer';

export const rootReducer = combineReducers({
  ajaxReducer: ajaxReducer,
});
