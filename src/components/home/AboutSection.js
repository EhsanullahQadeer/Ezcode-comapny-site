import React, { useRef } from "react";
import { TextFadeIn } from "../global/TextFadein";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const fadeInText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <>
      <section
        ref={sectionRef}
        style={{ height: "200svh" }}
        className="about-section-parent-wrapper w-full container mx-auto sm:px-16 px-6 relative"
      >
        <div className="box-wrapper">
          <div className="about-box overflow-hidden">
            <h2
              data-aos="fade-down-left"
              className="text-medium-blue section-heading font-bold overflow-hidden"
            >
              WHY EZ KODE?
            </h2>

            <TextFadeIn
              animation="fade-up-right"
              text={fadeInText}
              sectionRef={sectionRef}
            />
          </div>
        </div>
      </section>
    </>
  );
};
