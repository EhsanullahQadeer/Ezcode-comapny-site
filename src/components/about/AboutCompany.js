import React from "react";
import illustration1 from "../../assets/images/about/illustration-1.svg";
import aboutImg from "../../assets/images/about/about-img.jpg";

export const AboutCompany = ({ aboutRef }) => {
  return (
    <>
      <div
        ref={aboutRef}
        id="about"
        class="about-section-wrapper flex items-center lg:min-h-screen pt-32 lg:pt-0"
      >
        <div class="container px-6 lg:px-0">
          <div class="flex flex-col lg:flex-row xl:pt-20 2xl:pt-24">
            <div className="col-lg-2 mb-5 mb-lg-0 img-section">
              <img src={aboutImg} />
            </div>
            <div class="w-full lg:px-10 lg:pl-10 lg:pr-0 xl:pr-16 2xl:pr-24 2xl:pl-16 content-section">
              <h2 class="mb-6 text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                About <br /> Ezkode
              </h2>

              <p class="mb-4 text-lg text-slate-blue-gray">
                Ezkode is a leading software company specializing in crafting
                cutting-edge solutions for businesses across various industries.
                Our team of seasoned professionals is dedicated to leveraging
                the latest technologies and industry best practices to deliver
                innovative software products tailored to meet your specific
                needs.
              </p>

              <p class="text-medium-blue text-lg font-bold">
                At Ezkode, our primary objective is to provide bespoke,
                sophisticated, and impactful systems that catalyze the
                exponential growth of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
