import { useState, useEffect } from 'react';

export default (): [boolean, React.Ref<HTMLElement>] => {
  const [node, setNode] = useState<Element | null>(null);
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

  return [isInView, setNode];
};
