---
to: source/js/reducers/<%= name %>.js
---

import { Map } from 'immutable';

import {
  GET_<%= name.toUpperCase() %>_START,
  GET_<%= name.toUpperCase() %>_ERROR,
  GET_<%= name.toUpperCase() %>_SUCCESS,
} from 'actions/<%= name %>';

const initialState = Map({
  loading: false,
  error: null,
  <%= name %>: null,
});

const actionsMap = {
  // Async action
  [GET_<%= name.toUpperCase() %>_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      <%= name %>: null,
    }));
  },
  [GET_<%= name.toUpperCase() %>_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_<%= name.toUpperCase() %>_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      <%= name %>: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
