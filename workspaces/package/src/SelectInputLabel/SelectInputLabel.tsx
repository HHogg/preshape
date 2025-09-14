import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { TypeColor } from '../types';

export interface SelectInputLabelProps
  extends Omit<BoxProps, 'label' | 'size'> {
  label: ReactNode;
  size?: TextProps['size'];
  /**
   * Sets the border color when hovered
   *
   * @default 'accent-shade-3'
   */
  borderColorHover?: TypeColor;
  /**
   * Sets the border color when active (focused)
   *
   * @default 'accent-shade-5'
   */
  borderColorActive?: TypeColor;
  /**
   * Sets the text color when hovered
   *
   * @default 'accent-shade-3'
   */
  textColorHover?: TypeColor;
  /**
   * Sets the text color when active (focused)
   *
   * @default 'accent-shade-4'
   */
  textColorActive?: TypeColor;
}

export const SelectInputLabel = forwardRef<
  HTMLLabelElement,
  SelectInputLabelProps
>((props, ref) => {
  const {
    backgroundColor,
    borderRadius = 'x2',
    borderSize = 'x2',
    borderColorHover,
    borderColorActive,
    textColorHover,
    textColorActive,
    children,
    className,
    label,
    size = 'x3',
    ...rest
  } = props;

  const classes = classNames(
    className,
    'SelectInputLabel',
    `SelectInputLabel--border-color-hover-${borderColorHover}`,
    `SelectInputLabel--border-color-active-${borderColorActive}`,
    `SelectInputLabel--text-color-hover-${textColorHover}`,
    `SelectInputLabel--text-color-active-${textColorActive}`
  );

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      backgroundColor={backgroundColor}
      borderSize={borderSize}
      borderRadius={borderRadius}
      className={classes}
      flex="horizontal"
      gap="x2"
      ref={ref}
      tag="label"
    >
      <Box>{children}</Box>

      <Box grow minWidth="0" shrink>
        <Text size={size} weight="x2">
          {label}
        </Text>
      </Box>
    </Box>
  );
});
