import React, { Component } from 'react';
import {
  borderSizeX1Px,
  borderSizeX2Px,
  borderSizeX1Rem,
  borderSizeX2Rem,
} from 'preshape';
import SizingTable from './SizingTable';

export const variables = [
  ['x1', borderSizeX1Px, borderSizeX1Rem],
  ['x2', borderSizeX2Px, borderSizeX2Rem],
].map(([size, px, rem]) => ({
  name: size,
  css: `--border-size--${size}`,
  js: `borderSize${size.toUpperCase()}Px / borderSize${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

export default class SizingBorderTable extends Component {
  render() {
    return (
      <SizingTable { ...this.props }
          name="Border Sizing"
          variables={ variables } />
    );
  }
}
