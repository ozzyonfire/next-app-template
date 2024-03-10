"use client";

import React from "react";
import { TransformComponent } from "react-zoom-pan-pinch";

export default function Canvas(props: { children: React.ReactNode }) {
  return (
    <TransformComponent
      contentStyle={{
        width: "100%",
        height: "100%",
      }}
      wrapperStyle={{
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </TransformComponent>
  );
}
