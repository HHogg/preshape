import React from 'react';
import { Icons, InputLabel, Range, RangeProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Range: RangeProps;
}> = {
  name: 'Range',
  description:
    'A slider control for selecting a number between a given min and max number.',
  pictogram: require('../../SVGs/PictogramRange').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <InputLabel description="This doesn't update anything." label="Level of darkness">
          <Range {...props.Range}
              addonEnd={ <Icons.Sun name="Sun" size="20px" /> }
              addonStart={ <Icons.Moon name="Moon" size="20px" /> }>
          </Range>
        </InputLabel>
      </Showcase>
    ),
    state: {
      Range: {},
    },
  },
  apis: [
    {
      module: '"Range/Range"',
      name: 'RangeProps',
      rename: 'Range',
    },
  ],
};

export default Item;
