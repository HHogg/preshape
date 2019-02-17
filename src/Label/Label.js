import React, { Component } from 'react';
import Base from '../Base/Base';
import Text from '../Text/Text';
import './Label.css';

export default class Label extends Component {
  render() {
    return (
      <Base className="Label">
        <Text { ...this.props }
            size="x1"
            strong />
      </Base>
    );
  }
}
