import React, { useRef } from "react";
import ZoomComponent from "../components/home/ZoomFadeComponent ";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutSection } from "../components/home/AboutSection";
import { ProjectSection } from "../components/home/ProjectsSection";
import AnimateText from "../components/home/AnimateText";

import { ScrollerLogo } from "../components/home/ScrollerLogo";

export const Home = () => {
  const sectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  return (
    <>
      <div className="home-parent-wrapper w-full">
        <div ref={heroSectionRef} className="hero-section relative">
          <div className="hero-section-box sticky flex flex-col justify-center">
            <div className="relative  sm:max-w-fit left-1/2 -translate-x-2/4 ">
              <AnimateText sectionRef={heroSectionRef} />

              <ScrollerLogo sectionRef={heroSectionRef} />
            </div>
          </div>
        </div>
        <ZoomComponent headingRef={sectionRef} />
        <ServicesSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </>
  );
};
