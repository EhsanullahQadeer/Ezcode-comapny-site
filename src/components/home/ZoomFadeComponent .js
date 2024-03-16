import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger); 
const ZoomFadeComponent = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -200",
        end: "bottom 150%",
        scrub: true,
      },
    });

    tl.to(textRef.current, {
      scale: 10,
      duration: 5,
    });

    return () => {
      tl.kill(); 
    };
  }, []);

  return (
    <div
      id="zoom-component"
      className="py-64 relative"
      style={{ height: "1400svh" }}
      ref={sectionRef}
    >
      <div
        className="sticky top-2/4 -translate-y-2/4"
        style={{ transition: "transform 0.2s ease-out" }}
      >
        <h1
          ref={textRef}
          style={{
            transition: "transform 0.2s ease-out",
          }}
          className="text-medium-blue text-82 font-bold text-center"
        >
          What We Do?
        </h1>
      </div>
    </div>
  );
};

export default ZoomFadeComponent;
