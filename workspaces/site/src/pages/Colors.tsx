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
  Link,
  Text,
  CodeBlock,
  CodeWindow,
} from 'preshape';
import { ColorProps } from '../components/Color/Color';
import { ColorList } from '../components/Color/ColorList';
import { Page } from '../components/Page/Page';
import { PageSection } from '../components/Page/PageSection';
import { PageSubtitle } from '../components/Page/PageSubtitle';

const palette: ColorProps[] = [
  {
    name: 'Black',
    css: '--color-black',
    js: 'colorBlack',
    prop: 'black',
    value: colorBlack,
  },
  {
    name: 'White',
    css: '--color-white',
    js: 'colorWhite',
    value: colorWhite,
    prop: 'white',
    textColor: 'dark-shade-1',
  },
  {
    name: 'Highlight',
    css: '--color-highlight',
    js: 'colorHighlight',
    value: colorHighlight,
    prop: 'highlight',
    textColor: 'dark-shade-1',
  },
  {
    name: 'Shade 1',
    css: '--color-dark--shade-1',
    js: 'colorDarkShade1',
    prop: 'dark-shade-1',
    value: colorDarkShade1,
  },
  {
    name: 'Shade 2',
    css: '--color-dark--shade-2',
    js: 'colorDarkShade2',
    prop: 'dark-shade-2',
    value: colorDarkShade2,
  },
  {
    name: 'Shade 3',
    css: '--color-dark--shade-3',
    js: 'colorDarkShade3',
    prop: 'dark-shade-3',
    value: colorDarkShade3,
  },
  {
    name: 'Shade 1',
    css: '--color-light--shade-1',
    js: 'colorLightShade1',
    value: colorLightShade1,
    prop: 'light-shade-1',
    textColor: 'dark-shade-1',
  },
  {
    name: 'Shade 2',
    css: '--color-light--shade-2',
    js: 'colorLightShade2',
    value: colorLightShade2,
    prop: 'light-shade-2',
    textColor: 'dark-shade-1',
  },
  {
    name: 'Shade 3',
    css: '--color-light--shade-3',
    js: 'colorLightShade3',
    value: colorLightShade3,
    prop: 'light-shade-3',
    textColor: 'dark-shade-1',
  },
  {
    name: 'Shade 1',
    css: '--color-accent-1--shade-1',
    js: 'colorAccent1Shade1',
    value: colorAccent1Shade1,
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 2',
    css: '--color-accent-1--shade-2',
    js: 'colorAccent1Shade2',
    value: colorAccent1Shade2,
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 3',
    css: '--color-accent-1--shade-3',
    js: 'colorAccent1Shade3',
    value: colorAccent1Shade3,
  },
  {
    name: 'Shade 4',
    css: '--color-accent-1--shade-4',
    js: 'colorAccent1Shade4',
    value: colorAccent1Shade4,
  },
  {
    name: 'Shade 5',
    css: '--color-accent-1--shade-5',
    js: 'colorAccent1Shade5',
    value: colorAccent1Shade5,
  },
  {
    name: 'Shade 1',
    css: '--color-accent-2--shade-1',
    js: 'colorAccent2Shade1',
    value: colorAccent2Shade1,
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 2',
    css: '--color-accent-2--shade-2',
    js: 'colorAccent2Shade2',
    value: colorAccent2Shade2,
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 3',
    css: '--color-accent-2--shade-3',
    js: 'colorAccent2Shade3',
    value: colorAccent2Shade3,
  },
  {
    name: 'Shade 4',
    css: '--color-accent-2--shade-4',
    js: 'colorAccent2Shade4',
    value: colorAccent2Shade4,
  },
  {
    name: 'Shade 5',
    css: '--color-accent-2--shade-5',
    js: 'colorAccent2Shade5',
    value: colorAccent2Shade5,
  },
  {
    name: 'Shade 1',
    css: '--color-positive--shade-1',
    js: 'colorPositiveShade1',
    value: colorPositiveShade1,
    prop: 'positive-shade-1',
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 2',
    css: '--color-positive--shade-2',
    js: 'colorPositiveShade2',
    value: colorPositiveShade2,
    prop: 'positive-shade-2',
    textColor: 'text-shade-1',
  },
  {
    name: 'Shade 3',
    css: '--color-positive--shade-3',
    js: 'colorPositiveShade3',
    value: colorPositiveShade3,
    prop: 'positive-shade-3',
  },
  {
    name: 'Shade 4',
    css: '--color-positive--shade-4',
    js: 'colorPositiveShade4',
    value: colorPositiveShade4,
    prop: 'positive-shade-4',
  },
  {
    name: 'Shade 5',
    css: '--color-positive--shade-5',
    js: 'colorPositiveShade5',
    value: colorPositiveShade5,
    prop: 'positive-shade-5',
  },
  {
    name: 'Shade 1',
    css: '--color-negative--shade-1',
    js: 'colorNegativeShade1',
    value: colorNegativeShade1,
    textColor: 'text-shade-1',
    prop: 'negative-shade-1',
  },
  {
    name: 'Shade 2',
    css: '--color-negative--shade-2',
    js: 'colorNegativeShade2',
    value: colorNegativeShade2,
    textColor: 'text-shade-1',
    prop: 'negative-shade-2',
  },
  {
    name: 'Shade 3',
    css: '--color-negative--shade-3',
    js: 'colorNegativeShade3',
    value: colorNegativeShade3,
    prop: 'negative-shade-3',
  },
  {
    name: 'Shade 4',
    css: '--color-negative--shade-4',
    js: 'colorNegativeShade4',
    value: colorNegativeShade4,
    prop: 'negative-shade-4',
  },
  {
    name: 'Shade 5',
    css: '--color-negative--shade-5',
    js: 'colorNegativeShade5',
    value: colorNegativeShade5,
    prop: 'negative-shade-5',
  },
];

const paletteGrouped = [
  {
    name: 'Core',
    description: 'The two colors that exists everywhere.',
    children: [palette[0], palette[1]],
  },
  {
    name: 'Dark',
    description:
      'Dark colors which should be used most of the time for dark things.',
    children: palette.filter(({ css }) => css.includes('dark')),
  },
  {
    name: 'Light',
    description:
      'Light colors which should be used most of the time for light things.',
    children: palette.filter(({ css }) => css.includes('light')),
  },
  {
    name: 'Accent Day',
    description:
      'The accent colors for day mode. These are the colors that should be used sparingly.',
    children: palette.filter(({ css }) => css.includes('accent-1')),
  },
  {
    name: 'Accent Night',
    description:
      'The accent colors for night mode. These are the colors that should be used sparingly.',
    children: palette.filter(({ css }) => css.includes('accent-2')),
  },
  {
    name: 'Positive',
    description: 'Colors that indicate a positive or successful state.',
    children: palette.filter(({ css }) => css.includes('positive')),
  },
  {
    name: 'Negative',
    description: 'Colors that indicate a negative or destructive state.',
    children: palette.filter(({ css }) => css.includes('negative')),
  },
  {
    name: 'Miscellaneous',
    description: 'Colors that are used for miscellaneous things.',
    children: [palette[2]],
  },
];

export const ColorsPage = () => {
  return (
    <Page
      title="Colors"
      description="A minimal set of semantic and themeable colors."
      summary={[{ name: 'Palette', children: paletteGrouped }]}
    >
      <PageSection>
        <PageSubtitle>Palette</PageSubtitle>
        <Text>
          A minimal set of colors to provide clear contrast across the Day and
          Night themes. All colors are from the optimised open source{' '}
          <Link href="https://yeun.github.io/open-color/" isTextLink>
            Open Color
          </Link>{' '}
          scheme.
        </Text>
      </PageSection>

      <PageSection>
        <Text id="Example usage" margin="x4" size="x6" strong>
          Example usage
        </Text>

        <CodeWindow>
          <CodeBlock language="css">{`
/* CSS */
.CustomClass {
  background-color: var(--color-accent-shade-1);
}
          `}</CodeBlock>

          <CodeBlock language="tsx">{`
/* React */
<Box backgroundColor="accent-shade-1" />
          `}</CodeBlock>

          <CodeBlock language="typescript">{`
/* JS Variables */
import { colorAccent1Shade1, colorAccent1Shade3 } from 'preshape';

colorAccent1Shade1; // ${colorAccent1Shade1}
colorAccent1Shade3; // ${colorAccent1Shade3}
          `}</CodeBlock>
        </CodeWindow>
      </PageSection>

      {paletteGrouped.map(({ name, description, children }) => (
        <PageSection key={name}>
          <ColorList name={name} description={description} colors={children} />
        </PageSection>
      ))}
    </Page>
  );
};
