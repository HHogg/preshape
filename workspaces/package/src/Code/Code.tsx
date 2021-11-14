import * as React from 'react';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';

export interface CodeProps extends TextProps {}

const Code: React.RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, CodeProps>
> = (props, ref) => {
  return <Text {...props} monospace ref={ref} tag="code" />;
};

export default React.forwardRef(Code);
