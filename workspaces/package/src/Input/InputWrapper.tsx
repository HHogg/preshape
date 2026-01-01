import classnames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { TypeColor } from '../types';

/**
 * A wrapper component for the Input component, provided for
 * custom input implementations but does not need to be used
 * with Input components form this package.
 */
export interface InputWrapperProps extends BoxProps {
  /**
   * Addon that appears before the Input
   */
  addonEnd?: ReactNode;
  /**
   * Vertical alignment of the end addon
   */
  addonEndAlignment?: BoxProps['alignSelf'];
  /**
   * Addon that appears after the Input
   */
  addonStart?: ReactNode;
  /**
   * Vertical alignment of the start addon
   */
  addonStartAlignment?: BoxProps['alignSelf'];
  /**
   * Sets styling to indicate the input is invalid.
   */
  invalid?: boolean;
  /**
   * Sets the text color when the input is in focus
   *
   * @default 'accent-shade-4'
   */
  textColorActive?: TypeColor;
  /**
   * Sets the text color when the input is hovered
   *
   * @default 'accent-shade-3'
   */
  textColorHover?: TypeColor;
}

export const InputWrapper = forwardRef<any, InputWrapperProps>((props, ref) => {
  const {
    addonEnd,
    addonEndAlignment,
    addonStart,
    addonStartAlignment,
    backgroundColor,
    borderRadius = 'x2',
    borderSize = 'x2',
    children,
    disabled,
    gap = 'x3',
    invalid,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    textColorActive = 'accent-shade-4',
    textColorHover = 'accent-shade-3',
    ...rest
  } = props;

  const classes = classnames('Input', {
    'Input--invalid': invalid,
    [`Input--text-color-active-${textColorActive}`]: textColorActive,
    [`Input--text-color-hover-${textColorHover}`]: textColorHover,
  });

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderSize={borderSize}
      className={classes}
      disabled={disabled}
      flex="horizontal"
      gap={gap}
      overflow="hidden"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
    >
      {addonStart && <Box alignSelf={addonStartAlignment}>{addonStart}</Box>}
      {children}
      {addonEnd && <Box alignSelf={addonEndAlignment}>{addonEnd}</Box>}
    </Box>
  );
});
