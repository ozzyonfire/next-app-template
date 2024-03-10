"use client";

import { createContext, useState } from "react";
import {
  ReactZoomPanPinchContentRef,
  TransformWrapper,
} from "react-zoom-pan-pinch";

export const TransformContext = createContext<{
  scale: number;
  setScale: (scale: number) => void;
  reactZoomPanPinchContent: ReactZoomPanPinchContentRef | null;
}>({
  scale: 1,
  setScale: () => {},
  reactZoomPanPinchContent: null,
});

export default function TransformContextProvider(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  const [scale, setScale] = useState(1);

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.2}
      maxScale={3}
      centerOnInit={true}
      limitToBounds={false}
      onZoom={(ref) => {
        setScale(ref.state.scale);
      }}
      doubleClick={{
        disabled: true,
      }}
      panning={{
        excluded: ["input", "draggable"],
      }}
    >
      {(transformProps) => (
        <TransformContext.Provider
          value={{
            scale,
            setScale,
            reactZoomPanPinchContent: transformProps,
          }}
        >
          {children}
        </TransformContext.Provider>
      )}
    </TransformWrapper>
  );
}
