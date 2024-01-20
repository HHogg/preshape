import { useState, useEffect, Ref } from 'react';

export default <T extends Element = Element>(
  ratio = 0
): [boolean, Ref<T>, T | null] => {
  const [node, setNode] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0] && entries[0].intersectionRatio > ratio);
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
  }, [ratio, node]);

  return [isInView, setNode, node];
};
