import React from "react";
import { TypingAnimation } from "./TypingAnimation";
import envelopIconImg from "../../assets/images/home/illustration_header_left.svg";
import playIconImg from "../../assets/images/home/illustration_header_right.svg";
import { ContactUsBtn } from "./ContactUsBtn";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section h-svh w-full">
        <div className="container mx-auto sm:px-16 px-6 pt-20">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-12 py-16">
            <div className="flex-1">
              <div className="hero-content lg:max-xl:min-h-40 xl:min-h-48 text-center md:text-start">
                <h1 className="text-navy-blue sm:text-32 text-27 font-bold inline">
                  We <span className="gradient-color">empower businesses</span>{" "}
                  by{" "}
                </h1>
                <TypingAnimation />
              </div>

              <div className="gradient-btn-wrapper hidden xl:block mt-16">
                <ContactUsBtn />
              </div>
            </div>
            <div className="hero-right flex-1 bg-white border-1 border-white shadow-light-purple relative">
              <div className="video-section bg-navy-blue2">
                <video
                  width="100%"
                  autoPlay={true}
                  muted
                  loop
                  className="h-full object-contain object-center"
                >
                  <source
                    src="https://github.githubassets.com/assets/globe-900.h264-975e7b5ac572.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <img
                src={playIconImg}
                alt="play-icon-img"
                className="play-icon-img hidden md:block"
              />

              <img
                src={envelopIconImg}
                alt="envelop-icon-img"
                className="envelop-icon-img hidden md:block"
              />
            </div>
          </div>

          <div className="gradient-btn-wrapper xl:hidden flex justify-center mb-16 md:mt-16">
            <ContactUsBtn />
          </div>

          <div className="hero-trusted-wrap flex flex-row items-center">
            <span className="md:whitespace-nowrap flex-1 text-primary px-3 text-16 text-center">
              Trusted by <span className="text-navy-blue font-bold">75+</span>{" "}
              users, <span className="text-navy-blue font-bold">46</span>{" "}
              managed projects and{" "}
              <span className="text-navy-blue font-bold">$100M+</span> increse
              in revenue
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
