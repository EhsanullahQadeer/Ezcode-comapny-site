import React from "react";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import heroSectionImg from "../../assets/images/services/hero-section-bg.svg"

export const ServicesHeroSection = () => {
  return (
    <>
      <div className="services-hero-section-parent container mx-auto sm:px-16 px-6 flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <div data-aos="fade-left" class="lg:order-2 order-1 w-full">
          <img
            src={heroSectionImg}
            alt="Software development services​ provider title image"
            width="auto"
            height="auto"
          />
        </div>
        <div class="lg:order-1 order-2">
          <div className="overflow-hidden">
            <h1
              data-aos="fade-down"
              className="hero-heading font-bold text-medium-blue"
            >
              Software development services​ provider!
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              data-aos="fade-up"
              className="pt-5 lg:pr-16 mb-4 text-14 text-slate-blue-gray"
            >
              Ezkode provides you with a number of software development
              services; web development, mobile apps development, product
              design, maintenance are just the start of what we can offer.
              Contact us and get to know our software development services
              better.
            </p>
          </div>
          <Link
            data-aos="fade-right"
            to="/contact"
            class="btn-link bg-dodger-blue hover:bg-oceanic-blue"
          >
            <ForumIcon />
            Let’s talk
          </Link>
        </div>
      </div>
    </>
  );
};
