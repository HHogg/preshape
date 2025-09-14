import { forwardRef, InputHTMLAttributes } from 'react';
import { TypeBorderRadius } from '../types';
import { Box } from '../Box/Box';
import { getBorderRadius } from '../Box/getBorderRadius';
import classNames from 'classnames';

export interface CheckBoxIndicatorProps
  extends InputHTMLAttributes<HTMLInputElement> {
  borderRadius?: TypeBorderRadius;
}

export const CheckBoxIndicator = forwardRef<
  HTMLInputElement,
  CheckBoxIndicatorProps
>((props, ref) => {
  const { type = 'checkbox', borderRadius = 'x1', ...inputProps } = props;

  const { predefinedBorderRadius, computedBorderRadius } =
    getBorderRadius(borderRadius);

  const classes = classNames('CheckBox__indicator', {
    [`CheckBox__indicator--border-radius-${predefinedBorderRadius}`]:
      predefinedBorderRadius,
  });

  return (
    <div className="CheckBox">
      <input
        {...inputProps}
        className="CheckBox__input"
        ref={ref}
        type={type}
      />
      <Box
        className={classes}
        borderRadius={borderRadius}
        style={
          { '--CheckBoxIndicator-border-radius': computedBorderRadius } as any
        }
      />
    </div>
  );
});
