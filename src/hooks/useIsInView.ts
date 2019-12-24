import { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const BUFFER = 20;


const isElementInViewport = (el: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();

  return rect.left < window.innerWidth + BUFFER &&
    rect.left + rect.width > -BUFFER &&
    rect.top < window.innerHeight + BUFFER &&
    rect.top + rect.height > -BUFFER;
};

export default (enabled: boolean = true): [boolean, React.Ref<HTMLElement>] => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const updateIsInView = debounce(() => {
    if (ref.current) {
      const nextIsInView = isElementInViewport(ref.current);

      if (isInView !== nextIsInView) {
        setIsInView(nextIsInView);
      }
    }
  }, 100);

  const addEventListeners = () => {
    document.addEventListener('scroll', updateIsInView);
    document.addEventListener('resize', updateIsInView);
  };

  const removeEventListeners = () => {
    document.removeEventListener('scroll', updateIsInView);
    document.removeEventListener('resize', updateIsInView);
  };

  useEffect(() => {
    if (enabled) {
      updateIsInView();
      addEventListeners();
    } else {
      removeEventListeners();
    }

    return () => {
      removeEventListeners();
    };
  }, [enabled]);

  return [isInView, ref];
};
