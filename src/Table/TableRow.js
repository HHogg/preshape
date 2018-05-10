import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

export default class TableRow extends Component {
  static propTypes = {
    /** SKIP */
    onClick: PropTypes.func,
  };

  render() {
    const classes = classnames('Table__row', {
      'Table__row--clickable': this.props.onClick,
    });

    return (
      <Base { ...this.props }
          Component="tr"
          className={ classes } />
    );
  }
}
