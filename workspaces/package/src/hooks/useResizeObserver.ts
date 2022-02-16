import { useEffect, useState, Ref } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default <T extends Element = Element>(): [
  DOMRectReadOnly,
  Ref<T>,
  T | null
] => {
  const [node, setNode] = useState<T | null>(null);
  const [size, setSize] = useState<DOMRectReadOnly>(new DOMRect());

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        setSize(entries[0].contentRect);
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
