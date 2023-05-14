import React, { forwardRef } from 'react';
import Input, { InputProps } from '../Input/Input';

export interface TextAreaProps extends InputProps {}

const TextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (props, ref) => {
  return <Input {...props} ref={ref} tag="textarea" />;
};

export default forwardRef(TextArea);
