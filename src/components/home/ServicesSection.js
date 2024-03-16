import React, { useRef } from "react";
import { TextFadeIn } from "../global/TextFadein";

export const ServicesSection = () => {
  const cardsData = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "CLOUD COMPUTING SOLUTIONS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "CUSTOMIZED SOLUTIONS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  const fadeInText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";

  const sectionRef = useRef(null);
  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: "800svh" }}
        className="services-section-parent-wrapper w-full container mx-auto sm:px-16 px-6 pt-80 relative"
      >
        <div
          id="services-section"
          className="flex flex-col lg:flex-row justify-between items-center gap-10 sticky top-2/4 -translate-y-2/4"
        >
          <div className="content-box">
            <div
              data-aos="fade-up"
              className="text-medium-blue text-36 font-bold flex flex-col "
            >
              <span>OUR</span>
              <span className="services-text">SERVICES</span>
            </div>
            <TextFadeIn text={fadeInText} sectionRef={sectionRef} />
          </div>
          <div className="flex flex-col gap-5">
            {cardsData.map((data, idx) => {
              return (
                <div
                  data-aos="fade-up"
                  key={data.title + idx}
                  className="services-box px-8 py-6 bg-royal-blue text-powder-blue rounded-3xl"
                >
                  <h3 className="text-22 font-semibold">{data.title}</h3>
                  <p className="text-16 font-normal">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
