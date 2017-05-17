import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { routeCodes } from '../../routes';
import logoImg from '../../../assets/img/logo_small.png';

export default class Menu extends Component {
  componentWillMount() {
    const logoPath = '../../../assets/img/logo_small.png';
    this.setState({ logoPath });
  }

  render() {
    return (
      <div className='menu'>
        <IndexLink to={ routeCodes.DASHBOARD } className='logo-container'>
          <img className='rr-logo' src={ logoImg } alt='Rolls Royce' />
        </IndexLink>
      </div>
    );
  }
}
