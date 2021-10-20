import { useEffect } from 'react';
export default (theme) => {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('Theme--day');
            document.documentElement.classList.remove('Theme--night');
            document.documentElement.classList.add(`Theme--${theme}`);
        }
    }, [theme]);
};
//# sourceMappingURL=useTheme.js.map