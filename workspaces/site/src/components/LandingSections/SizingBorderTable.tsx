import * as React from 'react' ;
import {
  borderSizeX1Px,
  borderSizeX2Px,
  borderSizeX1Rem,
  borderSizeX2Rem,
} from 'preshape';
import SizingTable, { Props, TypeSizingVariables } from './SizingTable';

export const variables: TypeSizingVariables = ([
  ['x1', borderSizeX1Px, borderSizeX1Rem],
  ['x2', borderSizeX2Px, borderSizeX2Rem],
] as [string, number, number][]).map(([size, px, rem]) => ({
  name: size,
  css: `--border-size--${size}`,
  js: `borderSize${size.toUpperCase()}Px / borderSize${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

export default (props: Omit<Props, 'variables'>) => {
  return (
    <SizingTable { ...props }
        name="Border"
        variables={ variables } />
  );
};
