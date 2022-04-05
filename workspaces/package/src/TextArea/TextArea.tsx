import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import Input, { InputProps } from '../Input/Input';

export interface TextAreaProps extends InputProps {}

const TextArea: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLTextAreaElement, TextAreaProps>
> = (props, ref) => {
  return <Input {...props} ref={ref} tag="textarea" />;
};

export default forwardRef(TextArea);
