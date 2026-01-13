'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function CountUpAnimation({ 
  end, 
  duration = 2000,
  prefix = '',
  suffix = ''
}: CountUpAnimationProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      countRef.current = Math.floor(progress * end);
      setCount(countRef.current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}