"use client";

import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props: {
  id: string;
  children: React.ReactNode;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div
      className={cn({
        "bg-green-500": isOver,
      })}
      ref={setNodeRef}
    >
      {props.children}
    </div>
  );
}
