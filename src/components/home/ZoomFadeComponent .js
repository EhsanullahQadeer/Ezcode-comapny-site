import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

let timeOutId;
export default function ZoomElement() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  }, []);

  const progress = useTransform(scrollY, [1400, sectionHeight - 1400], [1, 20]);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        textRef.current.style.transform = `scale(${progress.get()})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["50vh start", "end 100vh"],
  });

  const [isSectionEnd, setIsSectionEnd] = useState(false);
  const [hideProgressBar, sethideProgressBar] = useState(false);

  const handleScroll = () => {
    setIsSectionEnd(scrollYProgress.current === 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    clearTimeout(timeOutId);
    if (isSectionEnd) {
      timeOutId = setTimeout(() => sethideProgressBar(true), 2000);
    } else {
      sethideProgressBar(false);
    }
  }, [isSectionEnd]);

  return (
    <div
      id="zoom-component"
      className="py-64 relative"
      style={{ height: "800svh" }}
      ref={sectionRef}
    >
      {!hideProgressBar && (
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress, opacity: isSectionEnd ? "0" : "1" }}
        />
      )}

      <div className="sticky top-2/4 -translate-y-2/4">
        <h1
          ref={textRef}
          className="text-medium-blue text-82 font-bold text-center"
          style={{
            transition: "transform 0.2s ease-out",
          }}
        >
          What We Do?
        </h1>
      </div>
    </div>
  );
}
