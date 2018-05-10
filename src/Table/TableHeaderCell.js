import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from '../Link/Link';
import Text from '../Text/Text';

export default class TableHeaderCell extends Component {
  static propTypes = {
    /** SKIP */
    children: PropTypes.node,
    /** Applies styling indication that this column is sortable */
    sortable: PropTypes.bool,
    /** Applies styling indication that this column is currently being sorted */
    sorted: PropTypes.bool,
  };

  render() {
    const { children, sortable, sorted, ...rest } = this.props;

    return (
      <Text { ...rest }
          Component="th"
          className="Table__header-cell"
          size="small"
          strong
          uppercase>
        { sortable ? (
          <Link active={ sorted }>
            { children }
          </Link>
        ) : (
          children
        ) }
      </Text>
    );
  }
}
