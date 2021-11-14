import * as React from 'react';
import {
  borderSizeX1Px,
  borderSizeX2Px,
  borderSizeX3Px,
  borderSizeX1Rem,
  borderSizeX2Rem,
  borderSizeX3Rem,
} from 'preshape';
import SizingTable, { Props, TypeSizingVariables } from './SizingTable';

export const variables: TypeSizingVariables = (
  [
    ['x1', borderSizeX1Px, borderSizeX1Rem],
    ['x2', borderSizeX2Px, borderSizeX2Rem],
    ['x3', borderSizeX3Px, borderSizeX3Rem],
  ] as [string, number, number][]
).map(([size, px, rem]) => ({
  name: size,
  css: `--border-size--${size}`,
  js: `borderSize${size.toUpperCase()}Px / borderSize${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

const SizingBorderTable = (props: Omit<Props, 'variables'>) => {
  return <SizingTable {...props} name="Border" variables={variables} />;
};

export default SizingBorderTable;
