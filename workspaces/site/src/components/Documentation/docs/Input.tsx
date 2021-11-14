import * as React from 'react';
import {
  Icons,
  Input,
  InputProps,
  InputWrapper,
  InputWrapperProps,
  InputAddon,
  InputAddonProps,
} from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  InputWrapper: InputWrapperProps;
  Input: InputProps;
  InputAddon: InputAddonProps;
}> = {
  name: 'Input',
  description: 'Standard single line text input for data collection.',
  pictogram: require('../../../assets/pictogram-input.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <InputWrapper {...props.InputWrapper}>
          <Input {...props.Input} placeholder="Email address" />
          <InputAddon {...props.InputAddon}>
            <Icons.Mail name="Letter" size="20px" />
          </InputAddon>
        </InputWrapper>
      </Showcase>
    ),
    state: {
      Input: {},
      InputWrapper: {
        label: 'Input label',
      },
      InputAddon: {},
    },
  },
  apis: [
    {
      module: '"Input/InputWrapper"',
      name: 'InputWrapperProps',
      rename: 'InputWrapper',
    },
    {
      module: '"Input/Input"',
      name: 'InputProps',
      rename: 'Input',
    },
    {
      module: '"Input/InputAddon"',
      name: 'InputAddonProps',
      rename: 'InputAddon',
    },
  ],
};

export default Item;
