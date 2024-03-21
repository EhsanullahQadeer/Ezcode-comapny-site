import React, { useState, useEffect, useRef } from "react";
import cloudIcon from "../assets/icons/home/cloud-computing.png";
import webIcon from "../assets/icons/home/code.png";
import ZoomComponent from "../components/home/ZoomFadeComponent ";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutSection } from "../components/home/AboutSection";
import { ProjectSection } from "../components/home/ProjectsSection";
import ScrollerText from "../components/home/ScrollerText";
import AnimateText from "../components/home/AnimateText";
import { ReactComponent as LogoTop } from "../assets/icons/home/logoTop.svg";
import { ScrollerLogo } from "../components/home/ScrollerLogo";

export const Home = () => {
  // const [showHeroSection, setShowHeroSection] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const sectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

  //     if (scrollDirection === "down" && window.scrollY > window.innerHeight) {
  //       setShowHeroSection(false);
  //     } else if (
  //       scrollDirection === "up" &&
  //       window.scrollY < window.innerHeight
  //     ) {
  //       setShowHeroSection(true);
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        className="home-parent-wrapper w-full"
        // container mx-auto sm:px-16 px-6"
      >
        {/* {showHeroSection ? ( */}
        <div
          ref={heroSectionRef}
          className="hero-section container mx-auto sm:px-16 px-6 relative"
        >
          <div className="hero-section-box sticky flex flex-col justify-center -translate-y-2/4">
            {/* <div className="overflow-hidden" style={{ height: "max-content" }}>
              <h1
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-once="false"
                className={`heading text-medium-blue text-82 font-bold`}
              >
                EZ KODE
              </h1>
            </div> */}
            <div className="relative max-w-fit left-1/2 -translate-x-2/4">
              <AnimateText sectionRef={heroSectionRef} />

              <ScrollerLogo sectionRef={heroSectionRef}/>

              {/* <div className="flex gap-12">
                <div
                  style={{
                    overflow: "hidden",
                  }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className={`h-9 w-9`}
                    src={cloudIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down" data-aos-delay="800">
                    Cloud Computing
                  </span>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className={`h-9 w-9`}
                    src={webIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down" data-aos-delay="800">
                    Web Development
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* ) : (
          <div style={{ height: "calc(100svh - 104px)" }}></div>
        )} */}
        <ZoomComponent headingRef={sectionRef} />
        <ServicesSection />
        <AboutSection />
        <ProjectSection />
        {/* <ScrollerText /> */}
      </div>
    </>
  );
};
