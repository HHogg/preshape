import * as React from 'react' ;
import {
  colorBlack,
  colorDarkShade1,
  colorDarkShade2,
  colorDarkShade3,
  colorHighlight,
  colorWhite,
  colorLightShade1,
  colorLightShade2,
  colorLightShade3,
  colorAccent1Shade1,
  colorAccent1Shade2,
  colorAccent1Shade3,
  colorAccent1Shade4,
  colorAccent1Shade5,
  colorAccent2Shade1,
  colorAccent2Shade2,
  colorAccent2Shade3,
  colorAccent2Shade4,
  colorAccent2Shade5,
  colorPositiveShade1,
  colorPositiveShade2,
  colorPositiveShade3,
  colorPositiveShade4,
  colorPositiveShade5,
  colorNegativeShade1,
  colorNegativeShade2,
  colorNegativeShade3,
  colorNegativeShade4,
  colorNegativeShade5,
  useMatchMedia,
  Code,
  Grid,
  Motion,
  Link,
  Text,
  TypeColor,
} from 'preshape';
import LandingSection, { Props } from '../Landing/LandingSection';

const palette: {
  name: string;
  css: string;
  js: string;
  value: string;
  textColor?: TypeColor;
}[] = [{
  name: 'Black',
  css: '--color-black',
  js: 'colorBlack',
  value: colorBlack,
}, {
  name: 'White',
  css: '--color-white',
  js: 'colorWhite',
  value: colorWhite,
  textColor: 'dark-shade-1',
}, {
  name: 'Highlight',
  css: '--color-highlight',
  js: 'colorHighlight',
  value: colorHighlight,
  textColor: 'dark-shade-1',
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
  name: 'Light (Shade 1)',
  css: '--color-light--shade-1',
  js: 'colorLightShade1',
  value: colorLightShade1,
  textColor: 'dark-shade-1',
}, {
  name: 'Light (Shade 2)',
  css: '--color-light--shade-2',
  js: 'colorLightShade2',
  value: colorLightShade2,
  textColor: 'dark-shade-1',
}, {
  name: 'Light (Shade 3)',
  css: '--color-light--shade-3',
  js: 'colorLightShade3',
  value: colorLightShade3,
  textColor: 'dark-shade-1',
}, {
  name: 'Accent 1 (Shade 1)',
  css: '--color-accent--shade-1',
  js: 'colorAccent1Shade1',
  value: colorAccent1Shade1,
  textColor: 'text-shade-1',
}, {
  name: 'Accent 1 (Shade 2)',
  css: '--color-accent--shade-2',
  js: 'colorAccent1Shade2',
  value: colorAccent1Shade2,
  textColor: 'text-shade-1',
}, {
  name: 'Accent 1 (Shade 3)',
  css: '--color-accent--shade-3',
  js: 'colorAccent1Shade3',
  value: colorAccent1Shade3,
}, {
  name: 'Accent 1 (Shade 4)',
  css: '--color-accent--shade-4',
  js: 'colorAccent1Shade4',
  value: colorAccent1Shade4,
}, {
  name: 'Accent 1 (Shade 5)',
  css: '--color-accent--shade-5',
  js: 'colorAccent1Shade5',
  value: colorAccent1Shade5,
}, {
  name: 'Accent 2 (Shade 1)',
  css: '--color-accent--shade-1',
  js: 'colorAccent2Shade1',
  value: colorAccent2Shade1,
  textColor: 'text-shade-1',
}, {
  name: 'Accent 2 (Shade 2)',
  css: '--color-accent--shade-2',
  js: 'colorAccent2Shade2',
  value: colorAccent2Shade2,
  textColor: 'text-shade-1',
}, {
  name: 'Accent 2 (Shade 3)',
  css: '--color-accent--shade-3',
  js: 'colorAccent2Shade3',
  value: colorAccent2Shade3,
}, {
  name: 'Accent 2 (Shade 4)',
  css: '--color-accent--shade-4',
  js: 'colorAccent2Shade4',
  value: colorAccent2Shade4,
}, {
  name: 'Accent 2 (Shade 5)',
  css: '--color-accent--shade-5',
  js: 'colorAccent2Shade5',
  value: colorAccent2Shade5,
}, {
  name: 'Positive (Shade 1)',
  css: '--color-positive--shade-1',
  js: 'colorPositiveShade1',
  value: colorPositiveShade1,
  textColor: 'text-shade-1',
}, {
  name: 'Positive (Shade 2)',
  css: '--color-positive--shade-2',
  js: 'colorPositiveShade2',
  value: colorPositiveShade2,
  textColor: 'text-shade-1',
}, {
  name: 'Positive (Shade 3)',
  css: '--color-positive--shade-3',
  js: 'colorPositiveShade3',
  value: colorPositiveShade3,
}, {
  name: 'Positive (Shade 4)',
  css: '--color-positive--shade-4',
  js: 'colorPositiveShade4',
  value: colorPositiveShade4,
}, {
  name: 'Positive (Shade 5)',
  css: '--color-positive--shade-5',
  js: 'colorPositiveShade5',
  value: colorPositiveShade5,
}, {
  name: 'Negative (Shade 1)',
  css: '--color-negative--shade-1',
  js: 'colorNegativeShade1',
  value: colorNegativeShade1,
  textColor: 'text-shade-1',
}, {
  name: 'Negative (Shade 2)',
  css: '--color-negative--shade-2',
  js: 'colorNegativeShade2',
  value: colorNegativeShade2,
  textColor: 'text-shade-1',
}, {
  name: 'Negative (Shade 3)',
  css: '--color-negative--shade-3',
  js: 'colorNegativeShade3',
  value: colorNegativeShade3,
}, {
  name: 'Negative (Shade 4)',
  css: '--color-negative--shade-4',
  js: 'colorNegativeShade4',
  value: colorNegativeShade4,
}, {
  name: 'Negative (Shade 5)',
  css: '--color-negative--shade-5',
  js: 'colorNegativeShade5',
  value: colorNegativeShade5,
}];

export default (props: Props) => {
  const match = useMatchMedia(['600px', '1000px']);

  return (
    <LandingSection { ...props }>
      <Text margin="x8">
        A minimal set of colors to provide clear contrast across
        the Day and Night themes.
        All colors are from the optimised open source <Link href="https://yeun.github.io/open-color/" isTextLink>Open Color</Link> scheme.
      </Text>

      <Grid
          gap="x2"
          repeat="30"
          repeatWidth="1fr">
        { palette.map(({ css, js, name, value, textColor = 'light-shade-1' }) => (
          <Motion
              borderColor="background-shade-2"
              borderRadius="x2"
              borderSize="x2"
              container
              flex="vertical"
              gap="x4"
              key={ value }
              padding="x3"
              style={ {
                backgroundColor: value,
                gridColumn: /(Accent|Negative|Positive)/.test(js)
                  ? (match({
                    '1000px': 'span 6',
                    '600px': /[1|2]$/.test(js) ? 'span 15' : 'span 10',
                  }) || 'span 30')
                  : (match({ '600px': 'span 10' }) || 'span 30'),
              } }
              textColor={ textColor }>
            <Text size="x2" strong>
              <Text>{ name }</Text>
              <Text>{ value }</Text>
            </Text>
            <Text size="x2">
              <Text><Code>var({ css })</Code></Text>
              <Text><Code>{ js }</Code></Text>
            </Text>
          </Motion>
        )) }
      </Grid>
    </LandingSection>
  );
};
