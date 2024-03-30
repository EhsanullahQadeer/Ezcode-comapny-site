import React from "react";
import illustration2 from "../../assets/images/about/illustration-2.svg";
import { Link } from "react-router-dom";

export const ExpertSection = () => {
  return (
    <>
      <div className="experts-section-wrapper flex items-center lg:min-h-screen pt-24 md:pt-32 lg:pt-0">
        <div className="container px-6 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={illustration2}
                className="about-illustration-2 float-right md:-mr-16 xl:-mr-32 2xl:-mr-48 z-0"
              />
            </div>
            <div className="relative z-10 w-full md:w-1/2 md:px-10 lg:pl-10 xl:px-10 2xl:pr-24 2xl:pl-16 lg:pt-10 xl:pt-20 2xl:pt-40">
              <h2 className="mb-6 text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                Industry Experts
              </h2>

              <p className="text-lg text-slate-blue-gray mb-12">
                Ezkode collects some of the best talent throughout the nation.
                Most of our developers have over five years of experience in at
                least one speciality language. Whether you're looking for a
                generic web platform or need a complex custom solution built, we
                have the people for you.
              </p>

              <Link
                to=""
                className="py-2 2xl:py-3 px-6 2xl:px-10 bg-dodger-blue hover:bg-oceanic-blue focus:outline-none text-white font-medium"
              >
                Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
