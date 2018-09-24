import React, { Component } from 'react';
import { Base } from 'preshape';

export default class ComponentExample extends Component {
  render() {
    return (
      <Base { ...this.props }
          backgroundColor="shade-2"
          container
          margin="x6"
          padding="x6" />
    );
  }
}
