import React, { useState, useEffect } from "react";
import cloudIcon from "../assets/icons/home/cloud-computing.png";
import webIcon from "../assets/icons/home/code.png";
import ZoomComponent from "../components/home/ZoomFadeComponent ";
import { ServicesSection } from "../components/home/ServicesSection";
import { AboutSection } from "../components/home/AboutSection";
import { ProjectSection } from "../components/home/ProjectsSection";
import { DigitalSection } from "../components/home/DigitalSection";

let digitalSkyTimeout;
let iconsTimeout;
export const Home = () => {
  const [fadeDigitalSky, setFadeDigitalSky] = useState(false);
  const [fadeIcons, setFadeIcons] = useState(false);

  useEffect(() => {
    digitalSkyTimeout = setTimeout(() => {
      setFadeDigitalSky(true);
    }, 800);

    iconsTimeout = setTimeout(() => {
      setFadeIcons(true);
    }, 1600);

    return () => {
      clearTimeout(digitalSkyTimeout);
      clearTimeout(iconsTimeout);
    };
  }, []);

  return (
    <>
      <div className="home-parent-wrapper w-full container mx-auto sm:px-16 px-6">
        <div className="hero-section flex flex-col justify-center">
          <div className="overflow-hidden" style={{ height: "max-content" }}>
            <h1
              data-aos="fade-up"
              className={`text-medium-blue text-82 font-bold`}
            >
              EZ KODE
            </h1>
          </div>
          <div className="flex flex-col max-w-fit items-center relative translate-x-1/2 -top-6">
            {fadeDigitalSky ? (
              <div
                className="overflow-hidden flex items-center"
                style={{ height: "130px" }}
              >
                <h2
                  data-aos="fade-down"
                  className={`text-82 font-bold text-with-border`}
                >
                  "Digital Sky"
                </h2>
              </div>
            ) : (
              <div style={{ height: "130px", width: "100%" }}></div>
            )}

            {fadeIcons ? (
              <div className="flex gap-12">
                <div
                  style={{ overflow: "hidden", height: "40px" }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    className={`h-9 w-9`}
                    src={cloudIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down">Cloud Computing</span>
                </div>
                <div
                  style={{ overflow: "hidden" }}
                  className={`flex gap-2 items-center`}
                >
                  <img
                    data-aos="fade-up"
                    className={`h-9 w-9`}
                    src={webIcon}
                    alt="cloudIcon"
                  />
                  <span data-aos="fade-down">Web Development</span>
                </div>
              </div>
            ) : (
              <div style={{ height: "40px", width: "100%" }}></div>
            )}
          </div>
        </div>

        {/* <ZoomComponent /> */}
        <ServicesSection />
        <AboutSection />
        <ProjectSection />
        <DigitalSection />
      </div>
    </>
  );
};
