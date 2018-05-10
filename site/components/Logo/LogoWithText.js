import React, { Component } from 'react';
import { Flex } from 'preshape';
import Logo from './Logo';

export default class LogoWithText extends Component {
  render() {
    return (
      <Flex { ...this.props }
          alignChildrenVertical="middle"
          direction="horizontal"
          gutter="x2">
        <Flex><Logo height="1.5rem" width="1.5rem" /></Flex>
        <Flex>Preshape</Flex>
      </Flex>
    );
  }
}
