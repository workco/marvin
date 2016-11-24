import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Map } from 'immutable';
import 'babel-polyfill';

import rootReducer from 'reducers';
import Routes from 'routes';

// Load SCSS
import '../scss/app.scss';

const isProduction = process.env.NODE_ENV === 'production';

// Redux logger
const logger = createLogger({
  // State transformer
  // transforms Immutable maps from reducers
  // to the plain JS objects
  stateTransformer: (state) => {
    const newState = {};

    Object.keys(state).forEach((key) => {
      const stateItem = state[key];

      if (Map.isMap(stateItem)) {
        newState[key] = stateItem.toJS();
      } else {
        newState[key] = stateItem;
      }
    });

    return newState;
  },
});

// Store
const middleware = isProduction ? applyMiddleware(thunk) : applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  middleware
);

// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
