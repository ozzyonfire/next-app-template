"use client";

import { useContext } from "react";
import { Button } from "../ui/button";
import { TransformContext } from "../canvas/TransformProvider";

export default function Toolbar() {
  const { reactZoomPanPinchContent } = useContext(TransformContext);
  const { zoomOut, zoomIn, resetTransform } = reactZoomPanPinchContent!;

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        onClick={() => {
          zoomOut();
        }}
      >
        Zoom Out
      </Button>
      <Button
        onClick={() => {
          zoomIn();
        }}
      >
        Zoom In
      </Button>
      <Button
        onClick={() => {
          resetTransform();
        }}
      >
        Reset
      </Button>
    </div>
  );
}
