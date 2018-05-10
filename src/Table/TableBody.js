import React, { Component } from 'react';
import Base from '../Base/Base';

export default class TableBody extends Component {
  render() {
    return (
      <Base { ...this.props } Component="tbody" className="Table__body" />
    );
  }
}
