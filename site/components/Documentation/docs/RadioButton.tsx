import * as React from 'react' ;
import { RadioButton, RadioButtonProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  RadioButton: RadioButtonProps;
}> = {
  name: 'RadioButton',
  description: 'Standard toggling radio input for selecting single choices.',
  pictogram: require('../../../assets/pictogram-radiobutton.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
      </Showcase>
    ),
    state: {
      RadioButton: {
        label: 'Lorem ipsum',
      },
    },
  },
  apis: [{
    module: '"RadioButton/RadioButton"',
    name: 'RadioButtonProps',
    rename: 'RadioButton',
  }],
};

export default Item;
