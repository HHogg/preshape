import React, { useState } from 'react';
import { Box, Icons, Toggle, ToggleProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Toggle: ToggleProps;
}> = {
  name: 'Toggle',
  description: 'An on/off styled toggle switch indicator',
  pictogram: require('../../SVGs/PictogramToggle').default,
  type: 'component',
  showcase: {
    Component: (props) => {
      const [value, onChange] = useState(false);

      return (
        <Showcase>
          <Box alignChildren="middle" flex="horizontal">
            <Toggle
              iconOff={<Icons.Triangle size={16} />}
              iconOn={<Icons.Circle size={16} />}
              onChange={onChange}
              size={32}
              value={value}
            />
          </Box>
        </Showcase>
      );
    },
    state: {
      Toggle: {
        value: false,
      },
    },
  },
  apis: [
    {
      module: '"Toggle/Toggle"',
      name: 'ToggleProps',
      rename: 'Toggle',
    },
  ],
};

export default Item;
