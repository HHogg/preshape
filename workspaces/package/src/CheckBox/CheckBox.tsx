import { forwardRef } from 'react';
import { CheckBoxIndicator } from './CheckBoxIndicator';
import {
  SelectInputLabel,
  SelectInputLabelProps,
} from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';

/**
 * Standard toggling checkbox input for selecting multiple choices.
 */
export interface CheckBoxProps extends Omit<SelectInputLabelProps, 'label'> {}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
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
        className="CheckBox__label"
        disabled={disabled}
        label={children}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
      >
        <CheckBoxIndicator
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
