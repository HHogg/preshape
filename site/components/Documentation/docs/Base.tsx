import * as React from 'react' ;
import { Base, BaseProps, Flex } from 'preshape';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Base: BaseProps;
}> = {
  name: 'Base',
  description: 'The core component that is the end of the chain for all other components. It provides general utility behaviour and styling.',
  pictogram: require('../../../assets/pictogram-base.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Base { ...props.Base }>
        <Flex alignChildren="middle" direction="vertical">
          <ThemeIcon size="1.5rem" />
        </Flex>
      </Base>
    ),
    state: {
      Base: {},
    },
  },
  apis: [{
    module: '"Base/Base"',
    name: 'BaseProps',
    rename: 'Base',
  }],
};

export default Item;
