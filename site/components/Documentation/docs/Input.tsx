import * as React from 'react' ;
import { Input, InputProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Input: InputProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for collection user feedback data.',
  pictogram: require('../../../assets/pictogram-input.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Input { ...props.Input } placeholder="Type into me" />
      </Showcase>
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
