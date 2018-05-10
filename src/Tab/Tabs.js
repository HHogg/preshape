import React, { Component } from 'react';
import Flex from '../Flex/Flex';
import './Tabs.css';

export default class Tabs extends Component {
  render() {
    return (
      <Flex { ...this.props } className="Tabs" />
    );
  }
}
