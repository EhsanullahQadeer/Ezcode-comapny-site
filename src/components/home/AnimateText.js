import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimateText = ({ sectionRef }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animation on page load
    // const tl = gsap.timeline();
    // gsap.set(textRef.current, { x: "220%" });
    // tl.to(textRef.current, {
    //   x: "0",
    //   duration: 2,
    //   ease: "power1.out",
    //   delay: 1,
    // });

    // Animation on scroll

    // clearTimeout(timeout)
    // timeout = setTimeout(() => {
    //   // to make gsap scrollY to 0
    //   ScrollTrigger.getAll().forEach((trigger) => {
    //     trigger.scroll(0);
    //   });

      // setTimeout(() => {

        gsap.set(textRef.current, { x: "0%" });
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            
          },
        });

        scrollTl.to(textRef.current, {
          x: "150%",
          duration: 4,
          ease: "power1.out",
        });

        return () => {
          scrollTl.kill();
        };
    //   }, 100);

    // }, 3000);
  }, [sectionRef]);

  return (
    <div className="absolute top-1/2 left-2/4 -translate-y-1/2 -translate-x-1/2">
      <h3
        ref={textRef}
        className="text-medium-blue text-48 font-bold text-center whitespace-nowrap"
      >
        ELEVATE YOUR DIGITAL GAME!
      </h3>
    </div>
  );
};

export default AnimateText;
