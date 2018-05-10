import React, { Component } from 'react';
import Base from '../Base/Base';
import './Image.css';

export default class Image extends Component {
  render() {
    return (
      <Base { ...this.props }
          Component="img"
          className="Image" />
    );
  }
}
