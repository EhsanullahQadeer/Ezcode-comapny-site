import React, { useEffect, useRef, useState } from "react";
import { TextFadeIn } from "../global/TextFadein";
import { motion, useScroll } from "framer-motion";

let timeOutId;
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

  const [isSectionEnd, setIsSectionEnd] = useState(false);
  const [hideProgressBar, sethideProgressBar] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["50vh start", "end 150vh"],
  });

  const handleScroll = () => {
    setIsSectionEnd(scrollYProgress.current === 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    clearTimeout(timeOutId);
    if (isSectionEnd) {
      timeOutId = setTimeout(() => sethideProgressBar(true), 2000);
    } else {
      sethideProgressBar(false)
    }
  }, [isSectionEnd]);
  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: "400svh" }}
        className="services-section-parent-wrapper w-full container mx-auto sm:px-16 px-6 py-80 relative"
      >
        {!hideProgressBar && (
          <motion.div
            className="progress-bar"
            style={{
              scaleX: scrollYProgress,
              opacity: isSectionEnd ? "0" : "1",
            }}
          />
        )}
        <div
          id="services-section"
          className="flex flex-col lg:flex-row justify-between items-center gap-10 sticky top-2/4 -translate-y-2/4"
        >
          <div className="content-box">
            <div className="text-medium-blue text-36 font-bold flex flex-col overflow-hidden">
              <span data-aos="fade-down">OUR</span>

              <span
                className="services-text"
                data-aos="fade-down"
                data-aos-delay="800"
              >
                SERVICES
              </span>
            </div>
            <TextFadeIn
              animation="fade"
              delay="800"
              text={fadeInText}
              sectionRef={sectionRef}
            />
          </div>

          <div className="flex flex-col gap-5">
            {cardsData.map((data, idx) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay="800"
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
