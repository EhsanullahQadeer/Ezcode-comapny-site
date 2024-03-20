import React, { useState, useEffect, useRef } from "react";
import cloudIcon from "../assets/icons/home/cloud-computing.png";
import webIcon from "../assets/icons/home/code.png";
import ZoomComponent from "../components/home/ZoomFadeComponent ";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutSection } from "../components/home/AboutSection";
import { ProjectSection } from "../components/home/ProjectsSection";
import { DigitalSection } from "../components/home/DigitalSection";
import ScrollerText from "../components/home/ScrollerText";

export const Home = () => {
  const [showHeroSection, setShowHeroSection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDirection = currentScrollPos > prevScrollPos ? "down" : "up";

      if (scrollDirection === "down" && window.scrollY > window.innerHeight) {
        setShowHeroSection(false);
      } else if (
        scrollDirection === "up" &&
        window.scrollY < window.innerHeight
      ) {
        setShowHeroSection(true);
      }
      console.log("currentScrollPos", currentScrollPos);
      console.log("prevScrollPos", prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="home-parent-wrapper w-full"
        // container mx-auto sm:px-16 px-6"
      >
        {showHeroSection ? (
          <div className="hero-section container mx-auto sm:px-16 px-6 flex flex-col justify-center">
            <div className="overflow-hidden" style={{ height: "max-content" }}>
              <h1
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-once="false"
                // data-aos="new-animation"
                className={`heading text-medium-blue text-82 font-bold`}
              >
                EZ KODE
              </h1>
            </div>
            <div className="flex flex-col max-w-fit items-center relative translate-x-1/2 -top-6">
              <div className="overflow-hidden flex items-center">
                <h2
                  data-aos="fade-down"
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className={`text-82 font-bold text-with-border`}
                >
                  "Digital Sky"
                </h2>
              </div>

              <div className="flex gap-12">
                <div
                  style={{
                    overflow: "hidden",
                  }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    data-aos-delay="1600"
                    className={`h-9 w-9`}
                    src={cloudIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down" data-aos-delay="1600">
                    Cloud Computing
                  </span>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    data-aos-delay="1600"
                    className={`h-9 w-9`}
                    src={webIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down" data-aos-delay="1600">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ height: "calc(100svh - 104px)" }}></div>
        )}
        <ZoomComponent headingRef={sectionRef} />
        <ServicesSection />
        <AboutSection />
        <ProjectSection />
        {/* <DigitalSection /> */}
        <ScrollerText />
      </div>
    </>
  );
};
