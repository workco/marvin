import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from 'components/Global/Menu';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import Projects from 'views/Projects';
import Education from 'views/Education';
import Skills from 'views/Skills';
import Experience from 'views/Experience';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  PROJECTS: `${ publicPath }projects`,
  EDUCATION: `${ publicPath }education`,
  SKILLS: `${ publicPath }skills`,
  EXPERIENCE: `${ publicPath }experience`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.ABOUT } component={ About } />
              <Route path={ routeCodes.PROJECTS } component={ Projects } />
              <Route path={ routeCodes.EDUCATION } component={ Education } />
              <Route path={ routeCodes.SKILLS } component={ Skills } />
              <Route path={ routeCodes.EXPERIENCE } component={ Experience } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
