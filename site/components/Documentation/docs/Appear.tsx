import * as React from 'react' ;
import { Appear, AppearProps, Flex } from 'preshape';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Appear: AppearProps;
}> = {
  name: 'Appear',
  description: 'Adds some subtle animations to the entrance and exit of sections of the UI.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Flex direction="horizontal" gap="x3">
        { Array.from({ length: 3 }).map((_, n) => (
          <Appear { ...props.Appear }
              alignChildren="middle"
              backgroundColor="text-shade-1"
              basis="none"
              delay={ (n + 1) * (props.Appear.delay || 0) }
              direction="vertical"
              grow
              key={ n }
              padding="x3"
              textColor="background-shade-1">
            <ThemeIcon size="1.5rem" />
          </Appear>
        )) }
      </Flex>
    ),
    state: {
      Appear: {
        animation: 'FadeSlideUp',
        delay: 100,
        visible: true,
      },
    },
  },
  apis: [{
    module: '"Appear/Appear"',
    name: 'AppearProps',
    rename: 'Appear',
  }],
};

export default Item;
