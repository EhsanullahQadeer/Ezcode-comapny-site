import React from "react";
import { Link } from "react-router-dom";
import supportImg from "../../assets/images/about/banner.jpg";

export const SupportSection = () => {
  return (
    <>
      <div className="support-section-wrapper flex items-center lg:min-h-screen pt-32 lg:pt-0 lg:-mt-32 xl:-mt-24">
        <div className="container px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row md:pt-6 lg:pt-10 xl:pt-32">
            <div className="order-2 lg:order-1 relative z-10 w-full lg:pr-10 xl:pr-16 2xl:pr-24 2xl:pl-16 flex-1 content-section">
              <h2 className="mb-6 section-heading text-medium-blue font-bold leading-tight">
                Agile <br /> Staffing
              </h2>

              <p className="text-lg text-slate-blue-gray mb-12">
                Navigating the staffing needs of a technical team can be
                challenging. At Ezkode, we offer a unique solution to this
                dilemma. By leveraging our resources across projects, we provide
                flexible staffing options tailored to your specific
                requirements. Whether you need a machine learning expert for a
                short-term project or support for a longer engagement, we have
                the capacity to quickly onboard and bring our experts up to
                speed. Think of us as your staffing partner, offering the
                agility and adaptability you need
              </p>

              <Link
                to=""
                className="py-2 2xl:py-3 px-6 2xl:px-10 bg-dodger-blue hover:bg-oceanic-blue focus:outline-none text-white font-medium rounded-md"
              >
                Our Portfolio
              </Link>
            </div>

            <div className="img-section order-1 lg:order-2 mb-5 mb-lg-0">
              <img src={supportImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
