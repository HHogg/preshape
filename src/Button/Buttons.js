import React, { Component } from 'react';
import Flex from '../Flex/Flex';

export default class Buttons extends Component {
  render() {
    return (
      <Flex { ...this.props }
          className="Buttons"
          direction="horizontal" />
    );
  }
}
