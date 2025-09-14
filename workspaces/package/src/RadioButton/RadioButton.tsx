import { forwardRef } from 'react';
import { CheckBox, CheckBoxProps } from '../CheckBox/CheckBox';
import { TypeColor, TypeBorderRadius } from '../types';

/**
 * Standard toggling radio input for selecting a single choice.
 */
export interface RadioButtonProps extends CheckBoxProps {
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
   * Sets the indicator border color
   *
   * @default 'text-shade-1'
   */
  indicatorBorderColor?: TypeColor;
  /**
   * Sets the indicator border color when hovered
   *
   * @default 'text-shade-1'
   */
  indicatorBorderColorHover?: TypeColor;
  /**
   * Sets the indicator border color when active (focused)
   *
   * @default 'accent-shade-3'
   */
  indicatorBorderColorActive?: TypeColor;
  /**
   * Sets the border radius of the indicator
   *
   * @default 'x1' for checkbox, '50%' for radio
   */
  indicatorBorderRadius?: TypeBorderRadius;
  /**
   * Sets the indicator color when hovered
   *
   * @default 'text-shade-1'
   */
  indicatorColorHover?: TypeColor;
  /**
   * Sets the indicator color when active (focused)
   *
   * @default 'accent-shade-4'
   */
  indicatorColorActive?: TypeColor;
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

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    return (
      <CheckBox indicatorBorderRadius="50%" {...props} ref={ref} type="radio" />
    );
  }
);
