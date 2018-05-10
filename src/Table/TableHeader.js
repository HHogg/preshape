import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';

export default class TableHeader extends Component {
  static propTypes = {
    /** SKIP */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="thead" className="Table__header">
        { children }
      </Base>
    );
  }
}
