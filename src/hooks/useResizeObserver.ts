import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default (): [{ height: number; width: number }, React.Ref<HTMLElement>] => {
  const [node, setNode] = useState<Element | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }

      observer.disconnect();
    };
  }, [node]);

  return [size, setNode];
};
