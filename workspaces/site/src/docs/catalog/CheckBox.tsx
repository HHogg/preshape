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
      CheckBox: {},
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
