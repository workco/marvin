import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';

// State transformer
// transforms Immutable to the plain JS objects
const stateTransformer = (state) => {
  const newState = {};

  Object.keys(state).forEach(key => {
    if (Iterable.isIterable(state[key])) {
      newState[key] = state[key].toJS();
    } else {
      newState[key] = state[key];
    }
  });

  return newState;
};

const CLIENT_OPTIONS = {
  // Transform Immutable to the plain JS objects
  stateTransformer,
};

const SERVER_OPTIONS = {
  // Disable colors for node console.log
  colors: {
    title: false,
    prevState: false,
    action: false,
    nextState: false,
    error: false,
  },
  // Stringify all responses and format them with 2 spaces
  stateTransformer: () => '',
  // If you need full state use stateTransformer beneath:
  // stateTransformer: state => JSON.stringify(stateTransformer(state), null, 2),
  actionTransformer: action => JSON.stringify(action, null, 2),
  errorTransformer: error => JSON.stringify(error, null, 2),
  titleFormatter: (actionJSON, time) => `\n★★ action: ${ JSON.parse(actionJSON).type } @ ${ time }`,
};

const options = process.env.SERVER_RENDER ? SERVER_OPTIONS : CLIENT_OPTIONS;

const logger = createLogger(options);

export default logger;
