import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import InputWrapper, { InputWrapperProps } from '../Input/InputWrapper';

export interface TextAreaWrapperProps extends InputWrapperProps {
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

const TextAreaWrapper: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, TextAreaWrapperProps>
> = (props, ref) => {
  return <InputWrapper {...props} ref={ref} />;
};

export default forwardRef(TextAreaWrapper);
