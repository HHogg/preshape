import * as React from 'react';
import { Attributes, TypeSize } from '../Base/Base';
import RadioButtonIndicator from './RadioButtonIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './RadioButton.css';

export interface RadioButtonProps {
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

const RadioButton: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, RadioButtonProps>> = (props, ref) => {
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
      <RadioButtonIndicator { ...rest }
          disabled={ disabled }
          ref={ ref } />
    </SelectInputLabel>
  );
};

export default React.forwardRef(RadioButton);
