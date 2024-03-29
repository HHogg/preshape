import {
  CodeBlock,
  CodeWindow,
  TypeTheme,
  themes,
  useThemeContext,
  Code,
  Article,
  ArticleSection,
  ArticleHeading,
  ArticleParagraph,
} from 'preshape';
import { ColorProps } from '../components/Color/Color';
import { ColorList } from '../components/Color/ColorList';
import { Page } from '../components/Page/Page';

const paletteTheme = (theme: TypeTheme): ColorProps[] => [
  {
    name: 'Background Shade 1',
    css: '--color-background--shade-1',
    js: 'colorBackgroundShade1',
    prop: 'background-shade-1',
    value: themes[theme].colorBackgroundShade1,
    textColor: 'text-shade-1',
  },
  {
    name: 'Background Shade 2',
    css: '--color-background--shade-2',
    js: 'colorBackgroundShade2',
    prop: 'background-shade-2',
    value: themes[theme].colorBackgroundShade2,
    textColor: 'text-shade-1',
  },
  {
    name: 'Background Shade 3',
    css: '--color-background--shade-3',
    js: 'colorBackgroundShade3',
    prop: 'background-shade-3',
    value: themes[theme].colorBackgroundShade3,
    textColor: 'text-shade-1',
  },
  {
    name: 'Background Shade 4',
    css: '--color-background--shade-4',
    js: 'colorBackgroundShade4',
    prop: 'background-shade-4',
    value: themes[theme].colorBackgroundShade4,
    textColor: 'text-shade-1',
  },
  {
    name: 'Text Shade 1',
    css: '--color-text--shade-1',
    js: 'colorTextShade1',
    prop: 'text-shade-1',
    value: themes[theme].colorTextShade1,
    textColor: 'background-shade-1',
  },
  {
    name: 'Text Shade 2',
    css: '--color-text--shade-2',
    js: 'colorTextShade2',
    prop: 'text-shade-2',
    value: themes[theme].colorTextShade2,
    textColor: 'background-shade-1',
  },
  {
    name: 'Text Shade 3',
    css: '--color-text--shade-3',
    js: 'colorTextShade3',
    prop: 'text-shade-3',
    value: themes[theme].colorTextShade3,
    textColor: 'background-shade-1',
  },

  {
    name: 'Accent Shade 1',
    css: '--color-accent--shade-1',
    js: 'colorAccentShade1',
    prop: 'accent-shade-1',
    value: themes[theme].colorAccentShade1,
  },
  {
    name: 'Accent Shade 2',
    css: '--color-accent--shade-2',
    js: 'colorAccentShade2',
    prop: 'accent-shade-2',
    value: themes[theme].colorAccentShade2,
  },
  {
    name: 'Accent Shade 3',
    css: '--color-accent--shade-3',
    js: 'colorAccentShade3',
    prop: 'accent-shade-3',
    value: themes[theme].colorAccentShade3,
  },
  {
    name: 'Accent Shade 4',
    css: '--color-accent--shade-4',
    js: 'colorAccentShade4',
    prop: 'accent-shade-4',
    value: themes[theme].colorAccentShade4,
  },
  {
    name: 'Accent Shade 5',
    css: '--color-accent--shade-5',
    js: 'colorAccentShade5',
    prop: 'accent-shade-5',
    value: themes[theme].colorAccentShade5,
  },
];

const themeGrouped = (theme: TypeTheme) => [
  {
    name: 'Background',
    description: 'Colors used for backgrounds.',
    children: paletteTheme(theme).filter((item) =>
      item.name.includes('Background')
    ),
  },
  {
    name: 'Text',
    description: 'Colors used for text.',
    children: paletteTheme(theme).filter((item) => item.name.includes('Text')),
  },
  {
    name: 'Accent',
    description: 'Colors used for accents.',
    children: paletteTheme(theme).filter((item) =>
      item.name.includes('Accent')
    ),
  },
];

export const ThemesPage = () => {
  const { theme, themeOpposite, colors } = useThemeContext();

  return (
    <Page
      title="Themes"
      description="Themes are a collection of colors that can be used to style components."
      summary={[{ name: 'Palette', children: themeGrouped(theme) }]}
    >
      <Article>
        <ArticleSection>
          <ArticleHeading>Provider</ArticleHeading>

          <CodeWindow>
            <CodeBlock>{`
import { ThemeProvider } from 'preshape';

<ThemeProvider defaultTheme="day">
    ...
</ThemeProvider>
`}</CodeBlock>
          </CodeWindow>

          <ArticleParagraph>
            Wrapping the entire application with the theme provider will allow
            components to react to the theme. The theme provider accepts a{' '}
            <Code>defaultTheme</Code> prop, which can be either{' '}
            <Code>"day"</Code> or <Code>"night"</Code>. The provider also stores
            the theme in local storage, so that the theme can be persisted
            between page loads.
          </ArticleParagraph>

          <CodeWindow>
            <CodeBlock>{`
import { useThemeContext, ThemeSwitcher } from 'preshape';

<ThemeSwitcher />

const { theme, themeOpposite, colors } = useThemeContext();

console.log(theme); // "${theme}"
console.log(themeOpposite); // "${themeOpposite}"
console.log(colors); // { colorAccentShade1: ${colors.colorAccentShade1}, ... }

`}</CodeBlock>
          </CodeWindow>

          <ArticleParagraph>
            Provided is also a <Code>useThemeContext()</Code> hook, which
            returns the current theme, the opposite theme, and the current theme
            colors. As well as a <Code>{`<ThemeSwitcher />`}</Code> component
            which can be used to toggle the theme.
          </ArticleParagraph>

          <CodeWindow>
            <CodeBlock>{`
<ThemeProvider theme="day">
  <LogTheme /> // "day"

  <ThemeProvider theme="night">
    <LogTheme /> // "night"
  </ThemeProvider>
</ThemeProvider>
`}</CodeBlock>
          </CodeWindow>

          <ArticleParagraph>
            <Code>{`<ThemeProvider />`}</Code> can be nested, and the closest{' '}
            <Code>{`<ThemeProvider />`}</Code> will be used by descendants,
            however the top most <Code>{`<ThemeProvider />`}</Code> theme will
            be used to control the overall application theme and listen for
            system theme changes.
          </ArticleParagraph>
        </ArticleSection>

        <ArticleSection>
          <ArticleHeading>Palette</ArticleHeading>

          <ArticleParagraph>
            All of the colors, whether used as CSS variables or through the
            component props react to the chosen theme (Day or Night). The
            following colors use the semantic theme prop values, for example{' '}
            <Code>"background-shade-1"</Code>. Try using the theme toggle above,
            to see them change.
          </ArticleParagraph>

          {themeGrouped(theme).map(({ name, description, children }) => (
            <ColorList
              key={name}
              margin="x10"
              name={name}
              description={description}
              colors={children}
            />
          ))}
        </ArticleSection>
      </Article>
    </Page>
  );
};
