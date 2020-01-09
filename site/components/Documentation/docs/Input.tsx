import * as React from 'react' ;
import { Input, InputProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Input: InputProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for collection user feedback data.',
  pictogram: require('../../../assets/pictogram-input.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Input { ...props.Input } placeholder="Type into me" />
    ),
    state: {
      Input: {
        label: 'Input label',
      },
    },
  },
  apis: [{
    module: '"Input/Input"',
    name: 'InputProps',
    rename: 'Input',
  }],
};

export default Item;
