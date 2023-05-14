import { Fragment } from 'react';
import { RadioButton, RadioButtonProps } from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramRadiobutton';

const Item: CatalogueItem<{
  RadioButton: RadioButtonProps;
}> = {
  name: 'RadioButton',
  description: 'Standard toggling radio input for selecting single choices.',
  Pictogram,
  apis: [
    {
      module: '"RadioButton/RadioButton"',
      name: 'RadioButtonProps',
      rename: 'RadioButton',
    },
  ],
  showcase: {
    state: {
      RadioButton: {},
    },
    Component: (props) => (
      <Fragment>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
        <RadioButton {...props.RadioButton} margin="x2" name="radio">
          Lorem Ipsum
        </RadioButton>
      </Fragment>
    ),
    code: `
import { RadioButton } from 'preshape';

<RadioButton checked={false} onChange={() => {}}>
  ...
</RadioButton>
    `,
  },
};

export default Item;
