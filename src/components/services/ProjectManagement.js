import React, { useEffect, useState } from "react";
import headingBottomLine from "../../assets/images/work/after-tittle.png";
import { Card } from "../global/Card";
import { projectManagement } from "../../constant";
import Accordian from "../global/Accordian";

export const ProjectManagement = () => {
  const [showAccordian, setShowAccordian] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowAccordian(true);
      } else {
        setShowAccordian(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container mx-auto sm:px-16 px-6 py-16">
        <h2 className="hero-heading font-bold text-medium-blue mb-2 text-center">
          Our Project Management Funnel <br />
          is a Seamless Process
        </h2>
        <div className="flex justify-center mb-5">
          <img src={headingBottomLine} alt="headingBottomLine" />
        </div>

        <div className="my-8 lg:grid lg:grid-cols-3 lg:gap-7">
          {projectManagement.map((management, idx) => {
            return showAccordian ? (
              <Accordian management={management} idx={idx} />
            ) : (
              <Card management={management} idx={idx} />
            );
          })}
        </div>
      </div>
    </>
  );
};
