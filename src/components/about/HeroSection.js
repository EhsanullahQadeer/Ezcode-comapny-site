import React from "react";
import moreIcon from "../../assets/icons/global/more.svg";
import arrowDownIcon from "../../assets/icons/global/arrow-down.svg";
import { HeroSectionCarousel } from "./HeroSectionCarousel";

export const HeroSection = ({ allMembersRef, aboutRef }) => {
  const handleScrolling = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="hero-section-wrapper relative mt-20 lg:mt-32 pt-2 2xl:pt-0 flex flex-col lg:flex-row-reverse gap-10">
        <div className="container lg:-ml-6 2xl:ml-0 text-center w-full lg:w-1/2 lg:-translate-y-20">
          <HeroSectionCarousel padding="right" showDots={true} />
          <span
            onClick={() => handleScrolling(allMembersRef)}
            class="inline-flex flex-col items-center mx-auto mt-2 md:mt-4 lg:mt-6 2xl:mt-8 uppercase font-bold text-xs xl:text-sm text-medium-blue hover:underline cursor-pointer"
          >
            <span class="mb-2">See all members</span>
            <img src={arrowDownIcon} class="inline-block" alt="" />
          </span>
        </div>

        <div className="flex-1">
          <div className="mb-20 2xl:mb-30">
            <h2 className="hero-heading relative inline-block text-medium-blue font-bold leading-snug">
              Our team is staffed to <br />
              support your new or <br />
              pre-existing platforms
            </h2>

            <div className="w-10 2xl:w-16 h-1 my-8 bg-misty-sky-blue"></div>
            <span
              onClick={() => handleScrolling(aboutRef)}
              className="flex items-center uppercase font-bold text-xs xl:text-sm w-max cursor-pointer"
            >
              <img src={moreIcon} alt="more-icon" className="mr-2" />
              <span className="text-medium-blue hover:underline">
                Read More
              </span>
            </span>
          </div>
          <div class="flex justify-between w-full font-bold">
            <div>
              <div class="hero-heading-3 text-golden-yellow mb-1">01</div>
              <div class="hero-heading-4 text-medium-blue">
                Industry
                <br /> Experts
              </div>
              <div class="w-10 2xl:w-16 h-1 mt-3 bg-misty-sky-blue"></div>
            </div>
            <div>
              <div class="hero-heading-3 text-golden-yellow mb-1">02</div>
              <div class="hero-heading-4 text-medium-blue">
                Elastic <br /> Support
              </div>
              <div class="w-10 2xl:w-16 h-1 mt-3 bg-misty-sky-blue"></div>
            </div>
            <div>
              <div class="hero-heading-3 text-golden-yellow mb-1">03</div>
              <div class="hero-heading-4 text-medium-blue">
                Results
                <br /> Driven
              </div>
              <div class="w-10 2xl:w-16 h-1 mt-3 bg-misty-sky-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
