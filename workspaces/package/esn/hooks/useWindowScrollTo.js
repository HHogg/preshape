import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
export default () => {
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        const element = location.hash && document.querySelector(location.hash);
        if (location.hash && element) {
            window.requestAnimationFrame(() => {
                element.scrollIntoView();
                history.replace(location.pathname);
            });
        }
        else {
            window.scrollTo({ top: 0 });
        }
    }, []);
};
//# sourceMappingURL=useWindowScrollTo.js.map