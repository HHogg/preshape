import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';

export default class Buttons extends Component {
  static propTypes = {
    /** Spacing applied between child Button items, values are global spacing variables. */
    gutter: PropTypes.oneOf(['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /**
     * Configures the children Buttons to be joined together.
     */
    joined: PropTypes.bool,
  };

  render() {
    const { gutter, joined, ...rest } = this.props;
    const classes = classnames('Buttons', {
      'Buttons--joined': joined,
    });

    return (
      <Flex { ...rest }
          className={ classes }
          direction="horizontal"
          gutter={ joined ? null : (gutter || 'x1') } />
    );
  }
}
