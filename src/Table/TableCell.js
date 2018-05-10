import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Text from '../Text/Text';

export default class TableCell extends Component {
  static propTypes = {
    /** SKIP */
    children: PropTypes.node,
    /** Applies styling indication that this column is currently being sorted */
    sorted: PropTypes.bool,
  };

  render() {
    const { sorted, ...rest } = this.props;

    return (
      <Text { ...rest }
          Component="td"
          className="Table__cell"
          strong={ sorted } />
    );
  }
}
