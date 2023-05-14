import React, { forwardRef } from 'react';
import Text, { TextProps } from '../Text/Text';

export interface CodeProps extends TextProps {}

const Code: React.ForwardRefRenderFunction<any, CodeProps> = (props, ref) => {
  return <Text {...props} monospace ref={ref} tag="code" />;
};

export default forwardRef(Code);
