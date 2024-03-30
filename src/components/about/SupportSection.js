import React from "react";
import illustration3 from "../../assets/images/about/illustration-3.svg";
import { Link } from "react-router-dom";

export const SupportSection = () => {
  return (
    <>
      <div className="support-section-wrapper flex items-center lg:min-h-screen pt-32 lg:pt-0 lg:-mt-32 xl:-mt-24">
        <div className="container px-6 lg:px-0">
          <div className="flex flex-wrap">
            <div className="order-2 md:order-1 relative z-10 w-full md:w-1/2 md:pr-10 xl:pr-16 2xl:pr-24 2xl:pl-16 md:pt-6 lg:pt-10 xl:pt-32">
              <h2 className="mb-6 text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                Elastic <br /> Support
              </h2>

              <p className="text-lg text-slate-blue-gray mb-12">
                One of the difficulties with staffing a technical team is
                knowing when and how much you actually need. One benefit of
                working with Ezkode is that we are able to leverage resources
                across projects. Say you need a machine learning expert but only
                for a few weeks, we have resources ready to quickly onboard and
                bring up to speed. Think AWS but for staffing.
              </p>

              <Link
                to=""
                className="py-2 2xl:py-3 px-6 2xl:px-10 bg-dodger-blue hover:bg-oceanic-blue focus:outline-none text-white font-medium"
              >
                Our Portfolio
              </Link>
            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2">
              <img
                src={illustration3}
                className="about-illustration-3 float-left z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
