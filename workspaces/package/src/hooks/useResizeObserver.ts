import { useEffect, useState, Ref } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default <T extends Element = Element>(): [
  { height: number; width: number },
  Ref<T>,
  T | null
] => {
  const [node, setNode] = useState<T | null>(null);
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

  return [size, setNode, node];
};
