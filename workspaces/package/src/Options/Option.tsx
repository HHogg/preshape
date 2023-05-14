import { forwardRef } from 'react';
import { CheckBox, CheckBoxProps } from '../CheckBox/CheckBox';
import { RadioButton, RadioButtonProps } from '../RadioButton/RadioButton';

/**
 * A component that can be used to display a list of options.
 */
export interface OptionProps extends CheckBoxProps, RadioButtonProps {
  /**
   * Switches the selection style from singular to multiple
   * by following the same pattern as CheckBoxes and RadioButtons.
   */
  multiselect?: boolean;
}

export const Option = forwardRef<HTMLInputElement, OptionProps>(
  (props, ref) => {
    const { multiselect, ...rest } = props;

    return multiselect ? (
      <CheckBox {...rest} ref={ref} />
    ) : (
      <RadioButton {...rest} ref={ref} />
    );
  }
);
