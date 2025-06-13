
import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    freezeOnceVisible = true,
  }: UseIntersectionObserverProps
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

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
  }, [elementRef, JSON.stringify({ root, rootMargin, threshold })]);

  return frozen ? { inView: true, entry } : { inView: !!entry?.isIntersecting, entry };
}
