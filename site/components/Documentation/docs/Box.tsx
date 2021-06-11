import * as React from 'react' ;
import omit from 'lodash.omit';
import { Box, BoxProps } from 'preshape';
import Showcase from '../Showcase';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

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

const childProps: (keyof BoxProps)[] = [
  'alignSelf',
  'basis',
  'grow',
  'shrink',
];

const Item: CatalogueItem<{
  Box: BoxProps;
}> = {
  name: 'Box',
  description: 'The core component that is the end of the chain for all other components. It provides general utility behaviour, flexing and styling.',
  pictogram: require('../../../assets/pictogram-base.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Box { ...omit(props.Box, childProps) }>
          { Array.from({ length: 3 }).map((_, n) => (
            <Box { ...omit(props.Box, parentProps) }
                alignChildren="middle"
                backgroundColor="text-shade-1"
                flex="vertical"
                key={ n }
                padding="x3"
                textColor="background-shade-1">
              <ThemeIcon size="1.5rem" />
            </Box>
          )) }
        </Box>
      </Showcase>
    ),
    state: {
      Box: {
        alignChildren: 'middle',
        basis: 'auto',
        flex: 'horizontal',
        gap: 'x3',
      },
    },
  },
  apis: [{
    module: '"Box/Box"',
    name: 'BoxProps',
    rename: 'Box',
  }],
};

export default Item;
