import React, { Component } from 'react';
import Base from '../Base/Base';

export default class Labels extends Component {
  render() {
    return (
      <Base { ...this.props } className="Labels" />
    );
  }
}
