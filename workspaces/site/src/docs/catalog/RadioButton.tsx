import { RadioButton, RadioButtonProps } from 'preshape';
import { Fragment } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramRadiobutton';

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
      RadioButton: {
        borderColorHover: 'accent-shade-3',
        borderColorActive: 'accent-shade-5',
        textColorHover: 'accent-shade-3',
        textColorActive: 'accent-shade-4',
        indicatorBorderColor: 'text-shade-1',
        indicatorBorderColorHover: 'text-shade-1',
        indicatorBorderColorActive: 'accent-shade-3',
        indicatorColorHover: 'text-shade-1',
        indicatorColorActive: 'accent-shade-4',
      },
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
