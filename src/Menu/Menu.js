import React, { Component } from 'react';
import Flex from '../Flex/Flex';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <Flex { ...this.props }
          className="Menu"
          direction="horizontal"
          gutter="x3" />
    );
  }
}
