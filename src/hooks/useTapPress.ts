"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

const PRESS_DELAY_MS = 100;
const MOVE_THRESHOLD_PX = 9;

/**
 * Scroll-safe "pressed" state for touch/pen pointers.
 *
 * A plain CSS `:active` state fires on pointerdown, before the browser can
 * tell whether the gesture is a tap or the start of a scroll/drag — so a
 * large tap target (like a card) flashes its pressed style on every scroll
 * that happens to start on top of it. This hook defers the visual pressed
 * state behind a short delay and cancels it if the pointer moves past a
 * small threshold, so only a stationary, intentional touch activates it.
 *
 * Mouse pointers are ignored entirely; desktop hover stays CSS-driven.
 */
export function useTapPress<T extends HTMLElement = HTMLElement>() {
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    startRef.current = null;
    setPressed(false);
  }, []);

  useEffect(() => reset, [reset]);

  const onPointerDown = useCallback((e: PointerEvent<T>) => {
    if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
    startRef.current = { x: e.clientX, y: e.clientY };
    timerRef.current = setTimeout(() => {
      setPressed(true);
    }, PRESS_DELAY_MS);
  }, []);

  const onPointerMove = useCallback(
    (e: PointerEvent<T>) => {
      if (!startRef.current) return;
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;
      if (Math.hypot(dx, dy) > MOVE_THRESHOLD_PX) {
        reset();
      }
    },
    [reset]
  );

  return {
    pressed,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: reset,
      onPointerCancel: reset,
    },
  };
}
