import * as React from 'react';
import { Attributes } from '../Base/Base';
import InputLabel, { InputLabelProps } from '../InputLabel/InputLabel';

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

const TextAreaLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, TextAreaLabelProps>> = (props, ref) => {
  return (
    <InputLabel { ...props } ref={ ref } />
  );
};

export default React.forwardRef(TextAreaLabel);
