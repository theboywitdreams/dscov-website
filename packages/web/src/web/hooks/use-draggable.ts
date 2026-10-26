import { useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
export function useDraggable() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef(position);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  function move(el: HTMLElement, x: number, y: number) {
    const parent = el.parentElement!.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const baseX = rect.left - parent.left - positionRef.current.x;
    const baseY = rect.top - parent.top - positionRef.current.y;
    const next = {
      x: Math.max(-baseX + 4, Math.min(x, parent.width - rect.width - baseX - 4)),
      y: Math.max(-baseY + 4, Math.min(y, parent.height - rect.height - baseY - 4)),
    };
    positionRef.current = next;
    setPosition(next);
  }
  return {
    position,
    reset: () => {
      positionRef.current = { x: 0, y: 0 };
      setPosition({ x: 0, y: 0 });
    },
    handlers: {
      onPointerDown: (e: PointerEvent<HTMLElement>) => {
        if (e.button !== 0) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = {
          x: e.clientX,
          y: e.clientY,
          ox: positionRef.current.x,
          oy: positionRef.current.y,
        };
      },
      onPointerMove: (e: PointerEvent<HTMLElement>) => {
        if (drag.current)
          move(
            e.currentTarget,
            drag.current.ox + e.clientX - drag.current.x,
            drag.current.oy + e.clientY - drag.current.y,
          );
      },
      onPointerUp: () => {
        drag.current = null;
      },
      onPointerCancel: () => {
        drag.current = null;
      },
      onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
        const keys: Record<string, [number, number]> = {
          ArrowLeft: [-12, 0],
          ArrowRight: [12, 0],
          ArrowUp: [0, -12],
          ArrowDown: [0, 12],
        };
        if (keys[e.key]) {
          e.preventDefault();
          move(
            e.currentTarget,
            positionRef.current.x + keys[e.key][0],
            positionRef.current.y + keys[e.key][1],
          );
        }
      },
    },
  };
}
