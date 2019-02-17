import React, { Component } from 'react';
import { CodeBlock } from 'preshape';

export default class GuideCodeBlock extends Component {
  render() {
    return (
      <CodeBlock { ...this.props }
          backgroundColor="shade-2"
          color
          paddingHorizontal="x6"
          paddingVertical="x4"
          scrollable
          size="x1"
          theme="night" />
    );
  }
}
