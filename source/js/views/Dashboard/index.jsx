import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testAction, testAsync } from 'actions/app';
import bookImg from '../../../assets/img/book2.jpg';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      counter,
    } = this.props;

    return (
      <div className='Dashboard'>
        <h2>Examples</h2>
        <hr />
        <div>
          <h3>Synchronous action</h3>
          <p>{ counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase counter
          </button>
        </div>
        <hr />
        <div>
          <h3>Async action example</h3>
          <p>{ asyncData }</p>
          { asyncLoading && <p>Loading...</p> }
          { asyncError && <p>Error: { asyncError }</p> }
          <button
            disabled={ asyncLoading }
            onClick={ this.handleAsyncButtonClick }
          >
            Get async data
          </button>
        </div>
        <hr />
        <div>
          <h3>Background image</h3>
          <div className='BackgroundImgExample' />

          <h3>Image imported to the component</h3>
          <img src={ bookImg } alt='' className='ImgExample' />
        </div>
      </div>
    );
  }
}
