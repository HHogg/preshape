import * as React from 'react' ;
import { Icon, Input, InputProps, InputLabel, InputLabelProps, InputAddon, InputAddonProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  InputLabel: InputLabelProps;
  Input: InputProps;
  InputAddon: InputAddonProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for data collection.',
  pictogram: require('../../../assets/pictogram-input.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <InputLabel { ...props.InputLabel }>
          <Input { ...props.Input } placeholder="Type into me" />
          <InputAddon { ...props.InputAddon }>
            <Icon name="Pencil" size="1.25rem" />
          </InputAddon>
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
  apis: [{
    module: '"InputLabel/InputLabel"',
    name: 'InputLabelProps',
    rename: 'InputLabel',
  }, {
    module: '"Input/Input"',
    name: 'InputProps',
    rename: 'Input',
  }, {
    module: '"Input/InputAddon"',
    name: 'InputAddonProps',
    rename: 'InputAddon',
  }],
};

export default Item;
