import { CheckBox, CheckBoxProps } from 'preshape';
import { Fragment } from 'react';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramCheckbox';

const Item: CatalogueItem<{
  CheckBox: CheckBoxProps;
}> = {
  name: 'CheckBox',
  description:
    'Standard toggling checkbox input for selecting multiple choices.',
  Pictogram,
  apis: [
    {
      module: '"CheckBox/CheckBox"',
      name: 'CheckBoxProps',
      rename: 'CheckBox',
    },
  ],
  showcase: {
    state: {
      CheckBox: {
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
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
        <CheckBox {...props.CheckBox} margin="x2">
          Lorem Ipsum
        </CheckBox>
      </Fragment>
    ),
    code: `
import { Checkbox } from 'preshape';

<Checkbox checked={false} onChange={() => {}}>
  ...
</Checkbox>

    `,
  },
};

export default Item;
