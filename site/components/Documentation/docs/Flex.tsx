import * as React from 'react' ;
import pick from 'lodash.pick';
import { Flex, FlexProps } from 'preshape';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

const parentProps = [
  'alignChildren',
  'alignChildrenHorizontal',
  'alignChildrenVertical',
  'direction',
  'gap',
];

const childProps = [
  'alignSelf',
  'grow',
  'initial',
  'shrink',
];

const Item: CatalogueItem<{
  Flex: FlexProps;
}> = {
  name: 'Flex',
  description: 'Simple, all purpose flexing component to achieve common UI layouts and placements.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Flex { ...pick(props.Flex, parentProps) }>
        { Array.from({ length: 3 }).map((_, n) => (
          <Flex { ...pick(props.Flex, childProps) }
              alignChildren="middle"
              backgroundColor="background-shade-3"
              direction="vertical"
              key={ n }
              padding="x3">
            <ThemeIcon size="1.5rem" />
          </Flex>
        )) }
      </Flex>
    ),
    state: {
      Flex: {
        alignChildren: 'middle',
        direction: 'horizontal',
        gap: 'x3',
        initial: 'content',
      },
    },
  },
  apis: [{
    module: '"Flex/Flex"',
    name: 'FlexProps',
    rename: 'Flex',
  }],
};

export default Item;
