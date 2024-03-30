import React, { useRef } from "react";
import { HeroSection } from "../components/about/HeroSection";
import { AboutCompany } from "../components/about/AboutCompany";
import { Stats } from "../components/about/Stats";
import { ExpertSection } from "../components/about/ExpertSection";
import { SupportSection } from "../components/about/SupportSection";
import { AllMembers } from "../components/about/AllMembers";

export const AboutUs = () => {

  const allMembersRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <div className="about-page-parent-wrapper container mx-auto sm:px-16 px-6">
        <HeroSection allMembersRef={allMembersRef} aboutRef={aboutRef}/>
        <AboutCompany aboutRef={aboutRef}/>
        <Stats />
        <ExpertSection />
        <SupportSection />
        <AllMembers allMembersRef={allMembersRef}/>
      </div>
    </>
  );
};
