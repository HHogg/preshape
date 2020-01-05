import * as React from 'react' ;
import { themes, TypeTheme } from 'preshape';
import ColorsTable, { Props as ColorsTableProps, TypeColorVariables } from './ColorsTable';

export const variables: (theme: TypeTheme) => TypeColorVariables = (theme) => [{
  name: 'Background (Shade 1)',
  css: '--color-background--shade-1',
  js: `themes.${theme}.colorBackgroundShade1`,
  value: themes[theme].colorBackgroundShade1,
}, {
  name: 'Background (Shade 2)',
  css: '--color-background--shade-2',
  js: `themes.${theme}.colorBackgroundShade2`,
  value: themes[theme].colorBackgroundShade2,
}, {
  name: 'Background (Shade 3)',
  css: '--color-background--shade-3',
  js: `themes.${theme}.colorBackgroundShade3`,
  value: themes[theme].colorBackgroundShade3,
}, {
  name: 'Text (Shade 1)',
  css: '--color-text--shade-1',
  js: `themes.${theme}.colorTextShade1`,
  value: themes[theme].colorTextShade1,
}, {
  name: 'Text (Shade 2)',
  css: '--color-text--shade-2',
  js: `themes.${theme}.colorTextShade2`,
  value: themes[theme].colorTextShade2,
}, {
  name: 'Text (Shade 3)',
  css: '--color-text--shade-3',
  js: `themes.${theme}.colorTextShade3`,
  value: themes[theme].colorTextShade3,
}, {
  name: 'Accent (Shade 1)',
  css: '--color-accent--shade-1',
  js: `themes.${theme}.colorAccentShade1`,
  value: themes[theme].colorAccentShade1,
}, {
  name: 'Accent (Shade 2)',
  css: '--color-accent--shade-2',
  js: `themes.${theme}.colorAccentShade2`,
  value: themes[theme].colorAccentShade2,
}, {
  name: 'Accent (Shade 3)',
  css: '--color-accent--shade-3',
  js: `themes.${theme}.colorAccentShade3`,
  value: themes[theme].colorAccentShade3,
}];

interface Props extends ColorsTableProps {
  theme: TypeTheme;
}

export default (props: Props) => {
  const { theme, ...rest } = props;

  return (
    <ColorsTable { ...rest }
        variables={ variables(theme) } />
  );
};
