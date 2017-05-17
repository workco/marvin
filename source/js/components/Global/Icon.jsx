import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Load all icons
const svgIcons = require.context('../../../assets/icons', false, /.*\.svg$/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const icons = requireAll(svgIcons).reduce(
  (state, icon) => ({
    ...state,
    [icon.default.split('#')[1].replace('-usage', '')]: icon.default,
  }),
  {}
);

export default class Icon extends Component {
  render() {
    const { className, width, height, glyph, style } = this.props;

    return (
      <svg
        style={ style }
        className={ className }
        width={ parseInt(width, 10) }
        height={ parseInt(height, 10) }
      >
        <use xlinkHref={ icons[glyph] } />
      </svg>
    );
  }
}

Icon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Icon.defaultProps = {
  className: 'icon',
  height: 24,
  width: 24,
};
