---
to: source/js/sagas/<%= name %>.js
---
import { takeLatest, call, put } from "redux-saga/effects";

import {
  GET_<%= name.toUpperCase() %>_START,
  GET_<%= name.toUpperCase() %>_ERROR,
  GET_<%= name.toUpperCase() %>_SUCCESS,
} from "actions/<%= name %>";

import api from "api";

// -------- Get <%= name %>

function createGet<%= h.capitalize(name) %>() {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.get<%= h.capitalize(name) %>(options.id));
      const action = { type: GET_<%= name.toUpperCase() %>_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_<%= name.toUpperCase() %>_ERROR, error };

      yield put(action);
    }
  };
}

export const get<%= h.capitalize(name) %> = createGet<%= h.capitalize(name) %>();

export function* get<%= h.capitalize(name) %>Watcher() {
  yield takeLatest(GET_<%= name.toUpperCase() %>_START, get<%= h.capitalize(name) %>);
}


export default [
  get<%= h.capitalize(name) %>Watcher(),
]