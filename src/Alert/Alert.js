import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Alert.css';

export default class Alert extends Component {
  static propTypes = {
    /** Colours that is applied to the Alert to indicate the type of action */
    color: PropTypes.oneOf(['accent', 'negative', 'positive']),
    /** Whether the alert is flashing, a great way to give it extra attention. */
    flash: PropTypes.bool,
    /** Style of how the alert is presented */
    style: PropTypes.oneOf(['outline', 'solid']),
  };

  render() {
    const { color, flash, style, ...rest } = this.props;
    const classes = classnames('Alert', `Alert--${color}`, `Alert--${style}`, {
      'Alert--flash': flash,
    });

    return (
      <Base { ...rest }
          borderSize={ style === 'outline' ? 'x2' : null }
          className={ classes } />
    );
  }
}
