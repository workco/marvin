import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import transit from 'transit-immutable-js';

import 'babel-polyfill';

import configureStore from 'config/store';
import getServerHtml from 'config/server-html';
import App from 'views/App';

import api from 'api';
import { testAsyncSuccess, testAsyncError } from 'actions/app';

// Load SCSS
import '../scss/app.scss';

const app = express();
const hostname = 'localhost';
const port = 8080;

const respond = (req, res, store) => {
  // Dehydrates the state
  const dehydratedState = JSON.stringify(transit.toJSON(store.getState()));

  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {};

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={ store }>
        <StaticRouter location={ req.url } context={ context }>
            <App />
        </StaticRouter>
    </Provider>
  );

  const serverHtml = getServerHtml(appHtml, dehydratedState);

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // We're good, send the response
    res.status(context.status || 200).send(serverHtml);
  }

  // TODO how to handle 50x errors?
};

const fetchData = (req, res, store) => {
  const routeMapper = {
    '/': () => {
      api.testAsync()
        .then(data => {
          store.dispatch(testAsyncSuccess(data));
          respond(req, res, store);
        })
        .catch(error => {
          store.dispatch(testAsyncError(error));
          respond(req, res, store);
        });
    },
  };

  return routeMapper[req.url] || null;
};

app.use('/client', express.static('build/client'));

app.use((req, res) => {
  // Creates empty store for each request
  const store = configureStore();

  const action = fetchData(req, res, store);

  if (action) {
    action();
  } else {
    respond(req, res, store);
  }
});

// Start listening
app.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line
  } else {
    console.info(`\n★★ Listening on port ${ port }. Open up http://${ hostname }:${ port }/ in your browser.\n`); // eslint-disable-line
  }
});
