import { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const BUFFER = 20;

const isElementInViewport = (el: Element) => {
  const rect = el.getBoundingClientRect();
  return rect.bottom > -BUFFER && rect.bottom < window.innerHeight + BUFFER &&
      rect.right > -BUFFER && rect.right < window.innerWidth + BUFFER &&
      rect.left > -BUFFER && rect.left < window.innerWidth + BUFFER &&
      rect.top > -BUFFER && rect.top < window.innerHeight + BUFFER;
};

export default (enabled: boolean): [boolean, (el: Element) => void] => {
  const [isInView, setIsInView] = useState(false);
  const element = useRef<Element>();

  const updateIsInView = debounce(() => {
    if (element.current) {
      const nextIsInView = isElementInViewport(element.current);

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

  const setRef = (el: Element) => {
    element.current = el;
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

  return [isInView, setRef];
};
