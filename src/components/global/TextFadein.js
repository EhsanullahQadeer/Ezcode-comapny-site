import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextFadeIn = ({ text, sectionRef, animation, delay }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split the text into words
    const words = text.split(" ").map((word) => `<span>${word} </span>`);
    textRef.current.innerHTML = words.join("");

    // Apply animation to each word
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.set(textRef.current.children, { opacity: 0.2 });

    tl.to(textRef.current.children, {
      opacity: 1,
      duration: 0.5, // Adjust duration per word
      ease: "power1.out",
      stagger: 0.1, // Adjust stagger between each word
    });
  }, [text]);

  return <p data-aos={animation} data-aos-delay={delay} ref={textRef}></p>;
};
