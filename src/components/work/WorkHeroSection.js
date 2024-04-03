import React from "react";
import heroSectionimg from "../../assets/images/work/work-hero-section.png";
import { workStats } from "../../constant";

export const WorkHeroSection = () => {
  return (
    <>
      <div className="work-hero-section-parent container mx-auto sm:px-16 px-6">
        <div className="hero flex flex-col lg:flex-row items-center">
          <div data-aos="fade-left" class="lg:order-2 order-1">
            <img
              src={heroSectionimg}
              alt="Software development work title image"
              width="auto"
              height="auto"
              loading="eager"
            />
          </div>
          <div class="lg:order-1 order-2">
            <div className="overflow-hidden">
              <h1
                data-aos="fade-down"
                className="hero-heading font-bold text-medium-blue"
              >
                Our Work
              </h1>
            </div>
            <div className="overflow-hidden">
              <h3
                data-aos="fade-down"
                data-aos-delay="800"
                className="hero-heading-2 text-medium-blue font-semibold"
              >
                Ezkode is known for its 360-degree web and digital solutions.
              </h3>
            </div>

            <div className="overflow-hidden">
              <p
                data-aos="fade-up"
                className="pt-5 lg:pr-16 mb-4 text-14 text-slate-blue-gray"
              >
                Our development projects are displayed below. We invest the best
                resources to make sure that our projects produce client
                satisfaction as well as revenues for the business itself. We
                ensure that our creative designs are powered by out of the box
                thinking and innovative ideas that can set a benchmark all
                across the internet.
              </p>
            </div>

            <div className="overflow-hidden">
              <p
                data-aos="fade-up"
                data-aos-delay="800"
                className="pt-5 lg:pr-16 mb-4 text-14 text-slate-blue-gray"
              >
                <strong>
                  usability + design + creativity = More online Sales, Leads and
                  Conversions
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="flex lex-row flex-wrap gap-3 mt-10 justify-center items-center">
          {workStats.map((stat, idx) => {
            const { icon, statName, statNumber } = stat;
            return (
              <div
                key={statName + idx}
                class="stats-item"
                style={{ flex: "1 0 0" }}
                data-aos="fade-up"
                data-aos-delay={`${100 * idx}`}
              >
                <div class="flex flex-row items-center justify-between">
                  <div class="stat-number text-oceanic-blue">{statNumber}</div>
                  <div class="text-oceanic-blue w-6 h-6">{icon}</div>
                </div>
                <div class="stat-name text-blue-900">{statName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
