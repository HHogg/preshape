import { useRef, useState, useEffect } from 'react';

export default (): [boolean, React.Ref<HTMLElement>] => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0] && entries[0].intersectionRatio > 0);
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
  }, [ref.current]);

  return [isInView, ref];
};
