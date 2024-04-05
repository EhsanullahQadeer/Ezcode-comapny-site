import React, { useRef } from "react";
import { HeroSectionCarousel } from "./HeroSectionCarousel";

export const AllMembers = ({ allMembersRef }) => {
  const rightBtnRef = useRef(null);
  const leftBtnRef = useRef(null);
  const leftButton = (
    <button class="focus:outline-none">
      <svg
        class="stroke-current text-slate-blue-gray hover:text-oceanic-blue"
        width="22"
        height="17"
        viewBox="0 0 22 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke-width="1.8"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M1.3 8.2h19.8M8.5 1L1.3 8.2l7.2 7.2"></path>
        </g>
      </svg>
    </button>
  );

  const rightButton = (
    <button class="focus:outline-none">
      <svg
        class="stroke-current text-slate-blue-gray hover:text-oceanic-blue"
        width="52"
        height="17"
        viewBox="0 0 52 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke-width="1.8"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M50.7 8.2l-49.2.3M43.5 1l7.2 7.2-7.2 7.2"></path>
        </g>
      </svg>
    </button>
  );

  return (
    <>
      <div
        ref={allMembersRef}
        id="allMembers"
        class="flex items-center lg:min-h-screen py-32 lg:py-0"
      >
        <div class="container px-6 lg:px-0">
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-6/12 mb-16 md:mb-0">
              <div className="container lg:-ml-6 2xl:ml-0 text-center w-full">
                <HeroSectionCarousel
                  padding="left"
                  leftButton={leftButton}
                  rightButton={rightButton}
                  leftBtnRef={leftBtnRef}
                  rightBtnRef={rightBtnRef}
                />
              </div>
              <div class="flex items-center justify-center md:hidden">
                <div
                  onClick={() => leftBtnRef.current.click()}
                  className="flex mr-6"
                >
                  {leftButton}
                </div>
                <div
                  onClick={() => rightBtnRef.current.click()}
                  className="flex"
                >
                  {rightButton}
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 2xl:w-5/12 md:pl-8 2xl:pl-0">
              <h2 class="mb-8 section-heading text-medium-blue font-bold 2xl:leading-snug flex flex-col gap-1">
                {/* Our core team */}
                Meet the leadership team
                <span class="px-4 py-1 -ml-4 w-max bg-dodger-blue text-white rounded-md">
                  Ezkode rockstars
                </span>
              </h2>

              <p class="md:mb-16 2xl:pr-20 text-slate-blue-gray text-lg">
                At Ezkode, we're more than just a team; we're a group of
                dedicated professionals committed to excellence. With resources
                to accommodate projects needing 20+ developers, we prioritize
                flexibility in our approach. While most developers aren't
                required to work full-time onsite, we take pride in our ability
                to provide international talent and resources whenever
                necessary.
              </p>

              <div class="hidden md:flex items-center">
                <div
                  onClick={() => leftBtnRef.current.click()}
                  className="flex mr-6"
                >
                  {leftButton}
                </div>
                <div
                  onClick={() => rightBtnRef.current.click()}
                  className="flex"
                >
                  {rightButton}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
