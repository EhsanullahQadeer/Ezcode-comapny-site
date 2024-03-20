import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../../hooks/use-scroll";
import cn from "clsx";
import { useRect } from "@studio-freight/hamo";
import { useWindowSize } from "react-use";

export default function ZoomElement({ headingRef }) {
  const zoomRef = useRef(null);
  const boxRef = useRef(null);
  const [zoomWrapperRectRef, zoomWrapperRect] = useRect();
  const { height: windowHeight } = useWindowSize();

  function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }

  function mapRange(in_min, in_max, input, out_min, out_max) {
    return (
      ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }

  const handleScroll = ({ scroll }) => {
    if (!zoomWrapperRect.top) return;
    const start = zoomWrapperRect.top + windowHeight * 0.5;
    const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight;

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1);
    const center = 0.6;
    const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1);
    // const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1);

    const minimumProgress1 = Math.max(progress1, 0.1);
    zoomRef.current.style.setProperty("--progress1", minimumProgress1);

    console.log(progress1);

    // if (progress1 === 1) {
    //   boxRef.current.style.setProperty("bottom", "-50%");
    // } else {
    //   boxRef.current.style.removeProperty("height");
    // }

      
    // zoomRef.current.style.setProperty("--progress2", progress2 * 4);
    // if (progress === 1) {
    //   zoomRef.current.style.setProperty("background-color", "currentColor");
    // }
    // else {
    //   zoomRef.current.style.removeProperty("background-color");
    // }
  };
  useScroll(handleScroll);

  return (
    <section
      ref={(node) => {
        zoomWrapperRectRef(node);
        zoomRef.current = node;
      }}
      className="solution"
    >
      <div className="inner">
        <div ref={boxRef} className="zoom">
          <h2
            ref={headingRef}
            className={`${cn(
              "enter",
              "h3 vh"
            )} text-medium-blue text-82 font-bold text-center`}
          >
            WHAT WE DO?
          </h2>
        </div>
      </div>
    </section>
  );
}
