"use client";

import { DndContext } from "@dnd-kit/core";
import { Item, List } from "@prisma/client";
import Canvas from "../canvas/Canvas";
import ListCard from "../list/ListCard";

export default function DnD({
  lists,
}: {
  lists: (List & {
    items: Item[];
  })[];
}) {
  return (
    <DndContext
      onDragEnd={(event) => {
        const { over } = event;
        console.log("drag ended", over?.id);
      }}
    >
      <Canvas>
        {lists.map((list) => {
          return <ListCard key={list.id} list={list} />;
        })}
      </Canvas>
    </DndContext>
  );
}
