import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

/**
 * A styled component to be rendered around
 * CodeBlocks to give them a window-like appearance.
 */
export interface CodeWindowProps extends TextProps {
  description?: string;
}

export const CodeWindow = forwardRef<any, CodeWindowProps>((props, ref) => {
  const {
    children,
    description,
    borderRadius = 'x3',
    padding = 'x6',
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      backgroundColor="background-shade-2"
      borderColor="background-shade-4"
      borderSize="x1"
      borderRadius={borderRadius}
      margin="x12"
      ref={ref}
    >
      {description && (
        <Text
          borderBottom
          borderColor="background-shade-4"
          padding={padding}
          size="x3"
        >
          {description}
        </Text>
      )}

      <Text flex="vertical" gap="x6" padding={padding}>
        {children}
      </Text>
    </Text>
  );
});
