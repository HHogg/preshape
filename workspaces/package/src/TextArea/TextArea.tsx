import { forwardRef } from 'react';
import { Input, InputProps } from '../Input/Input';

export interface TextAreaProps extends InputProps {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return <Input {...props} ref={ref} tag="textarea" />;
  }
);
