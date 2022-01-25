import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import InputLabel, { InputLabelProps } from '../Input/InputLabel';

export interface TextAreaLabelProps extends InputLabelProps {
  /**
   * The disabled state that prevents the input from being clickable.
   * Note that this elements simply applies the disabled styling, it
   * still needs to be provided to the TextArea component.
   */
  disabled?: boolean;
  /**
   * The label string that is rendered above the TextArea.
   */
  label?: string;
}

const TextAreaLabel: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, TextAreaLabelProps>
> = (props, ref) => {
  return <InputLabel {...props} ref={ref} />;
};

export default forwardRef(TextAreaLabel);
