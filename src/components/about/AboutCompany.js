import React from "react";
import illustration1 from "../../assets/images/about/illustration-1.svg";

export const AboutCompany = ({ aboutRef }) => {
  return (
    <>
      <div
        ref={aboutRef}
        id="about"
        class="about-section-wrapper flex items-center lg:min-h-screen pt-32 lg:pt-0"
      >
        <div class="container px-6 lg:px-0">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <img
                src={illustration1}
                class="about-illustration-1 float-right lg:-mr-8 2xl:-mr-24 mt-12 lg:mt-0"
              />
            </div>
            <div class="w-full md:w-1/2 md:px-10 lg:pl-10 lg:pr-0 xl:pr-16 2xl:pr-24 2xl:pl-16 xl:pt-20 2xl:pt-24">
              <h2 class="mb-6 text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                About <br /> Ezkode
              </h2>

              <p class="mb-4 text-lg text-slate-blue-gray">
                Ezkode was created by Blake Connally after he worked for several
                other companies building oil and gas systems and web platforms.
                Blake realized early on that he had a passion for analyzing data
                and figuring out unique ways to automate expensive tasks.
              </p>

              <p class="text-medium-blue text-lg font-bold">
                Ezkode's focuses on delivering unique, elegant and powerful
                systems that rapidly grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
