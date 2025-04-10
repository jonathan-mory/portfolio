import { useEffect, useState } from 'react';

export default function useScrollSpy(
  sectionIds = [],
  offset = 0,
  threshold = 0.5
) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: null,
          rootMargin: `-${offset}px 0px 0px 0px`,
          threshold,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset, threshold]);

  return activeId;
}
