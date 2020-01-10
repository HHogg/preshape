import * as React from 'react' ;
import { CheckBox, CheckBoxProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  CheckBox: CheckBoxProps;
}> = {
  name: 'CheckBox',
  description: 'Standard input for selecting multiple choices.',
  pictogram: require('../../../assets/pictogram-checkbox.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <CheckBox { ...props.CheckBox } margin="x2" />
        <CheckBox { ...props.CheckBox } margin="x2" />
        <CheckBox { ...props.CheckBox } margin="x2" />
      </Showcase>
    ),
    state: {
      CheckBox: {
        label: 'Lorem Ipsum',
      },
    },
  },
  apis: [{
    module: '"CheckBox/CheckBox"',
    name: 'CheckBoxProps',
    rename: 'CheckBox',
  }],
};

export default Item;
