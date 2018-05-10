import React, { Component } from 'react';
import Flex from '../Flex/Flex';

export default class TabContent extends Component {
  render() {
    return (
      <Flex { ...this.props } className="TabContent" />
    );
  }
}
