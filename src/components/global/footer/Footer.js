import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="footer-parent-wrapper bg-dark-blue">
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
      </section>
    </>
  );
};
