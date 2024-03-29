import {
  Article,
  ArticleHeading,
  ArticleSection,
  CodeBlock,
  CodeWindow,
  borderRadiusSizeX1Px,
  borderRadiusSizeX1Rem,
  borderRadiusSizeX2Px,
  borderRadiusSizeX2Rem,
  borderRadiusSizeX3Px,
  borderRadiusSizeX3Rem,
  borderRadiusSizeX4Px,
  borderRadiusSizeX4Rem,
  borderRadiusSizeX5Px,
  borderRadiusSizeX5Rem,
  borderRadiusSizeX6Px,
  borderRadiusSizeX6Rem,
  borderSizeX1Px,
  borderSizeX1Rem,
  borderSizeX2Px,
  borderSizeX2Rem,
  borderSizeX3Px,
  borderSizeX3Rem,
  sizeX10Px,
  sizeX10Rem,
  sizeX12Px,
  sizeX12Rem,
  sizeX16Px,
  sizeX16Rem,
  sizeX1Px,
  sizeX1Rem,
  sizeX24Px,
  sizeX24Rem,
  sizeX2Px,
  sizeX2Rem,
  sizeX32Px,
  sizeX32Rem,
  sizeX3Px,
  sizeX3Rem,
  sizeX4Px,
  sizeX4Rem,
  sizeX5Px,
  sizeX5Rem,
  sizeX6Px,
  sizeX6Rem,
  sizeX8Px,
  sizeX8Rem,
} from 'preshape';
import { Page } from '../components/Page/Page';
import { SizingProps } from '../components/Sizing/Sizing';
import { SizingList } from '../components/Sizing/SizingList';

const variables: SizingProps[] = (
  [
    ['x1', sizeX1Px, sizeX1Rem],
    ['x2', sizeX2Px, sizeX2Rem],
    ['x3', sizeX3Px, sizeX3Rem],
    ['x4', sizeX4Px, sizeX4Rem],
    ['x5', sizeX5Px, sizeX5Rem],
    ['x6', sizeX6Px, sizeX6Rem],
    ['x8', sizeX8Px, sizeX8Rem],
    ['x10', sizeX10Px, sizeX10Rem],
    ['x12', sizeX12Px, sizeX12Rem],
    ['x16', sizeX16Px, sizeX16Rem],
    ['x24', sizeX24Px, sizeX24Rem],
    ['x32', sizeX32Px, sizeX32Rem],
  ] as [string, number, number][]
).map(([size, px, rem]) => ({
  name: size,
  css: `--size--${size}`,
  js: `size${size.toUpperCase()}Px / size${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

const borderVariables: SizingProps[] = (
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

const borderRadiusVariables: SizingProps[] = (
  [
    ['x1', borderRadiusSizeX1Px, borderRadiusSizeX1Rem],
    ['x2', borderRadiusSizeX2Px, borderRadiusSizeX2Rem],
    ['x3', borderRadiusSizeX3Px, borderRadiusSizeX3Rem],
    ['x4', borderRadiusSizeX4Px, borderRadiusSizeX4Rem],
    ['x5', borderRadiusSizeX5Px, borderRadiusSizeX5Rem],
    ['x6', borderRadiusSizeX6Px, borderRadiusSizeX6Rem],
  ] as [string, number, number][]
).map(([size, px, rem]) => ({
  name: size,
  css: `--border-radius-size--${size}`,
  js: `borderRadiusSize${size.toUpperCase()}Px / borderRadiusSize${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

const variableGroups = [
  {
    name: 'General',
    description:
      'General sizing variables used for margins, paddings and anything else for spacing.',
    children: variables,
  },
  {
    name: 'Border',
    description: 'Border sizing variables.',
    children: borderVariables,
  },
  {
    name: 'Border Radius',
    description: 'Border radius sizing variables.',
    children: borderRadiusVariables,
  },
];

export const SizingsPage = () => {
  return (
    <Page
      title="Sizings"
      description="The all important sizing variables for spacing, border, and border radius."
      summary={[{ name: 'Variables', children: variableGroups }]}
    >
      <Article>
        <ArticleSection>
          <CodeWindow description="Examples of using sizings in CSS, JS variables and React components">
            <CodeBlock language="css">{`
/* CSS */
var(--size--x1);
var(--border-size--x1);
var(--border-radius-size--x1);
          `}</CodeBlock>

            <CodeBlock>{`
/* React */
<Box margin="x2" padding="x4" borderSize="x1" borderRadius="x2" />
          `}</CodeBlock>

            <CodeBlock>{`
/* JS Variables */
import { sizeX1Px, sizeX1Rem, borderRadiusSizeX1Px } from 'preshape';
`}</CodeBlock>
          </CodeWindow>
        </ArticleSection>

        <ArticleSection>
          <ArticleHeading>Variables</ArticleHeading>
        </ArticleSection>

        {variableGroups.map(({ name, description, children }) => (
          <ArticleSection key={name}>
            <SizingList
              name={name}
              description={description}
              sizings={children}
            />
          </ArticleSection>
        ))}
      </Article>
    </Page>
  );
};
