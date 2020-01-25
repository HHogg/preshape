import * as React from 'react' ;
import shuffle from 'lodash.shuffle';
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
  colorAccent2Shade1,
  colorAccent2Shade2,
  colorAccent2Shade3,
  colorPositiveShade1,
  colorPositiveShade2,
  colorPositiveShade3,
  colorNegativeShade1,
  colorNegativeShade2,
  colorNegativeShade3,
  Base,
  Code,
  Flex,
  Grid,
  Icon,
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
}, {
  name: 'Accent 1 (Shade 2)',
  css: '--color-accent--shade-2',
  js: 'colorAccent1Shade2',
  value: colorAccent1Shade2,
}, {
  name: 'Accent 1 (Shade 3)',
  css: '--color-accent--shade-3',
  js: 'colorAccent1Shade3',
  value: colorAccent1Shade3,
}, {
  name: 'Accent 2 (Shade 1)',
  css: '--color-accent--shade-1',
  js: 'colorAccent2Shade1',
  value: colorAccent2Shade1,
}, {
  name: 'Accent 2 (Shade 2)',
  css: '--color-accent--shade-2',
  js: 'colorAccent2Shade2',
  value: colorAccent2Shade2,
}, {
  name: 'Accent 2 (Shade 3)',
  css: '--color-accent--shade-3',
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
}];

const paletteShuffled = shuffle(palette);

export default (props: Props) => {
  const [isShuffled, setIsShuffled] = React.useState(true);
  const colors = isShuffled ? paletteShuffled : palette;

  return (
    <LandingSection { ...props }>
      <Text margin="x8">
        A minimal set of colors to provide clear contrast across
        the Day and Night themes.
        All colors are from the optimised open source <Link href="https://yeun.github.io/open-color/" underline>Open Color</Link> scheme.
      </Text>


      <Text align="end" margin="x4">
        <Link onClick={ () => setIsShuffled(!isShuffled) } underline>
          <Flex alignChildren="middle" direction="horizontal" gap="x1">
            <Flex><Text>{ isShuffled ? 'Unshuffle' : 'Shuffle' }</Text></Flex>
            <Flex><Icon name="Shuffle" size="1rem" /></Flex>
          </Flex>
        </Link>
      </Text>

      <Grid
          gap="x2"
          repeatWidthMin="240px">
        { colors.map(({ css, js, name, value, textColor = 'light-shade-1' }) => (
          <Motion
              borderColor="background-shade-2"
              borderSize="x2"
              container
              gap="x4"
              key={ value }
              overflow="hidden"
              padding="x3"
              positionTransition
              style={ { backgroundColor: value } }
              textColor={ textColor }>
            { Array.from({ length: 4 }).map((_, index) => (
              <Base
                  absolute="fullscreen"
                  backgroundColor={ textColor }
                  key={ index }
                  style={ {
                    opacity: 0.02,
                    transformOrigin: index % 2 ? 'top left' : 'bottom left',
                    transform: `rotate(${Math.random() * (index % 2 ? 35 : -35)}deg) scale(1.5)`,
                  } } />
            )) }

            <Text align="end" margin="x2" strong>{ value }</Text>
            <Text size="x1" tag="div">
              <Text strong>{ name }</Text>
              <Text><Code>{ css }</Code></Text>
              <Text><Code>{ js }</Code></Text>
            </Text>
          </Motion>
        )) }
      </Grid>
    </LandingSection>
  );
};
