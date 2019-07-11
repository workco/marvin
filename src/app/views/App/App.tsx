import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import store from '../../store';

import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';


const App: React.FC = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/404'>404</Link>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='*' component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);

