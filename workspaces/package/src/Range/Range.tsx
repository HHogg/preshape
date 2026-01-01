import { forwardRef } from 'react';
import type React from 'react';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { InputWrapper, InputWrapperProps } from '../Input/InputWrapper';
import { TypeColor } from '../types';
import './Range.css';

/**
 * A range component that can be used to select a value from a range.
 */
export type RangeProps<TValue extends number | [number, number]> = Omit<
  InputWrapperProps,
  'value' | 'onChange'
> & {
  thumbColor?: TypeColor;
  trackColor?: TypeColor;
  trackFillColor?: TypeColor;
  value: TValue;
  onChange: (value: TValue) => void;
};

export const Range = forwardRef(
  <TValue extends number | [number, number]>(
    props: RangeProps<TValue>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const {
      addonEnd,
      addonStart,
      backgroundColor,
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
      textColor,
      textColorHover,
      textColorActive,
      thumbColor = 'text-shade-1',
      trackColor = 'background-shade-4',
      trackFillColor,
      ...rest
    } = props;

    return (
      <InputWrapper
        {...rest}
        addonEnd={addonEnd}
        addonStart={addonStart}
        alignChildrenVertical="middle"
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderSize={borderSize}
        disabled={disabled}
        invalid={invalid}
        flex="horizontal"
        gap={gap}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        textColor={textColor}
        textColorHover={textColorHover}
        textColorActive={textColorActive}
      >
        {Array.isArray(value) ? (
          <DoubleRangeSlider
            disabled={disabled}
            onChange={onChange as (value: [number, number]) => void}
            name={name}
            max={max}
            min={min}
            step={step}
            value={value as [number, number]}
            ref={ref}
            padding={padding}
            paddingHorizontal={paddingHorizontal}
            paddingVertical={paddingVertical}
            readOnly={readOnly}
            thumbColor={thumbColor}
            trackColor={trackColor}
            trackFillColor={trackFillColor}
          />
        ) : (
          <SingleRangeSlider
            disabled={disabled}
            onChange={onChange as (value: number) => void}
            name={name}
            max={max}
            min={min}
            step={step}
            value={value as number}
            ref={ref}
            padding={padding}
            paddingHorizontal={paddingHorizontal}
            paddingVertical={paddingVertical}
            readOnly={readOnly}
            thumbColor={thumbColor}
            trackColor={trackColor}
            trackFillColor={trackFillColor}
          />
        )}
      </InputWrapper>
    );
  }
) as <TValue extends number | [number, number]>(
  props: RangeProps<TValue> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement;

const SingleRangeSlider = forwardRef<HTMLInputElement, RangeProps<number>>(
  (props, ref) => {
    const {
      disabled,
      onChange,
      name,
      max,
      min,
      step,
      value,
      padding,
      paddingHorizontal,
      paddingVertical,
      readOnly,
      thumbColor,
      trackColor,
      trackFillColor,
    } = props;

    const classes = classnames('Range', {
      [`Range--thumb-color-${thumbColor}`]: thumbColor,
      [`Range--track-color-${trackColor}`]: trackColor,
      [`Range--track-fill-color-${trackFillColor}`]: trackFillColor,
    });

    // Calculate fill percentage for track fill styling
    const minValue = typeof min === 'string' ? parseFloat(min) : (min ?? 0);
    const maxValue = typeof max === 'string' ? parseFloat(max) : (max ?? 100);
    const fillPercent = ((value - minValue) / (maxValue - minValue)) * 100;

    return (
      <Box
        basis="0"
        className={classes}
        disabled={disabled}
        grow
        onChange={(event) =>
          onChange((event.target as HTMLInputElement).valueAsNumber)
        }
        max={max}
        min={min}
        name={name}
        paddingHorizontal={padding || paddingHorizontal}
        paddingVertical={padding || paddingVertical}
        readOnly={readOnly}
        ref={ref}
        step={step}
        style={
          {
            '--fill-percent': `${fillPercent}%`,
          } as React.CSSProperties
        }
        tag="input"
        type="range"
        value={value}
      />
    );
  }
);

const DoubleRangeSlider = forwardRef<
  HTMLInputElement,
  RangeProps<[number, number]>
>((props, ref) => {
  const {
    disabled,
    onChange,
    name,
    max,
    min,
    step,
    value,
    padding,
    paddingHorizontal,
    paddingVertical,
    readOnly,
    thumbColor,
    trackColor,
    trackFillColor = 'text-shade-1',
  } = props;

  const [start, end] = value;

  // Calculate fill percentages for double range (between start and end)
  const minValue = typeof min === 'string' ? parseFloat(min) : (min ?? 0);
  const maxValue = typeof max === 'string' ? parseFloat(max) : (max ?? 100);
  const startPercent = ((start - minValue) / (maxValue - minValue)) * 100;
  const endPercent = ((end - minValue) / (maxValue - minValue)) * 100;

  // Create classes for the double range with fill between thumbs
  const lowerClasses = classnames('Range Range--double-lower', {
    [`Range--thumb-color-${thumbColor}`]: thumbColor,
    [`Range--track-color-${trackColor}`]: trackColor,
    [`Range--track-fill-color-${trackFillColor}`]: trackFillColor,
  });

  const upperClasses = classnames('Range Range--double-upper', {
    [`Range--thumb-color-${thumbColor}`]: thumbColor,
    [`Range--track-color-${trackColor}`]: trackColor,
    [`Range--track-fill-color-${trackFillColor}`]: trackFillColor,
  });

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).valueAsNumber;

    if (value <= end) {
      onChange([value, end]);
    }
  };

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).valueAsNumber;

    if (value >= start) {
      onChange([start, value]);
    }
  };

  return (
    <Box
      container
      style={
        {
          '--fill-start': `${startPercent}%`,
          '--fill-end': `${endPercent}%`,
        } as React.CSSProperties
      }
    >
      <Box
        basis="0"
        className={lowerClasses}
        disabled={disabled}
        grow
        onChange={handleStartChange}
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
        value={start}
      />

      <Box
        absolute="edge-to-edge"
        basis="0"
        className={upperClasses}
        disabled={disabled}
        grow
        onChange={handleEndChange}
        max={max}
        min={min}
        name={name}
        paddingHorizontal={padding || paddingHorizontal}
        paddingVertical={padding || paddingVertical}
        readOnly={readOnly}
        step={step}
        tag="input"
        type="range"
        value={end}
      />
    </Box>
  );
});
