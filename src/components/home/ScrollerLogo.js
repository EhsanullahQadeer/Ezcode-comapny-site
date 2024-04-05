import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollerLogo = ({ sectionRef }) => {
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);
  const [translateYValue, setTranslateYValue] = useState("220px");
  const [XValue, setXValue] = useState("-300vw");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTranslateYValue("150px");
        setXValue("-500svw")
      } else {
        setTranslateYValue("220px");
        setXValue("-300vw")
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.set(topRef.current, {
      rotate: "-180deg",
      translateY: `-${translateYValue}`,
      transformOrigin: "center center",
    });

    topTl.to(topRef.current, {
      rotate: "0deg",
      translateY: "0px",
      delay: 1.5,
      duration: 5,
      ease: "power1.out",
    });

    const middleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.set(middleRef.current, { x: `${XValue}` });

    middleTl.to(middleRef.current, {
      x: "0",
      delay: 1.5,
      duration: 5,
      ease: "power1.out",
    });

    const bottomTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.set(bottomRef.current, {
      rotate: "180",
      translateY: `${translateYValue}`,
      transformOrigin: "center center",
    });

    bottomTl.to(bottomRef.current, {
      rotate: "0deg",
      translateY: "0px",
      delay: 1.5,
      duration: 5,
      ease: "power1.out",
    });
  }, [translateYValue]);

  return (
    <>
      <div className="flex justify-center">
        <svg
          className="overflow-visible w-1/2 h-1/2 sm:w-full sm:h-full"
          viewBox="0 0 1000 1000"
        >
          <motion.path
            d="m381.71,507.01c-6.42,0-12.86-.86-19.15-2.6-19.38-5.38-35.71-18.76-44.79-36.71l-95.11-187.92c-13.82-27.31-12.38-59.11,3.86-85.06,16.24-25.95,44.26-41.13,74.82-40.64l431.56,7.03c28.94.47,52.67,18.79,60.44,46.67,7.78,27.88-3.04,55.84-27.55,71.22l-345.93,217.07c-11.51,7.23-24.78,10.96-38.16,10.96Zm-81.8-324.07c-20.02,0-38.24,10.08-48.89,27.1-10.82,17.3-11.79,38.49-2.58,56.69l95.11,187.92c5.51,10.88,15.01,18.66,26.75,21.93,11.74,3.26,23.9,1.49,34.23-4.99l345.93-217.07c16.29-10.22,18.48-26.85,15.08-38.99-3.39-12.15-13.86-25.24-33.09-25.55l-431.56-7.03c-.33,0-.65,0-.97,0Z"
            fill="#2745c8"
            ref={topRef}
          />

          <motion.path
            d="m292.2,826.49c-14.88,0-29.78-3.85-43.45-11.59-28.06-15.86-44.81-44.58-44.81-76.81v-479.42c0-32.32,16.82-61.08,45-76.92,28.18-15.83,61.49-15.26,89.1,1.54l425.74,259.09c20.27,12.34,32.34,33.87,32.29,57.61-.06,23.74-12.24,45.21-32.57,57.45l-425.84,256.25c-14.16,8.52-29.8,12.79-45.46,12.79Zm0-627.27c-9.96,0-19.94,2.57-29.11,7.72-18.95,10.65-30.27,30-30.27,51.74v479.42c0,21.68,11.27,40.99,30.14,51.67,18.87,10.67,41.23,10.37,59.81-.81l425.84-256.25c11.6-6.98,18.55-19.23,18.58-32.77.03-13.54-6.85-25.82-18.42-32.86L323.02,207.97c-9.59-5.84-20.2-8.76-30.82-8.76Z"
            fill="rgba(70, 110, 240, 1)"
            ref={middleRef}
          />

          <motion.path
            d="m299.89,845.94c-30.03,0-57.37-15.12-73.36-40.65-16.24-25.95-17.69-57.75-3.86-85.06l95.11-187.92c9.08-17.95,25.41-31.33,44.79-36.71,19.38-5.38,40.27-2.33,57.31,8.35l345.93,217.07c24.52,15.38,35.33,43.34,27.56,71.22-7.78,27.88-31.5,46.2-60.45,46.67l-431.56,7.03c-.49,0-.98.01-1.46.01Zm82-324.11c-3.86,0-7.75.53-11.6,1.6-11.74,3.26-21.24,11.05-26.75,21.93l-95.11,187.92c-9.21,18.2-8.25,39.4,2.58,56.69,10.65,17.02,28.88,27.09,48.89,27.09.33,0,.65,0,.98,0l431.56-7.03c19.23-.32,29.7-13.41,33.09-25.55,3.39-12.15,1.21-28.77-15.08-38.99l-345.93-217.07c-6.94-4.36-14.71-6.58-22.63-6.58Z"
            fill="rgba(53, 92, 223, 1)"
            ref={bottomRef}
          />
        </svg>
      </div>
    </>
  );
};
