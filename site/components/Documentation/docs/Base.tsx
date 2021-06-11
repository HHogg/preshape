import * as React from 'react' ;
import { Base, BaseProps } from 'preshape';
import Showcase from '../Showcase';
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
      <Showcase>
        <Base alignChildren="middle" flex="vertical">
          <Base { ...props.Base }>
            <ThemeIcon size="1.5rem" />
          </Base>
        </Base>
      </Showcase>
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
