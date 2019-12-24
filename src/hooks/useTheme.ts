import { useEffect } from 'react';
import { TypeTheme } from '../Base/Base';

export default (theme: TypeTheme) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('Theme--day');
      document.documentElement.classList.remove('Theme--night');
      document.documentElement.classList.add(`Theme--${theme}`);
    }
  }, [theme]);
};
