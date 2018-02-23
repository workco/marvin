import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';

@connect(state => ({
  counter: state.app.get('counter'),
}))
@translate(['common'])
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
    t: PropTypes.func,
    i18n: PropTypes.object,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  toggleLanguage = lng => () => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    const {
      counter,
      t,
    } = this.props;

    return (
      <div className='Home'>
        <h1>Marvin</h1>
        <p>
          Boilerplate for kicking off React/Redux applications.
        </p>

        <h2>About</h2>

        <p>
          Marvin is internal project by <a href='https://work.co'>Work & Co</a>.
          We love React and use it a lot. So Marvin is meant to be a starting point
          for our React projects. But as we love open source too, it is publicly
          available for anyone interested in using it.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/workco/react-redux-webpack2-boilerplate'>GitHub</a>
        </p>

        <hr />

        <h2>Examples</h2>

        <h3>Action</h3>
        <div className='Example'>
          <p>Counter: { counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase
          </button>
        </div>

        <h3>Background image</h3>
        <div className='Example'>
          <div className='BackgroundImgExample' />
        </div>

        <h3>Image imported to the component</h3>
        <div className='Example'>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>

        <h3>SVGs imported as react components</h3>
        <div className='Example'>
          <CircleSvg style={ { marginRight: 10 } } />
          <SquareSvg style={ { marginRight: 10 } } />
          <TriangleSvg />
        </div>

        <h3>internationalization</h3>
        <div className='Example'>
          <p>{t('content.text')}</p>
          <div>
            <button
              onClick={ this.toggleLanguage('en') }
            >
              en
            </button>
            <button
              onClick={ this.toggleLanguage('pt') }
            >
              pt
            </button>
          </div>
        </div>
      </div>
    );
  }
}
