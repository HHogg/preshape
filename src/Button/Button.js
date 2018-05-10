import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';
import './Button.css';

export default class Button extends Component {
  static propTypes = {
    /** Colours that is applied to the button to indicate the type of action */
    color: PropTypes.oneOf(['accent', 'negative', 'positive']),
    /** A styled disabled state that disables all interactions */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    color: 'accent',
  };

  render() {
    const { color, ...rest } = this.props;
    const classes = classnames('Button', {
      [`Button--${color}`]: color,
    });

    return (
      <Flex { ...rest }
          Component="button"
          alignChildren="middle"
          className={ classes }
          color
          direction="horizontal"
          grow />
    );
  }
}
