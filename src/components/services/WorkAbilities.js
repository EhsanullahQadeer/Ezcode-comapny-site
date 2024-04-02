import React from "react";
import SpaIcon from "@mui/icons-material/Spa";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import PhishingIcon from "@mui/icons-material/Phishing";
import typingImg from "../../assets/images/services/03.jpg";

export const WorkAbilities = () => {
  const workAbilitiesData = [
    {
      title: "Quality Products",
      desc: "We believe in Software Quality that is essential to deliver the product on time and on the required quality.",
      iconSrc: <SpaIcon />,
    },
    {
      title: "Timely Work",
      desc: "We always plan the Project Development schedule for deploying the Project on time with all completed requirements.",
      iconSrc: <AccessTimeIcon />,
    },
    {
      title: "Reliability",
      desc: "Failure Free Products are our main target.We always develope the most reliable Products without any failure issue on future.",
      iconSrc: <LanguageIcon />,
    },
    {
      title: "Maintainable",
      desc: "Our Products are fully maintainable for the injection of any new Functionality or Requirement.",
      iconSrc: <PhishingIcon />,
    },
  ];
  return (
    <>
      <div className="bg-royal-blue my-20">
        <div className="container-full container mx-auto sm:px-16 px-6">
          <div className="flex flex-col lg:flex-row gap-8 py-6">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {workAbilitiesData.map((ability, idx) => {
                  const { title, desc, iconSrc } = ability;
                  return (
                    <div className="overflow-hidden">
                      <div
                        data-aos="fade-down"
                        key={title + idx}
                      >
                        <div className="text-white">
                          <div className="mb-2">{iconSrc}</div>
                          <div>
                            <h4
                              className="hero-heading-3"
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              {title}
                            </h4>
                            <p className="text-14 text-powder-blue">{desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="order-1 lg:order-2 aos-init lg:w-1/2"
            >
              <img
                src={typingImg}
                alt="best software house"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
