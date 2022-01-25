import React from 'react';
import {
  Icons,
  Input,
  InputProps,
  InputLabel,
  InputLabelProps,
  InputAddonProps,
} from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  InputLabel: InputLabelProps;
  Input: InputProps;
  InputAddon: InputAddonProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for data collection.',
  pictogram: require('../../SVGs/PictogramInput').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <InputLabel {...props.InputLabel}>
          <Input {...props.Input}
            addonStart={ <Icons.Mail name="Letter" size="20px" /> }
            placeholder="Email address" />
        </InputLabel>
      </Showcase>
    ),
    state: {
      Input: {},
      InputLabel: {
        label: 'Input label',
      },
      InputAddon: {},
    },
  },
  apis: [
    {
      module: '"Input/InputLabel"',
      name: 'InputLabelProps',
      rename: 'InputLabel',
    },
    {
      module: '"Input/Input"',
      name: 'InputProps',
      rename: 'Input',
    },
    {
      module: '"Input/InputAddon"',
      name: 'InputAddonProps',
      rename: 'InputAddon',
    },
  ],
};

export default Item;
