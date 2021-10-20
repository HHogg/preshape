import { useState, useEffect } from 'react';

export default <T extends Element = Element>(): [boolean, React.Ref<T>, T | null] => {
  const [node, setNode] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0] && entries[0].intersectionRatio > 0);
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

  return [isInView, setNode, node];
};
