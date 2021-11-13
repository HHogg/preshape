import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const element = location.hash && document.querySelector(location.hash);

    if (location.hash && element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView();
        navigate(location.pathname, { replace: true });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);
};
