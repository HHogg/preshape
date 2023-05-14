import { FC } from 'react';
import { Icons, useThemeContext } from 'preshape';

const ThemeIcon: FC<Icons.Props> = (props) => {
  const { theme } = useThemeContext();
  return theme === 'day' ? <Icons.Sun {...props} /> : <Icons.Moon {...props} />;
};

export default ThemeIcon;
