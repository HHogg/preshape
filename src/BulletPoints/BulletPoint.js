import React, { Component } from 'react';
import Base from '../Base/Base';

export default class BulletPoint extends Component {
  render() {
    return (
      <Base Component="li" { ...this.props } className="BulletPoints__point" />
    );
  }
}
