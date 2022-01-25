import React, {
  forwardRef,
  RefForwardingComponent,
} from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Text from '../Text/Text';

export interface InputLabelProps extends BoxProps {
  /**
   * A helpful description that can be displayed under the input.
   */
  description?: string;
  /**
   * The label string that is rendered above the Input.
   */
  label?: string;
}

const InputLabel: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, InputLabelProps>
> = (props, ref) => {
  const {
    children,
    description,
    label,
    paddingHorizontal = 'x3',
    ...rest
  } = props;

  if (!label && !children && !description) {
    return null;
  }

  return (
    <Box
      {...rest}
      className="InputLabel"
      ref={ ref }
      tag="label"
    >
      {label && (
        <Text
          ellipsis
          paddingHorizontal={paddingHorizontal}
          margin="x2"
          size="x2"
          strong
        >
          {label}
        </Text>
      )}

      { children && (
        <Box
          margin="x2"
        >
          {children}
        </Box>
      )}

      {description && (
        <Text
        margin="x2"
          paddingHorizontal={paddingHorizontal}
          size="x2"
          strong
          textColor="text-shade-4"
        >
          {description}
        </Text>
      )}
    </Box>
  );
};

export default forwardRef(InputLabel);
