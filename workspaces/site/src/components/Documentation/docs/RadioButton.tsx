import React from 'react';
import { RadioButton, RadioButtonProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  RadioButton: RadioButtonProps;
}> = {
  name: 'RadioButton',
  description: 'Standard toggling radio input for selecting single choices.',
  pictogram: require('../../SVGs/PictogramRadiobutton').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
      </Showcase>
    ),
    state: {
      RadioButton: {},
    },
  },
  apis: [
    {
      module: '"RadioButton/RadioButton"',
      name: 'RadioButtonProps',
      rename: 'RadioButton',
    },
  ],
};

export default Item;
