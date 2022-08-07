import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes, BoxProps } from '../Box/Box';
import InputWrapper from './InputWrapper';
import Text, { TextProps } from '../Text/Text';
import useMatchingProps from '../hooks/useMatchingProps';
import './Input.css';
import { useFormContext, useFormRegisterField } from '../Form/FormContext';

export interface InputProps extends TextProps {
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

// TODO(hhogg): Find out how to just grab the keys of the BoxProps type.
const forwardKeys: (keyof BoxProps)[] = [
  'borderColor',
  'borderBottom',
  'borderLeft',
  'borderRight',
  'borderTop',
  'elevate',
  'height',
  'margin',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'textColor',
  'theme',
  'width',
];

const Input: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLInputElement | HTMLTextAreaElement, InputProps>
> = (props, ref) => {
  const {
    addonEnd,
    addonStart,
    backgroundColor = 'background-shade-1',
    borderRadius = 'x2',
    borderSize = 'x2',
    disabled,
    gap = 'x3',
    invalid,
    name,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    size = 'x3',
    tag = 'input',
    ...rest
  } = props;
  const { getError } = useFormContext();
  const refFormElement = useFormRegisterField(name);

  const [propsMatching, propsUnmatching] = useMatchingProps<
    InputProps,
    BoxProps
  >(rest, forwardKeys);

  return (
    <InputWrapper
      {...propsMatching}
      addonEnd={addonEnd}
      addonStart={addonStart}
      alignChildrenVertical="middle"
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderSize={borderSize}
      disabled={disabled}
      invalid={invalid || !!(name && getError(name))}
      flex="horizontal"
      gap={gap}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
    >
      <Text
        {...propsUnmatching}
        basis="0"
        className="Input__element"
        disabled={disabled}
        grow
        name={name}
        ref={refFormElement}
        size={size}
        strong
        tag={tag}
      />
    </InputWrapper>
  );
};

export default forwardRef(Input);
