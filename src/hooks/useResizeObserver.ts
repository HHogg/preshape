import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (entries && entries.length) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }

      observer.disconnect();
    };
  }, []);

  return size;
};
