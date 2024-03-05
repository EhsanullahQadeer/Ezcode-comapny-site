import React from "react";
import { HeroSection } from "../components/home/hero-section/HeroSection.js";
import { AboutSection } from "../components/home/about-section/AboutSection.js";

export const Home = () => {
  return (
    <>
      <div className="home-parent-wrapper w-full ">
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
};
