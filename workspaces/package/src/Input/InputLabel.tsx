import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';

/**
 * The label element of the input. This should be placed
 * directly above the Input component.
 */
export interface InputLabelProps extends Omit<BoxProps, 'label'> {
  /**
   * A helpful description that can be displayed under the input.
   */
  description?: string | JSX.Element;
  /**
   * Alignment of the description text.
   */
  descriptionAlign?: TextProps['align'];
  /**
   * The label string that is rendered above the Input.
   */
  label?: string | JSX.Element;
}

export const InputLabel = forwardRef<any, InputLabelProps>((props, ref) => {
  const {
    children,
    description,
    descriptionAlign,
    label,
    paddingHorizontal = 'x3',
    tag = 'label',
    ...rest
  } = props;

  if (!label && !children && !description) {
    return null;
  }

  return (
    <Box
      {...rest}
      className="InputLabel"
      flex="vertical"
      gap="x2"
      ref={ref}
      tag={tag}
    >
      {label && (
        <Text
          ellipsis
          paddingHorizontal={paddingHorizontal}
          size="x3"
          weight="x2"
        >
          {label}
        </Text>
      )}

      {children && (
        <Box flex="vertical" grow>
          {children}
        </Box>
      )}

      {description && (
        <Text
          align={descriptionAlign}
          paddingHorizontal={paddingHorizontal}
          size="x2"
          textColor="text-shade-3"
          weight="x2"
        >
          {description}
        </Text>
      )}
    </Box>
  );
});
