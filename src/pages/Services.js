import React from "react";
import { ProjectManagement } from "../components/services/ProjectManagement";
import { WorkAbilities } from "../components/services/WorkAbilities";
import { ServicesSection } from "../components/services/ServicesSection";
import { ServicesHeroSection } from "../components/services/ServicesHeroSection";

export const Services = () => {
  return (
    <>
      <div className="services-page-parent-wrapper">
        <ServicesHeroSection />
        <ServicesSection />
        <WorkAbilities />
        <ProjectManagement />
      </div>
    </>
  );
};
