
import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  freezeOnceVisible = true,
}) {
  const elementRef = useRef(null);
  const [entry, setEntry] = useState();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, root, rootMargin, threshold]);

  return { elementRef, inView: frozen ? true : !!entry?.isIntersecting, entry };
}
