import { MoonIcon, SunIcon } from 'lucide-react';
import { forwardRef } from 'react';
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
        iconOff={<SunIcon size={size - 12} />}
        iconOn={<MoonIcon size={size - 12} />}
        onChange={(value) => onChange(value ? 'night' : 'day')}
        ref={ref}
        size={size}
        value={theme === 'night'}
      />
    );
  }
);
