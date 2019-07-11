import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/views/App/App';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';

const rootElement: HTMLElement | null = document.getElementById('root');

// By default, there is nothing to hydrate
// But if you are using react-snap, page will come pre-rendered
// and app can hydrate it
let shouldHydrate: boolean = false;

// Root element has elements, which means page came pre-rendered
// from server
if (rootElement instanceof HTMLElement) {
  shouldHydrate = rootElement.hasChildNodes();
}

if (shouldHydrate) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
