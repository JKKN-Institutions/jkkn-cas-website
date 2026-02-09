'use client'
import React, { useRef, useEffect, useCallback } from "react";

// cn utility function (similar to clsx or classnames)
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

const useAnimationFrame = (callback: (time: number, delta: number) => void) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== null && previousTimeRef.current !== undefined) {
      const delta = time - previousTimeRef.current;
      callback(time, delta);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  children: React.ReactNode;
  speed?: number;
  vertical?: boolean;
  repeat?: number;
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  draggable = false,
  children,
  speed = 50,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const singleContentBlockRef = useRef<HTMLDivElement | null>(null);
  const animX = useRef<number>(0);
  const isPaused = useRef<boolean>(false);

  // Drag state
  const isDragging = useRef<boolean>(false);
  const dragStartPos = useRef<number>(0);
  const dragStartAnimX = useRef<number>(0);
  const hasDragged = useRef<boolean>(false);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current || !contentRef.current || !singleContentBlockRef.current) return;

    if (isDragging.current) return;

    if ((pauseOnHover && isPaused.current)) {
      return;
    }

    const singleContentBlockSize = vertical
      ? singleContentBlockRef.current.offsetHeight
      : singleContentBlockRef.current.offsetWidth;

    const contentStyle = window.getComputedStyle(contentRef.current);
    const computedGap = parseFloat(vertical ? contentStyle.rowGap || '0' : contentStyle.columnGap || '0');
    const loopDistance = singleContentBlockSize + computedGap;
    const dx = (speed * delta) / 1000;
    const effectiveDx = reverse ? dx : -dx;
    animX.current += effectiveDx;

    if (Math.abs(animX.current) >= loopDistance) {
      animX.current = animX.current % loopDistance;
    }

    if (vertical) {
      contentRef.current.style.transform = `translateY(${animX.current}px)`;
    } else {
      contentRef.current.style.transform = `translateX(${animX.current}px)`;
    }
  });

  const wrapPosition = useCallback(() => {
    if (!contentRef.current || !singleContentBlockRef.current) return;
    const singleContentBlockSize = vertical
      ? singleContentBlockRef.current.offsetHeight
      : singleContentBlockRef.current.offsetWidth;
    const contentStyle = window.getComputedStyle(contentRef.current);
    const computedGap = parseFloat(vertical ? contentStyle.rowGap || '0' : contentStyle.columnGap || '0');
    const loopDistance = singleContentBlockSize + computedGap;
    if (loopDistance > 0 && Math.abs(animX.current) >= loopDistance) {
      animX.current = animX.current % loopDistance;
    }
  }, [vertical]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && !isDragging.current) {
      isPaused.current = true;
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      isPaused.current = false;
    }
    if (isDragging.current) {
      isDragging.current = false;
      if (containerRef.current) containerRef.current.style.cursor = '';
    }
  }, [pauseOnHover]);

  // Drag handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!draggable) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStartPos.current = vertical ? e.clientY : e.clientX;
    dragStartAnimX.current = animX.current;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
      containerRef.current.setPointerCapture(e.pointerId);
    }
  }, [draggable, vertical]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggable || !isDragging.current || !contentRef.current) return;
    const currentPos = vertical ? e.clientY : e.clientX;
    const diff = currentPos - dragStartPos.current;
    if (Math.abs(diff) > 3) hasDragged.current = true;
    animX.current = dragStartAnimX.current + diff;
    wrapPosition();
    if (vertical) {
      contentRef.current.style.transform = `translateY(${animX.current}px)`;
    } else {
      contentRef.current.style.transform = `translateX(${animX.current}px)`;
    }
  }, [draggable, vertical, wrapPosition]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!draggable) return;
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = draggable ? 'grab' : '';
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  }, [draggable]);

  // Prevent click on children after drag
  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.stopPropagation();
      e.preventDefault();
      hasDragged.current = false;
    }
  }, []);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]" +
          (vertical ? " flex-col" : " flex-row") +
          (draggable ? " select-none" : ""),
        className,
      )}
      style={draggable ? { cursor: 'grab', touchAction: 'pan-y' } : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClickCapture={handleClickCapture}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]" +
            (vertical ? " flex-col" : " flex-row")
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={i} ref={i === 0 ? singleContentBlockRef : null} className="flex gap-8">
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Marquee;
