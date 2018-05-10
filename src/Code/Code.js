import React, { Component } from 'react';
import Text from '../Text/Text';

export default class Code extends Component {
  render() {
    return (
      <Text { ...this.props } Component="code" monospace />
    );
  }
}
