import { CheckBox, CheckBoxProps } from 'preshape';
import { Fragment, useState } from 'react';
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
    Component: (props) => {
      const [checked1, setChecked1] = useState(false);
      const [checked2, setChecked2] = useState(true);
      const [checked3, setChecked3] = useState(false);

      return (
        <Fragment>
          <CheckBox
            {...props.CheckBox}
            margin="x2"
            checked={checked1}
            onChange={(e) =>
              setChecked1((e.target as HTMLInputElement).checked)
            }
          >
            First Option
          </CheckBox>
          <CheckBox
            {...props.CheckBox}
            margin="x2"
            checked={checked2}
            onChange={(e) =>
              setChecked2((e.target as HTMLInputElement).checked)
            }
          >
            Second Option (Pre-checked)
          </CheckBox>
          <CheckBox
            {...props.CheckBox}
            disabled
            margin="x2"
            checked={checked3}
            onChange={(e) =>
              setChecked3((e.target as HTMLInputElement).checked)
            }
          >
            Third Option (Disabled)
          </CheckBox>
        </Fragment>
      );
    },
    code: `
import { CheckBox } from 'preshape';
import { useState } from 'react';

const [checked, setChecked] = useState(false);

<CheckBox
  checked={checked}
  onChange={(e) => setChecked((e.target as HTMLInputElement).checked)}
>
  Toggle me
</CheckBox>
    `,
  },
};

export default Item;
