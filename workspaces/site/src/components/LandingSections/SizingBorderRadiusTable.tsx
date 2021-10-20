import * as React from 'react' ;
import {
  borderRadiusSizeX1Px,
  borderRadiusSizeX2Px,
  borderRadiusSizeX3Px,
  borderRadiusSizeX1Rem,
  borderRadiusSizeX2Rem,
  borderRadiusSizeX3Rem,
} from 'preshape';
import SizingTable, { Props, TypeSizingVariables } from './SizingTable';

export const variables: TypeSizingVariables = ([
  ['x1', borderRadiusSizeX1Px, borderRadiusSizeX1Rem],
  ['x2', borderRadiusSizeX2Px, borderRadiusSizeX2Rem],
  ['x3', borderRadiusSizeX3Px, borderRadiusSizeX3Rem],
] as [string, number, number][]).map(([size, px, rem]) => ({
  name: size,
  css: `--border-radius-size--${size}`,
  js: `borderRadiusSize${size.toUpperCase()}Px / borderRadiusSize${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

export default (props: Omit<Props, 'variables'>) => {
  return (
    <SizingTable { ...props }
        name="Border Radius"
        shape="square"
        variables={ variables } />
  );
};
