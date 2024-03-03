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
        <div className="container mx-auto sm:px-16 px-6 pt-36">
          <div className="flex flex-row justify-between items-center gap-12">
            <div className="flex-1">
              <div className="min-h-48">
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
            <div className="hero-right flex-1 bg-white border-1 border-white shadow-light-purple"></div>
          </div>
        </div>
      </div>
    </>
  );
};
