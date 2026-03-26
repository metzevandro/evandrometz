import { useState, useEffect, useRef, RefObject } from "react";

interface UseCarouselReturn {
  index: number;
  height: number;
  containerRef: RefObject<HTMLDivElement | null>;
  setIndex: (index: number) => void;
  startAutoPlay: () => void;
}

export function useCarousel(
  items: unknown[],
  autoPlayInterval = 5000,
): UseCarouselReturn {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, []);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length, autoPlayInterval]);

  return { index, height, containerRef, setIndex, startAutoPlay };
}
