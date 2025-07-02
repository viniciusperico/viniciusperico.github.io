
"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  delay?: string; // e.g., 'delay-200'
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className, 
  id, 
  as: Component = 'section',
  delay = ''
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add('is-visible');
          observer.unobserve(currentRef); // Unobserve after animation
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Component
      ref={sectionRef}
      id={id}
      className={cn(
        'section-animate py-16 md:py-24 px-4 sm:px-6 lg:px-8',
        delay,
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </Component>
  );
};
