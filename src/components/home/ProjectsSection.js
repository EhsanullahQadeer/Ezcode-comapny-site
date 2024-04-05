import React from "react";
import projectImg from "../../assets/images/home/projectImg.jpg";

const projectsData = [
  { title: "probos", imgSrc: projectImg },
  { title: "probos", imgSrc: projectImg },
  { title: "probos", imgSrc: projectImg },
  { title: "probos", imgSrc: projectImg },
];
export const ProjectSection = () => {
  return (
    <>
      <div className="project-section-parent-wrapper w-full container mx-auto sm:px-16 px-6 pb-20">
        <div
          data-aos="fade-up"
          className="text-medium-blue section-heading font-bold flex flex-col py-10"
        >
          <span>OUR</span>
          <span className="projects-text">LATEST</span>
          <span className="projects-text">PROJECTS</span>
        </div>

        <div className="grid-wrapper grid gap-x-4 sm:gap-x-20 gap-y-4 grid-cols-1 md:grid-cols-2">
          {projectsData.map((data, idx) => {
            const { title, imgSrc } = data;
            return (
              <div
                data-aos="fade-up"
                key={data.title + idx}
                className="flex flex-col gap-2 items-center"
              >
                <div style={{ width: "100%", position: "relative" }}>
                  <div className="img-box">
                    <img src={imgSrc} alt="projectImg" />
                  </div>
                </div>
                <h3 className="text-medium-blue hero-heading-3 font-bold ">{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
