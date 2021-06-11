import * as React from 'react' ;
import { Box, Icon, IconProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Icon: IconProps;
}> = {
  name: 'Icon',
  description: 'Icons to give more visual meaning to text. Icons are selected from the Feather Icon set.',
  pictogram: require('../../../assets/pictogram-icon.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Box alignChildren="middle" flex="vertical">
          <Icon { ...props.Icon } />
        </Box>
      </Showcase>
    ),
    state: {
      Icon: {
        name: 'Github',
        size: '1.5rem',
      },
    },
  },
  apis: [{
    module: '"Icon/Icon"',
    name: 'IconProps',
    rename: 'Icon',
  }],
};

export default Item;
