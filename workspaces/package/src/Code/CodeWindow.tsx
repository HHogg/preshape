import React, { forwardRef } from 'react';
import Text, { TextProps } from '../Text/Text';

/**
 *
 */
export interface CodeWindowProps extends TextProps {}

const CodeWindow: React.ForwardRefRenderFunction<any, CodeWindowProps> = (
  props,
  ref
) => {
  const { children, borderRadius = 'x3', padding = 'x6', ...rest } = props;

  return (
    <Text
      {...rest}
      borderColor="text-shade-1"
      borderSize="x1"
      borderRadius={borderRadius}
      margin="x8"
      ref={ref}
      overflow="auto"
      style={{
        background:
          'linear-gradient(rgb(42, 33, 57) 75%, rgb(52, 41, 79)) transparent',
      }}
      theme="night"
    >
      <Text flex="vertical" gap="x6" padding={padding} width="max-content">
        {children}
      </Text>
    </Text>
  );
};

export default forwardRef(CodeWindow);
