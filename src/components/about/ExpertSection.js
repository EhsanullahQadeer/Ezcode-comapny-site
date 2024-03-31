import React from "react";
import illustration2 from "../../assets/images/about/illustration-2.svg";
import expertiseImg from "../../assets/images/about/experticeImg.webp";
import { Link } from "react-router-dom";

export const ExpertSection = () => {
  return (
    <>
      <div className="experts-section-wrapper flex items-center lg:min-h-screen pt-24 md:pt-32 lg:pt-0">
        <div className="container px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:pt-10 xl:pt-20 2xl:pt-40">
            <div className="col-lg-2 mb-5 mb-lg-0 img-section">
              <img src={expertiseImg} />
            </div>
            <div className="relative z-10 w-full lg:px-10 lg:pl-10 xl:px-10 2xl:pr-24 2xl:pl-16 content-section">
              <h2 className="mb-6 text-3xl 2xl:text-4xl text-medium-blue font-bold leading-tight">
                Expertise at Ezkode
              </h2>

              <p className="text-lg text-slate-blue-gray mb-12">
                At Ezkode, we pride ourselves on assembling a team of top-tier
                talent from across the nation. Our developers boast extensive
                experience, with the majority possessing over five years of
                expertise in specialized programming languages. Whether you
                require a straightforward web platform or a sophisticated custom
                solution, our team is equipped with the skills and knowledge to
                meet your unique requirements.
              </p>

              <Link
                to=""
                className="py-2 2xl:py-3 px-6 2xl:px-10 bg-dodger-blue hover:bg-oceanic-blue focus:outline-none text-white font-medium rounded-md"
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
