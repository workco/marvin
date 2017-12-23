import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from 'config/store';
import App from 'views/App';

// Load CSS
import 'index.css';

const store = configureStore().store;

const render = Component => {
  const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

  renderMethod(
    <AppContainer>
      <Provider store={ store }>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render app
render(App);

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NewClient = require('./views/App.jsx').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
