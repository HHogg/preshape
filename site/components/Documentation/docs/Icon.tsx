import * as React from 'react' ;
import { Box, Icons } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{}> = {
  name: 'Icon',
  description: 'Icons to give more visual meaning to text. Icons are selected from the Feather Icon set.',
  pictogram: require('../../../assets/pictogram-icon.svg').default,
  type: 'component',
  showcase: {
    Component: () => (
      <Showcase>
        <Box alignChildren="middle" flex="vertical">
          <Icons.ChevronDown size="24px" />
        </Box>
      </Showcase>
    ),
  },
  apis: [],
};

export default Item;
