import React, { Component } from 'react';
import Text from '../Text/Text';
import './BlockQuote.css';

export default class BlockQuote extends Component {
  render() {
    return (
      <Text
          color="shade-3"
          paddingHorizontal="x6"
          paddingVertical="x1"
          { ...this.props }
          Component="blockquote"
          className="BlockQuote" />
    );
  }
}
