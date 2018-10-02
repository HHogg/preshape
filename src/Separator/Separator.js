import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Separator.css';

export default class Separator extends Component {
  static propTypes = {
    /**
     * Border colour to be applied, shades are taken from the current
     * theme. A value of true will reapply the current colour value.
     */
    borderColor: PropTypes.oneOf([
      true,
      'shade-1',
      'shade-2',
      'shade-3',
    ]),
    /** Thickness of the border to be applied */
    borderSize: PropTypes.oneOf(['x1', 'x2']),
  };

  static defaultProps = {
    borderColor: true,
    borderSize: 'x1',
  };

  render() {
    return (
      <Base { ...this.props }
          Component="div"
          className="Separator" />
    );
  }
}
