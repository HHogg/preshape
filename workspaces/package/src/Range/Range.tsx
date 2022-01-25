import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import InputWrapper from '../Input/InputWrapper';
import './Range.css';

export interface RangeProps extends BoxProps {
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
  invalid?: boolean
}

const Range: RefForwardingComponent<
  HTMLInputElement,
  Attributes<HTMLInputElement, RangeProps>
> = (props, ref) => {
  const {
    addonEnd,
    addonStart,
    borderRadius = 'x2',
    borderSize = 'x2',
    disabled,
    gap = 'x3',
    invalid,
    padding,
    paddingHorizontal = 'x6',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <InputWrapper
        addonEnd={ addonEnd }
        addonStart={ addonStart }
        alignChildrenVertical="middle"
        backgroundColor="background-shade-1"
        borderRadius={ borderRadius }
        borderSize={ borderSize }
        disabled={ disabled }
        invalid={ invalid }
        flex="horizontal"
        gap={ gap }
        paddingHorizontal={ paddingHorizontal }
        paddingVertical={ paddingVertical }>
      <Box
        {...rest}
        basis="0"
        className="Range"
        grow
        paddingHorizontal={padding || paddingHorizontal}
        paddingVertical={padding || paddingVertical}
        ref={ref}
        tag="input"
        type="range"
      />
    </InputWrapper>
  );
};

export default forwardRef(Range);
