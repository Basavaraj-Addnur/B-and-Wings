"use client";

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

export default function ScrollFloat({
  children = "",
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = 'back.out(2)',
  scrollStart = 'top 85%',
  scrollEnd = 'bottom 20%',
  stagger = 0.03
}: ScrollFloatProps) {
  // Explicitly typing the ref to HTMLHeadingElement fixes the 'never' error
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    return children.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          opacity: 0,
          y: 60,
          scaleY: 1.5,
          scaleX: 0.9,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          y: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          }
        }
      );
    });

    return () => ctx.revert(); 
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float-container ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  );
}