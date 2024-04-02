import React, { useEffect } from "react";
import { services } from "../../constant";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById("parallax");
      if (parallax) {
        const scrollPosition = window.scrollY;
        parallax.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="services-section-parent">
        <div className="serives-text-section">
          <div id="parallax" className="parallax">
            <div className="container mx-auto sm:px-16 px-6">
              <div className="text-center py-6">
                <h2
                  className="hero-heading text-medium-blue uppercase font-bold"
                  style={{ marginBottom: "0px" }}
                >
                  OUR Services
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End services text Section --> */}

        <div className="container mx-auto sm:px-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const { title, desc, imgSrc } = service;
              const delayMultiply = idx + 1;

              return (
                <div
                  key={title + idx}
                  data-aos="fade-up"
                  data-aos-delay={`${delayMultiply * 50}`}
                >
                  <div className="service-box h-full">
                    <img src={imgSrc} width="100%" />

                    <div className="py-5 px-4 pb-7">
                      <h3 className="hero-heading-3 text-medium-blue font-medium mb-3">
                        {title}
                      </h3>
                      <p className="text-14 text-low-opacity-black mb-8">
                        {desc}
                      </p>

                      <Link
                        data-aos="zoom-in"
                        data-aos-offset="0"
                        className="bg-dodger-blue hover:bg-oceanic-blue px-4 py-2 text-white rounded mt-5 mb-3"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* end box section */}
      </div>
    </>
  );
};
