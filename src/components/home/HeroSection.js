import React, { useEffect } from "react";
import { TypingAnimation } from "./TypingAnimation";
import Aos from "aos";

export const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="hero-section h-svh w-full">
        <div className="container mx-auto sm:px-16 px-6 pt-20">
          <div className="flex flex-row justify-between items-center gap-12 py-16">
            <div className="flex-1">
              <div className="hero-content min-h-48 ">
                <h1 className="text-navy-blue text-32 font-bold inline">
                  We <span className="gradient-color">empower businesses</span>{" "}
                  by{" "}
                </h1>
                <TypingAnimation />
              </div>

              <div data-aos="fade-up" className="mt-16">
                <div className="box relative"></div>
                <div
                  className="gradient-border1 joinnow-div absolute"
                  style={{ marginTop: "-71px", marginLeft: "6px" }}
                >
                  <div>Contact us</div>
                </div>
              </div>
            </div>
            <div className="hero-right flex-1 bg-white border-1 border-white shadow-light-purple">
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
            </div>
          </div>

          <div className="hero-trusted-wrap flex flex-row items-center">
            <span className="whitespace-nowrap text-primary px-3 text-16">
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
