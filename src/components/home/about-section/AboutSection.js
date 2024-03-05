import React from "react";
import cubeIconImg from "../../../assets/images/home/illustration_cube_left.svg";
import splashIconImg from "../../../assets/images/home/illustration_splash_right.svg";
import { AboutBadge } from "./AboutBadge.js";
export const AboutSection = () => {
  const badgesData = [
    {
      text1: { text: "Automation", translateX: "25.437" },
      text2: { text: "Software", translateX: "25.437" },
    },
    {
      text1: { text: "Predictive", translateX: "30.437" },
      text2: { text: "Analytics", translateX: "25.437" },
    },
    {
      text1: { text: "Custom", translateX: "35.437" },
      text2: { text: "Software", translateX: "25.437" },
    },
  ];

  return (
    <>
      <div className="about-section-parent-wrapper w-full">
        <div className="container mx-auto sm:px-16 px-6 pt-36 pb-20">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <div className="content-wrapper relative mx-auto">
                <h2
                  data-aos="fade-up"
                  className="text-navy-blue sm:text-36 text-30 font-bold"
                >
                  Delivering softwares for the world's most demanding industries
                  and organizations.
                </h2>

                <img
                  data-aos="fade-up"
                  src={cubeIconImg}
                  alt="cube-icon-img"
                  className="content-badges-img cube-icon-img hidden lg:block"
                />

                <img
                  data-aos="fade-up"
                  src={splashIconImg}
                  alt="splash-icon-img"
                  className="content-badges-img splash-icon-img hidden lg:block"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
              {badgesData.map((badge, idx) => {
                const middleIndex = Math.floor((badgesData.length - 1) / 2);
                const isMiddle =
                  badgesData.length % 2 === 0
                    ? idx === middleIndex || idx === middleIndex + 1
                    : idx === middleIndex;

                const { text1, text2 } = badge;
                return (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    className={`about-badge ${isMiddle ? "-mt-5" : "mt-4"}`}
                  >
                    <AboutBadge
                      {...{
                        text1: text1,
                        text2: text2,
                        isMiddle: isMiddle,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
