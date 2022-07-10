import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import InputLabel, { InputLabelProps } from '../Input/InputLabel';

export interface TextAreaLabelProps extends InputLabelProps {}

const TextAreaLabel: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, TextAreaLabelProps>
> = (props, ref) => {
  return <InputLabel {...props} ref={ref} />;
};

export default forwardRef(TextAreaLabel);
