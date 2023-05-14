import omit from 'lodash.omit';
import { Box, BoxProps } from 'preshape';
import { CatalogueItem } from '..';
import ThemeIcon from '../../components/ThemeIcon/ThemeIcon';
import { Pictogram } from './pictograms/PictogramBase';

const parentProps: (keyof BoxProps)[] = [
  'absolute',
  'alignChildren',
  'alignChildrenHorizontal',
  'alignChildrenVertical',
  'fixed',
  'flex',
  'gap',
  'wrap',
];

const childProps: (keyof BoxProps)[] = ['alignSelf', 'basis', 'grow', 'shrink'];

const Item: CatalogueItem<{
  Box: BoxProps;
}> = {
  name: 'Box',
  description:
    'The core component that is the end of the chain for all other components. It provides general utility behaviour, flexing and styling.',
  Pictogram,
  apis: [
    {
      module: '"Box/Box"',
      name: 'BoxProps',
      rename: 'Box',
    },
  ],
  showcase: {
    state: {
      Box: {
        alignChildren: 'middle',
        basis: 'auto',
        flex: 'horizontal',
        gap: 'x3',
      },
    },
    Component: (props) => (
      <Box {...omit(props.Box, childProps)}>
        {Array.from({ length: 3 }).map((_, n) => (
          <Box
            {...omit(props.Box, parentProps)}
            alignChildren="middle"
            backgroundColor="text-shade-1"
            flex="vertical"
            key={n}
            padding="x3"
            textColor="background-shade-1"
          >
            <ThemeIcon size="1.5rem" />
          </Box>
        ))}
      </Box>
    ),
    code: `
import { Box } from 'preshape';

<Box
    alignChildren="middle"
    backgroundColor="background-shade-1"
    flex="vertical"
    href="https://preshape.hogg.io"
    padding="x16"
    tag="a"
    textColor="text-shade-3">
    ...
</Box>`,
  },
};

export default Item;
