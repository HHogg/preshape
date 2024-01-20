import { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { InputWrapper, InputWrapperProps } from '../Input/InputWrapper';
import './Range.css';

/**
 * A range component that can be used to select a value from a range.
 */
export interface RangeProps extends InputWrapperProps {}

export const Range = forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
  const {
    addonEnd,
    addonStart,
    borderRadius = 'x2',
    borderSize = 'x2',
    disabled,
    gap = 'x3',
    invalid,
    max,
    min,
    name,
    onChange,
    padding,
    paddingHorizontal = 'x6',
    paddingVertical = 'x2',
    readOnly,
    step,
    value,
    ...rest
  } = props;

  return (
    <InputWrapper
      {...rest}
      addonEnd={addonEnd}
      addonStart={addonStart}
      alignChildrenVertical="middle"
      backgroundColor="background-shade-1"
      borderRadius={borderRadius}
      borderSize={borderSize}
      disabled={disabled}
      invalid={invalid}
      flex="horizontal"
      gap={gap}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      <Box
        basis="0"
        className="Range"
        disabled={disabled}
        grow
        onChange={onChange}
        max={max}
        min={min}
        name={name}
        paddingHorizontal={padding || paddingHorizontal}
        paddingVertical={padding || paddingVertical}
        readOnly={readOnly}
        ref={ref}
        step={step}
        tag="input"
        type="range"
        value={value}
      />
    </InputWrapper>
  );
});
