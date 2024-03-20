import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.set(textRef.current, { x: "120%" });

    tl.to(textRef.current, {
      x: "-120%",
      duration: 5, // Adjust duration per word
      ease: "power1.out",
      //   stagger: 0.1, // Adjust stagger between each word
    });
  }, []);

  return (
    <div ref={sectionRef} className="scroller-text-parent-wrapper relative">
      <div className="sticky top-2/4 left-1/2 text-center">
        <h3
          ref={textRef}
          className="text-medium-blue text-64 font-bold text-center"
        >
          ELEVATE YOUR DIGITAL GAME!
        </h3>
      </div>
    </div>
  );
};

export default ScrollAnimation;
