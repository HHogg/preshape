import React, { forwardRef } from 'react';
import InputLabel, { InputLabelProps } from '../Input/InputLabel';

export interface TextAreaLabelProps extends InputLabelProps {}

const TextAreaLabel: React.ForwardRefRenderFunction<
  HTMLLabelElement,
  TextAreaLabelProps
> = (props, ref) => {
  return <InputLabel {...props} ref={ref} />;
};

export default forwardRef(TextAreaLabel);
