import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PEOPLE_START,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
} from 'actions/people';
import api from 'api';

// -------- Get people

function createGetPeople(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getPeople(options.id));
      const action = { type: GET_PEOPLE_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_PEOPLE_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getPeople = createGetPeople();
export const getPeopleServer = createGetPeople(true);


export function* getPeopleWatcher() {
  yield takeLatest(GET_PEOPLE_START, getPeople);
}


export default [
  getPeopleWatcher(),
];
