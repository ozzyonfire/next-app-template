"use client";

import { useSortable } from "@dnd-kit/sortable";
import { Item } from "@prisma/client";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function ListItem(props: { item: Item }) {
  const { item } = props;
  const { setNodeRef, listeners, attributes, transform, transition } =
    useSortable({
      id: item.id,
    });

  const styles = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <div
      style={styles}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={item.id}
      className="flex flex-row gap-2 items-center py-1 px-2"
    >
      <div>{item.content}</div>
      <div className="flex-grow"></div>
      <Button size="icon" variant="ghost">
        <X />
      </Button>
    </div>
  );
}
