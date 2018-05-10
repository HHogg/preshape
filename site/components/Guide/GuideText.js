import React, { Component } from 'react';
import { Text } from 'preshape';

export default class GuideText extends Component {
  render() {
    return (
      <Text { ...this.props } margin="x4" />
    );
  }
}
