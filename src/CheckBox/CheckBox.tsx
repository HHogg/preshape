import * as React from 'react';
import { Attributes, TypeSize } from '../Base/Base';
import CheckBoxIndicator from './CheckBoxIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';

export interface CheckBoxProps {
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** A label that gives describes what the input is for */
  label: string;
  /** @Ignore */
  margin?: TypeSize;
  /** @Ignore */
  padding?: TypeSize;
  /** @Ignore */
  paddingHorizontal?: TypeSize;
  /** @Ignore */
  paddingVertical?: TypeSize;
}

const CheckBox = React.forwardRef<HTMLInputElement, Attributes<HTMLInputElement, CheckBoxProps>>((props, ref) => {
  const {
    disabled,
    label,
    margin,
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <SelectInputLabel
        disabled={ disabled }
        label={ label }
        margin={ margin }
        padding={ padding }
        paddingHorizontal={ paddingHorizontal }
        paddingVertical={ paddingVertical }>
      <CheckBoxIndicator { ...rest }
          disabled={ disabled }
          ref={ ref } />
    </SelectInputLabel>
  );
});

export default CheckBox;
