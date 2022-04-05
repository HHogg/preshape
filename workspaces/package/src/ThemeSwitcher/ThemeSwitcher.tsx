import React, { forwardRef, RefForwardingComponent } from 'react';
import { Icons } from '..';
import { Attributes, TypeTheme } from '../Box/Box';
import Toggle, { ToggleProps } from '../Toggle/Toggle';

export type ThemeSwitcherProps = Omit<ToggleProps, 'onChange' | 'value'> & {
  size?: number;
  onChange: (theme: TypeTheme) => void;
  theme: TypeTheme;
};

const ThemeControls: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, ThemeSwitcherProps>
> = (props, ref) => {
  const { onChange, size = 28, theme, ...rest } = props;

  return (
    <Toggle
      {...rest}
      iconOff={<Icons.Sun size={size - 12} />}
      iconOn={<Icons.Moon size={size - 12} />}
      onChange={(value) => onChange(value ? 'night' : 'day')}
      size={size}
      value={theme === 'night'}
    />
  );
};

export default forwardRef(ThemeControls);
