import React from "react";
import { ReviewsSection } from "../components/work/ReviewsSection";
import { ZoomInComponent } from "../components/work/ZoomInComponent";
import { PortfolioSection } from "../components/work/PortfolioSection";
import { WorkHeroSection } from "../components/work/WorkHeroSection";

export const Work = () => {
  return (
    <>
      <div className="work-parent-wrapper">
        <WorkHeroSection />
        <ReviewsSection />
        <PortfolioSection />
        {/* <ZoomInComponent /> */}
      </div>
    </>
  );
};
