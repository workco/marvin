import { Map } from 'immutable';

import {
  INCREMENT,
} from 'actions/app';

const initialState = Map({
  counter: 0,
});

const actionsMap = {
  [INCREMENT]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
