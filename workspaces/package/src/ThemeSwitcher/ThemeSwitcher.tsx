import { forwardRef } from 'react';
import { Icons } from '..';
import { Toggle, ToggleProps } from '../Toggle/Toggle';
import { TypeTheme } from '../types';
import { useThemeContext } from './useThemeContext';

export type ThemeSwitcherProps = Omit<ToggleProps, 'onChange' | 'value'> & {
  size?: number;
  onChange?: (theme: TypeTheme) => void;
  theme?: TypeTheme;
};

export const ThemeSwitcher = forwardRef<HTMLLabelElement, ThemeSwitcherProps>(
  (props, ref) => {
    const {
      onChange: onChangeProps,
      size = 28,
      theme: themeProps,
      ...rest
    } = props;
    const { theme: themeContext, onChange: onChangeContext } =
      useThemeContext();
    const theme = themeProps || themeContext;
    const onChange = onChangeProps || onChangeContext;

    return (
      <Toggle
        {...rest}
        iconOff={<Icons.Sun size={size - 12} />}
        iconOn={<Icons.Moon size={size - 12} />}
        onChange={(value) => onChange(value ? 'night' : 'day')}
        ref={ref}
        size={size}
        value={theme === 'night'}
      />
    );
  }
);
