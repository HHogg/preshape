import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';

export default class GridItem extends Component {
  static propTypes = {
    /** Specifies a specific column this item should be in. */
    column: PropTypes.number,
    /** Specifies a specific row this item should be in. */
    row: PropTypes.number,
  };

  render() {
    const {
      column,
      row,
      ...rest
    } = this.props;

    const style = {
      gridColumn: column,
      gridRow: row,
    };

    return (
      <Base { ...rest } className="GridItem" style={ style } />
    );
  }
}
