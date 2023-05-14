import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

export interface CodeProps extends TextProps {}

export const Code = forwardRef<any, CodeProps>((props, ref) => {
  return <Text {...props} monospace ref={ref} tag="code" />;
});
