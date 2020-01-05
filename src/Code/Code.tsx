import * as React from 'react';
import { Attributes } from '../Base/Base';
import Text, { TextProps } from '../Text/Text';

export interface CodeProps extends TextProps {}

const Code = React.forwardRef<HTMLElement, Attributes<HTMLElement, CodeProps>>((props, ref) => {
  return (
    <Text { ...props }
        monospace
        ref={ ref }
        tag="code" />
  );
});

export default Code;
