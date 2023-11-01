import { LucideProps, MoonIcon, SunIcon } from 'lucide-react';
import { useThemeContext } from 'preshape';
import { FC } from 'react';

const ThemeIcon: FC<LucideProps> = (props) => {
  const { theme } = useThemeContext();
  return theme === 'day' ? <SunIcon {...props} /> : <MoonIcon {...props} />;
};

export default ThemeIcon;
