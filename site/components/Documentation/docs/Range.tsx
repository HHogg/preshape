import * as React from 'react' ;
import { Icon, InputLabel, InputAddon, Range, RangeProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Range: RangeProps;
}> = {
  name: 'Range',
  description: 'A slider control for selecting a number between a given min and max number.',
  pictogram: require('../../../assets/pictogram-range.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <InputLabel label="Daylight">
          <InputAddon>
            <Icon name="Moon" size="1.25rem" />
          </InputAddon>
          <Range { ...props.Range } />
          <InputAddon>
            <Icon name="Sun" size="1.25rem" />
          </InputAddon>
        </InputLabel>
      </Showcase>
    ),
    state: {
      Range: {},
    },
  },
  apis: [{
    module: '"Range/Range"',
    name: 'RangeProps',
    rename: 'Range',
  }],
};

export default Item;
