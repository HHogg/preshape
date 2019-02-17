import React, { Component } from 'react';
import Base from '../Base/Base';

export default class Form extends Component {
  render() {
    return (
      <Base { ...this.props } Component="form" />
    );
  }
}
