import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../../constant";

export const Footer = () => {
  return (
    <>
      <section className="footer-parent-wrapper bg-dark-blue w-full">
        <div className="flex flex-col relative pb-10">
          <div className="flex flex-col">
            <h2 className="text-white section-heading font-bold p-4 px-10">
              FOLLOW US
            </h2>

            <ul className="hero-heading-3">
              <li className="social-links">
                <a href=""> INSTAGRAM </a>
              </li>
              <li className="social-links">
                <a href=""> FACEBOOK</a>
              </li>
              <li className="social-links">
                <a href=""> LINKEDIN </a>
              </li>
              <li className="social-links">
                <a href=""> GITHUB </a>
              </li>
              <li className="social-links">
                <a href=""> TWITTER </a>
              </li>
            </ul>
          </div>

          <div className="px-10 py-6 relative flex gap-4 flex-wrap justify-between">
            <div className="md:w-1/3">
              <h2 className="text-white section-heading font-bold py-4">
                EZKODE
              </h2>

              <p className="text-18  font-normal text-powder-blue">
                Ezkode is among the oldest web design and development companies.
                Our company was formed in line with the vision to provide
                functional, affordable, and scalable solutions for all kinds of
                business sectors.
                By creating fast and efficient mobile and web applications, we will help your business grow.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-white section-heading font-bold py-4">
                SERVICES
              </h2>

              <ul className="services text-18">
                {services.map((service) => {
                  const { title } = service;

                  return <li>- {title}</li>;
                })}
              </ul>
            </div>

            <div className="flex flex-col">
              <h2 className="text-white section-heading font-bold py-4">
                CONTACT
              </h2>
              <ul className="address text-18">
                <li>ul. Wadowicka 6</li>
                <li>30-415 Kraków, Poland</li>
                <li>hello@ezkode.com</li>
                <li>+48 795 750 710</li>
              </ul>
            </div>
          </div>
          <div className="absolute left-10 bottom-2 flex flex-row gap-4">
            <span>
              <Link to="" className="footer-terms">
                TERMS AND CONDITIONS
              </Link>
            </span>
            <span>
              <Link to="" className="footer-terms">
                PRIVACY POLICY
              </Link>
            </span>
            <span>
              <Link to="" className="footer-terms">
                FAQ
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* <section className="footer-parent-wrapper bg-dark-blue">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-vivid-blue section-heading font-bold p-4">
              FOLLOW US
            </h2>

            <ul className="hero-heading-3">
              <li className="social-links">
                <a href=""> INSTAGRAM </a>
              </li>
              <li className="social-links">
                <a href=""> FACEBOOK</a>
              </li>
              <li className="social-links">
                <a href=""> LINKEDIN </a>
              </li>
              <li className="social-links">
                <a href=""> GITHUB </a>
              </li>
              <li className="social-links">
                <a href=""> TWITTER </a>
              </li>
            </ul>
          </div>

          <div className="h-svh flex flex-col items-center justify-center relative">
            <h2 className="text-32 md:text-48 lg:text-72 text-sky-blue font-bold">
              HAVE AN IDEA?
            </h2>

            <button className="contact-button">
              <h2 className="text-32 md:text-48 lg:text-72 font-bold">
                TELL US
              </h2>
            </button>

            <div className="absolute left-0 bottom-2 flex flex-row gap-4 px-4">
              <span>
                <Link to="" className="footer-terms">
                  TERMS AND CONDITIONS
                </Link>
              </span>
              <span>
                <Link to="" className="footer-terms">
                  PRIVACY POLICY
                </Link>
              </span>
              <span>
                <Link to="" className="footer-terms">
                  FAQ
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
