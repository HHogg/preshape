import { forwardRef } from 'react';
import {
  SelectInputLabel,
  SelectInputLabelProps,
} from '../SelectInputLabel/SelectInputLabel';
import { CheckBoxIndicator } from './CheckBoxIndicator';
import './CheckBox.css';
import { TypeColor, TypeBorderRadius } from '../types';
import classNames from 'classnames';

/**
 * Standard toggling checkbox input for selecting multiple choices.
 */
export interface CheckBoxProps extends Omit<SelectInputLabelProps, 'label'> {
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

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const {
      children,
      indicatorBorderRadius,
      borderColorHover = 'accent-shade-3',
      borderColorActive = 'accent-shade-5',
      indicatorBorderColor = 'text-shade-1',
      indicatorBorderColorHover = 'text-shade-1',
      indicatorBorderColorActive = 'accent-shade-3',
      indicatorColorActive = 'accent-shade-3',
      indicatorColorHover = 'text-shade-1',
      textColorHover = 'accent-shade-3',
      textColorActive = 'accent-shade-4',
      checked,
      onChange,
      name,
      disabled,
      paddingHorizontal = 'x3',
      paddingVertical = 'x2',
      readOnly,
      type = 'checkbox',
      ...rest
    } = props;

    const classes = classNames('CheckBox', {
      ['CheckBox--checked']: checked,
      [`CheckBox--border-color-${indicatorBorderColor}`]: indicatorBorderColor,
      [`CheckBox--border-color-hover-${indicatorBorderColorHover}`]:
        !disabled && indicatorBorderColorHover,
      [`CheckBox--border-color-active-${indicatorBorderColorActive}`]: checked,
      [`CheckBox--color-hover-${indicatorColorHover}`]:
        !disabled && indicatorColorHover,
      [`CheckBox--color-active-${indicatorColorActive}`]: checked,
    });

    return (
      <SelectInputLabel
        {...rest}
        active={checked}
        borderColorActive={borderColorActive}
        borderColorHover={borderColorHover}
        textColorActive={textColorActive}
        textColorHover={textColorHover}
        className={classes}
        disabled={disabled}
        label={children}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
      >
        <CheckBoxIndicator
          borderRadius={indicatorBorderRadius}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          readOnly={readOnly}
          ref={ref}
          type={type}
        />
      </SelectInputLabel>
    );
  }
);
