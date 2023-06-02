import { forwardRef } from 'react';
import {
  SelectInputLabel,
  SelectInputLabelProps,
} from '../SelectInputLabel/SelectInputLabel';
import { RadioButtonIndicator } from './RadioButtonIndicator';
import './RadioButton.css';

/**
 * Standard toggling radio input for selecting a single choice.
 */
export interface RadioButtonProps
  extends Omit<SelectInputLabelProps, 'label'> {}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    const {
      children,
      checked,
      onChange,
      name,
      disabled,
      paddingHorizontal = 'x3',
      paddingVertical = 'x2',
      readOnly,
      ...rest
    } = props;

    return (
      <SelectInputLabel
        {...rest}
        className="RadioButton__label"
        disabled={disabled}
        label={children}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
      >
        <RadioButtonIndicator
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          readOnly={readOnly}
          ref={ref}
        />
      </SelectInputLabel>
    );
  }
);
