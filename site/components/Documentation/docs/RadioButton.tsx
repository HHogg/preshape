import * as React from 'react' ;
import { RadioButton, RadioButtonProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  RadioButton: RadioButtonProps;
}> = {
  name: 'RadioButton',
  description: 'Standard input for selecting a single choice.',
  pictogram: require('../../../assets/pictogram-radiobutton.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <React.Fragment>
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
        <RadioButton { ...props.RadioButton }
            margin="x2"
            name="radio" />
      </React.Fragment>
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
