import React from 'react';
import { CheckBox, CheckBoxProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  CheckBox: CheckBoxProps;
}> = {
  name: 'CheckBox',
  description:
    'Standard toggling checkbox input for selecting multiple choices.',
  pictogram: require('../../SVGs/PictogramCheckbox').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
      </Showcase>
    ),
    state: {
      CheckBox: {},
    },
  },
  apis: [
    {
      module: '"CheckBox/CheckBox"',
      name: 'CheckBoxProps',
      rename: 'CheckBox',
    },
  ],
};

export default Item;
