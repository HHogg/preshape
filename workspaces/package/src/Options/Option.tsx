import * as React from 'react';
import { Attributes } from '../Box/Box';
import CheckBox from '../CheckBox/CheckBox';
import RadioButton from '../RadioButton/RadioButton';

export interface OptionProps {
  /**
   * Switches the selection style from singular to multiple
   * by following the same pattern as CheckBoxes and RadioButtons.
   */
  multiselect?: boolean;
}

const Option: React.RefForwardingComponent<
  HTMLInputElement,
  Attributes<HTMLInputElement, OptionProps>
> = (props, ref) => {
  const { multiselect, ...rest } = props;

  return multiselect ? (
    <CheckBox {...rest} ref={ref} />
  ) : (
    <RadioButton {...rest} ref={ref} />
  );
};

export default React.forwardRef(Option);
