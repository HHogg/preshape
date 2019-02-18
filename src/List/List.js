import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';
import './List.css';

export default class List extends Component {
  static propTypes = {
    gap: PropTypes.oneOf(['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
  };

  static defaultProps = {
    gap: 'x1',
  };

  render() {
    const { gap, ...rest } = this.props;
    const classes = classnames('List', `List--${gap}`);

    return (
      <Flex { ...rest }
          Component="ul"
          alignChildrenVertical="middle"
          className={ classes }
          direction="horizontal"
          gap={ gap }
          wrap />
    );
  }
}
