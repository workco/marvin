import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { isProductionEnv } from './utils/env';

import rootReducer from './reducers';
import rootSaga from './sagas';

// Loading redux logger only in development mode
let logger = null;
if (!isProductionEnv) {
  logger = require('redux-logger').default;
}


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = (window as any).__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete (window as any).__PRELOADED_STATE__;


let store: any = null;
let middleware: any = null;

const sagaMiddleware = createSagaMiddleware();

// For production we are skipping logger and redux devtools
if (isProductionEnv) {
  middleware = applyMiddleware(sagaMiddleware);
} else {
  // Adding redux logger
  middleware = applyMiddleware(sagaMiddleware, logger);

  // Enable DevTools if browser extension is installed
  if (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    middleware = compose(
      middleware,
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
}

// Create store
store = createStore(
  rootReducer,
  preloadedState || {},
  middleware
);

// Tell react-snap how to save Redux state
// If you are not using react-snap feel free to delete it,
(window as any).snapSaveState = () => {
  return ({
    __PRELOADED_STATE__: store.getState(),
  });
};

// Run sagas
sagaMiddleware.run(rootSaga);

export default store;
