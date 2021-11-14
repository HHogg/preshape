import React from 'react';
import { Icons, InputWrapper, InputAddon, Range, RangeProps } from 'preshape';
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
        <InputWrapper>
          <InputAddon>
            <Icons.Moon name="Moon" size="20px" />
          </InputAddon>
          <Range {...props.Range} />
          <InputAddon>
            <Icons.Sun name="Sun" size="20px" />
          </InputAddon>
        </InputWrapper>
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
