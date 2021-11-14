import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes, TypeSize } from '../Box/Box';
import CheckBoxIndicator from './CheckBoxIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';

export interface CheckBoxProps {
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** @Ignore */
  margin?: TypeSize;
  /** @Ignore */
  padding?: TypeSize;
  /** @Ignore */
  paddingHorizontal?: TypeSize;
  /** @Ignore */
  paddingVertical?: TypeSize;
}

const CheckBox: RefForwardingComponent<
  HTMLInputElement,
  Attributes<HTMLInputElement, CheckBoxProps>
> = (props, ref) => {
  const {
    children,
    disabled,
    margin,
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <SelectInputLabel
      className="CheckBox__label"
      disabled={disabled}
      label={children}
      margin={margin}
      padding={padding}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      <CheckBoxIndicator {...rest} disabled={disabled} ref={ref} />
    </SelectInputLabel>
  );
};

export default forwardRef(CheckBox);
