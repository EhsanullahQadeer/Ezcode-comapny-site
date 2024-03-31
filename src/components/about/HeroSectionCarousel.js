import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { teamMembers } from "../../constant";

export const HeroSectionCarousel = ({
  padding,
  leftButton,
  rightButton,
  leftBtnRef,
  rightBtnRef,
  section,
}) => {
  let filteredTeamMembers = teamMembers;

  if (section === "hero") {
    filteredTeamMembers = teamMembers.slice(0, 3);
  }
  
  const items = filteredTeamMembers.map((member) => {
    return (
      <div
        key={member.id}
        className={`item-wrapper flex flex-col gap-6 ${
          padding === "right" ? "lg:pr-10" : "lg:pl-10"
        }`}
      >
        <div className="img-wrapper w-full">
          <img className="carousel-img" src={member.imgSrc} alt="personImg" />
        </div>
        <h3 className="text-lg xl:text-xl 2xl:text-2xl text-medium-blue text-center">
          {member.name}
          <span className="block text-light-blue text-sm 2xl:text-base">
            {member.position}
          </span>
        </h3>
      </div>
    );
  });

  const [paddingRight, setPaddingRight] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        padding === "right" ? setPaddingRight(50) : setPaddingLeft(50);
      } else {
        padding === "right" ? setPaddingRight(0) : setPaddingRight(0);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsNumber = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
  };

  return (
    <>
      <div className="hero-section-carousel-parent relative mb-8 md:mb-0">
        <AliceCarousel
          disableButtonsControls={leftButton || rightButton ? false : true}
          disableDotsControls={section === "hero" ? false : true}
          responsive={itemsNumber}
          controlsStrategy="alternate"
          infinite
          paddingRight={paddingRight}
          paddingLeft={paddingLeft}
          renderPrevButton={() => {
            return (
              <div ref={leftBtnRef} className="hidden">
                {leftButton}
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div ref={rightBtnRef} className="hidden">
                {rightButton}
              </div>
            );
          }}
          items={items}
        />
      </div>
    </>
  );
};
