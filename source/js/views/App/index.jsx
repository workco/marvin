import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/Global/Menu';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Menu />

        <div className='Page'>
          { children }
        </div>
      </div>
    );
  }
}
