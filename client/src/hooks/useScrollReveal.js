import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns a ref to attach to any element.
 * When that element enters the viewport, `visible` becomes true.
 *
 * @param {number} threshold  0–1, how much of the element must be visible (default 0.15)
 * @param {number} rootMargin px offset before triggering (default "0px 0px -60px 0px")
 */
const useScrollReveal = (threshold = 0.15, rootMargin = "0px 0px -60px 0px") => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
};

export default useScrollReveal;
