import classnames from 'classnames';
import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';

/**
 * A wrapper component for the Input component, provided for
 * custom input implementations but does not need to be used
 * with Input components form this package.
 */
export interface InputWrapperProps extends BoxProps {
  /**
   * Addon that appears before the Input
   */
  addonEnd?: JSX.Element;
  /**
   * Addon that appears after the Input
   */
  addonStart?: JSX.Element;
  /**
   * Sets styling to indicate the input is invalid.
   */
  invalid?: boolean;
}

const InputWrapper: React.ForwardRefRenderFunction<any, InputWrapperProps> = (
  props,
  ref
) => {
  const {
    addonEnd,
    addonStart,
    backgroundColor,
    borderRadius = 'x2',
    borderSize = 'x2',
    children,
    disabled,
    gap = 'x3',
    invalid,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  const classes = classnames('Input', {
    'Input--invalid': invalid,
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
      {addonStart && addonStart}
      {children}
      {addonEnd && addonEnd}
    </Box>
  );
};

export default forwardRef(InputWrapper);
