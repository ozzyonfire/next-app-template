"use client";

import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { TransformContext } from "../canvas/TransformProvider";

export default function Draggable(props: {
  id: string;
  children: React.ReactNode;
  coodinates?: { x: number; y: number };
  onCoordinatesChange?: (coords: { x: number; y: number }) => void;
}) {
  const { id, coodinates, onCoordinatesChange, children } = props;
  const { scale } = useContext(TransformContext);
  const { setNodeRef, transform } = useDraggable({
    id,
  });
  const [coordinates, setCoordinates] = useState({
    x: coodinates?.x || 0,
    y: coodinates?.y || 0,
  });

  useEffect(() => {
    onCoordinatesChange?.(coordinates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  const transformStyles: CSSProperties = {
    transform: transform
      ? `translate3d(${transform?.x / scale}px, ${transform?.y / scale}px, 0)`
      : undefined,
    top: coordinates.y,
    left: coordinates.x,
  };

  useDndMonitor({
    onDragEnd(event) {
      const { delta, active } = event;
      if (!active) return;
      if (active.id !== id) return;
      setCoordinates((prev) => {
        return {
          x: prev.x + delta.x / scale,
          y: prev.y + delta.y / scale,
        };
      });
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={transformStyles}
      className="absolute draggable"
    >
      {children}
    </div>
  );
}
