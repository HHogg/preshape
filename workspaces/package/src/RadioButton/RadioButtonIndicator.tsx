import { forwardRef } from 'react';
import { TypeBorderRadius } from '../types';
import {
  CheckBoxIndicator,
  CheckBoxIndicatorProps,
} from '../CheckBox/CheckBoxIndicator';

export interface RadioButtonIndicatorProps extends CheckBoxIndicatorProps {
  borderRadius?: TypeBorderRadius;
}

export const RadioButtonIndicator = forwardRef<
  HTMLInputElement,
  RadioButtonIndicatorProps
>((props, ref) => {
  return (
    <CheckBoxIndicator borderRadius="50%" {...props} ref={ref} type="radio" />
  );
});
