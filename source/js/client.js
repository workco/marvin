import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Immutable from 'immutable'; // Remove if you are not using server rendering
import Serialize from 'remotedev-serialize/immutable'; // Remove if you are not using server rendering

import configureStore from 'config/store';
import App from 'views/App';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-client';

// Load CSS
import 'index.css';

let i18nState = {};

// Remove if you are not using server rendering
try {
  // If state exists we need to parse it to JS object
  i18nState = Serialize(Immutable).parse(__MARVIN___i18n); // eslint-disable-line no-undef
  i18n.changeLanguage(i18nState.locale);
  i18n.addResourceBundle(i18nState.locale, 'common', i18nState.resources, true);
} catch (e) {
  // ★★ Marvin: No i18n state
}

const store = configureStore().store;

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <I18nextProvider i18n={ i18n }>
    <AppContainer>
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>
  </I18nextProvider>,
  document.getElementById('root')
);
