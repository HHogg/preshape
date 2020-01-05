import * as React from 'react' ;
import { CheckBox, CheckBoxProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  CheckBox: CheckBoxProps;
}> = {
  name: 'CheckBox',
  description: 'Standard input for selecting multiple choices.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <React.Fragment>
        <CheckBox { ...props.CheckBox } margin="x2" />
        <CheckBox { ...props.CheckBox } margin="x2" />
        <CheckBox { ...props.CheckBox } margin="x2" />
      </React.Fragment>
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
