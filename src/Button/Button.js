import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';
import './Button.css';

export default class Button extends Component {
  static propTypes = {
    /** Retains the Button in its active state */
    active: PropTypes.bool,
    /** Colours that is applied to the button to indicate the type of action */
    color: PropTypes.oneOf(['accent', 'negative', 'positive']),
    /** A styled disabled state that disables all interactions */
    disabled: PropTypes.bool,
    /** Visual style of the Button */
    style: PropTypes.oneOf(['fill', 'outline']),
  };

  static defaultProps = {
    color: 'accent',
    style: 'outline',
  };

  render() {
    const { active, color, style, ...rest } = this.props;
    const classes = classnames('Button', {
      'Button--active': active,
      [`Button--${color}`]: color,
      [`Button--${style}`]: style,
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
