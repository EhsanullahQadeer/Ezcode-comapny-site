import React from "react";
import { portfolioProjects } from "../../constant";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import LinkIcon from "@mui/icons-material/Link";

export const PortfolioSection = () => {
  const hostOrigin = window.location.origin;
  return (
    <>
      <div className="portfolio-section-wrapper container mx-auto sm:px-16 px-6 py-16">
        <div className="flex flex-col items-center gap-7 mb-10">
          <h2 className="hero-heading text-medium-blue text-center font-normal">
            This is our Latest <strong>Work</strong>
          </h2>
          <p className="text-center text-13">
            You can review some of the projects that were successfully
            implemented by Ezkode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => {
            const { imgSrc, projectName, projectLink } = project;

            const projectImgZoom = `${hostOrigin}${imgSrc}`;
            return (
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="0"
                class="project-item"
                key={projectName + idx}
              >
                <li>
                  <img
                    class="portfolio-img"
                    src={imgSrc}
                    alt="Boat Booking Platform"
                  />

                  <h3 class="project-item-content hero-heading-3 text-white">
                    {projectName}
                  </h3>
                  <div class="icon-list">
                    <a
                      class="link bg-white text-medium-blue hover:bg-medium-blue hover:text-white"
                      target="_blank"
                      href={projectLink}
                    >
                      <LinkIcon />
                    </a>
                    <a
                      class="zoom bg-white text-medium-blue hover:bg-medium-blue hover:text-white"
                      href={projectImgZoom}
                      title="Boat Booking Platform"
                      target="_blank"
                    >
                      <ZoomInIcon />
                    </a>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
