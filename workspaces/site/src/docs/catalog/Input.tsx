import {
  Icons,
  Input,
  InputProps,
  InputLabel,
  InputLabelProps,
  InputWrapperProps,
} from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramInput';

const Item: CatalogueItem<{
  Input: InputProps;
  InputLabel: InputLabelProps;
  InputWrapper: InputWrapperProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for data collection.',
  Pictogram,
  apis: [
    {
      module: '"Input/Input"',
      name: 'InputProps',
      rename: 'Input',
    },
    {
      module: '"Input/InputLabel"',
      name: 'InputLabelProps',
      rename: 'InputLabel',
    },
    {
      module: '"Input/InputWrapper"',
      name: 'InputWrapperProps',
      rename: 'InputWrapper',
    },
  ],
  showcase: {
    state: {
      Input: {},
      InputLabel: {
        label: 'Input label',
      },
      InputWrapper: {},
    },
    Component: (props) => (
      <InputLabel {...props.InputLabel}>
        <Input
          {...props.Input}
          {...props.InputWrapper}
          addonStart={<Icons.Mail name="Letter" size="20px" />}
          placeholder="Email address"
        />
      </InputLabel>
    ),
    code: `
import { InputLabel, Input } from 'preshape';

<InputLabel label="Input label">
  <Input
    addonStart={<Icons.Mail name="Letter" size="20px" />}
    addonEnd={<Icons.Check name="Check" size="20px" />}
    placeholder="Email address"
    onChange={handleChange}
    value={someValue} />
</InputLabel>`,
  },
};

export default Item;
