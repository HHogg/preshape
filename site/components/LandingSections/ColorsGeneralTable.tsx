import * as React from 'react' ;
import {
  colorBlack,
  colorDarkShade1,
  colorDarkShade2,
  colorDarkShade3,
  colorWhite,
  colorLightShade1,
  colorLightShade2,
  colorLightShade3,
  colorAccent1Shade1,
  colorAccent1Shade2,
  colorAccent1Shade3,
  colorAccent2Shade1,
  colorAccent2Shade2,
  colorAccent2Shade3,
  colorPositiveShade1,
  colorPositiveShade2,
  colorPositiveShade3,
  colorNegativeShade1,
  colorNegativeShade2,
  colorNegativeShade3,
  colorHighlight,
} from 'preshape';
import ColorsTable, { Props, TypeColorVariables } from './ColorsTable';

export const variables: TypeColorVariables = [{
  name: 'Black',
  css: '--color-black',
  js: 'colorBlack',
  value: colorBlack,
}, {
  name: 'Dark (Shade 1)',
  css: '--color-dark--shade-1',
  js: 'colorDarkShade1',
  value: colorDarkShade1,
}, {
  name: 'Dark (Shade 2)',
  css: '--color-dark--shade-2',
  js: 'colorDarkShade2',
  value: colorDarkShade2,
}, {
  name: 'Dark (Shade 3)',
  css: '--color-dark--shade-3',
  js: 'colorDarkShade3',
  value: colorDarkShade3,
}, {
  name: 'White',
  css: '--color-white',
  js: 'colorWhite',
  value: colorWhite,
}, {
  name: 'Light (Shade 1)',
  css: '--color-light--shade-1',
  js: 'colorLightShade1',
  value: colorLightShade1,
}, {
  name: 'Light (Shade 2)',
  css: '--color-light--shade-2',
  js: 'colorLightShade2',
  value: colorLightShade2,
}, {
  name: 'Light (Shade 3)',
  css: '--color-light--shade-3',
  js: 'colorLightShade3',
  value: colorLightShade3,
}, {
  name: 'Accent 1 (Shade 1)',
  css: '--color-accent-1--shade-1',
  js: 'colorAccent1Shade1',
  value: colorAccent1Shade1,
}, {
  name: 'Accent 1 (Shade 2)',
  css: '--color-accent-1--shade-2',
  js: 'colorAccent1Shade2',
  value: colorAccent1Shade2,
}, {
  name: 'Accent 1 (Shade 3)',
  css: '--color-accent-1--shade-3',
  js: 'colorAccent1Shade3',
  value: colorAccent1Shade3,
}, {
  name: 'Accent 2 (Shade 1)',
  css: '--color-accent-2--shade-1',
  js: 'colorAccent2Shade1',
  value: colorAccent2Shade1,
}, {
  name: 'Accent 2 (Shade 2)',
  css: '--color-accent-2--shade-2',
  js: 'colorAccent2Shade2',
  value: colorAccent2Shade2,
}, {
  name: 'Accent 2 (Shade 3)',
  css: '--color-accent-2--shade-3',
  js: 'colorAccent2Shade3',
  value: colorAccent2Shade3,
}, {
  name: 'Positive (Shade 1)',
  css: '--color-positive--shade-1',
  js: 'colorPositiveShade1',
  value: colorPositiveShade1,
}, {
  name: 'Positive (Shade 2)',
  css: '--color-positive--shade-2',
  js: 'colorPositiveShade2',
  value: colorPositiveShade2,
}, {
  name: 'Positive (Shade 3)',
  css: '--color-positive--shade-3',
  js: 'colorPositiveShade3',
  value: colorPositiveShade3,
}, {
  name: 'Negative (Shade 1)',
  css: '--color-negative--shade-1',
  js: 'colorNegativeShade1',
  value: colorNegativeShade1,
}, {
  name: 'Negative (Shade 2)',
  css: '--color-negative--shade-2',
  js: 'colorNegativeShade2',
  value: colorNegativeShade2,
}, {
  name: 'Negative (Shade 3)',
  css: '--color-negative--shade-3',
  js: 'colorNegativeShade3',
  value: colorNegativeShade3,
}, {
  name: 'Highlight',
  css: '--color-highlight',
  js: 'colorHighlight',
  value: colorHighlight,
}];

export default (props: Omit<Props, 'variables'>) => {
  return (
    <ColorsTable { ...props } variables={ variables } />
  );
};
