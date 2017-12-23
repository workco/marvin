import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';

export default combineReducers({
  app,
  people,
});
