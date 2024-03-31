import React from "react";
import progress1 from "../../assets/images/about/progress-1.svg";
import progress2 from "../../assets/images/about/progress-2.svg";
import progress3 from "../../assets/images/about/progress-3.svg";

export const Stats = () => {
  return (
    <>
      <div className="stats-section-wrapper flex items-center lg:min-h-screen pt-32 lg:pt-0 ">
        <div className="container px-6 lg:px-0">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full md:w-10/12 md:px-10 mb-12 lg:mb-20">
              <h2 className="text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                Our results speak for themselves
              </h2>
            </div>

            <div className="w-full flex flex-wrap justify-center text-xs lg:text-sm text-slate-blue-gray font-medium uppercase">
              <div className="stat-wrapper md:w-2/12 mb-8 md:mb-0">
                <div className="relative">
                  <img src={progress1} className="w-full mb-6" alt="" />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-light text-3/2xl lg:text-4xl text-medium-blue">
                    25+
                  </span>
                </div>
                <span className="whitespace-nowrap">Happy Clients</span>
              </div>
              <div className="stat-wrapper  md:w-2/12 mb-8 md:mb-0 mx-20">
                <div className="relative">
                  <img src={progress2} className="w-full mb-6" alt="" />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-light text-3/2xl lg:text-4xl text-medium-blue">
                    200
                  </span>
                </div>
                <span className="whitespace-nowrap">Products Managed</span>
              </div>
              <div className="stat-wrapper md:w-2/12 mb-8 md:mb-0">
                <div className="relative">
                  <img src={progress3} className="w-full mb-6" alt="" />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-light text-3/2xl lg:text-4xl text-medium-blue">
                    300K
                  </span>
                </div>
                <span className="whitespace-nowrap">Lines of Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
