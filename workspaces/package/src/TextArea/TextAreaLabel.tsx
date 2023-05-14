import { forwardRef } from 'react';
import { InputLabel, InputLabelProps } from '../Input/InputLabel';

export interface TextAreaLabelProps extends InputLabelProps {}

export const TextAreaLabel = forwardRef<HTMLLabelElement, TextAreaLabelProps>(
  (props, ref) => {
    return <InputLabel {...props} ref={ref} />;
  }
);
