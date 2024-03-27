import React, { useState } from "react";
import { SubmissonBtn } from "../components/contact/SubmissonBtn";

export const ContactUs = () => {
  const [showLoader, setShowLoader] = useState(false);
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    // try {
    //   setShowLoader(false);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };
  return (
    <>
      <div className="contact-page-parent-wrapper gap-4 container mx-auto sm:px-16 px-6 mt-10 mb-20">
        <div className="mb-14 2xl:mb-16">
          <h2 className="text-30 font-semibold text-medium-blue">
            Let’s create something <br /> great together
          </h2>
          <h3 className="text-18 text-medium-blue my-8 ">
            <span className="font-bold">Remote, USA</span>
            <span className="block text-slate-blue-gray">
              We search for and hire the best talent in the U.S. Most of our
              development team works remotely.
            </span>
          </h3>
          <div className="text-slate-blue-gray">
            <a href="" className="mb-1 inline-block hover:text-medium-blue">
              info@modsi.io
            </a>
          </div>
        </div>

        <form action="" className="-mx-3 text-sm 2xl:text-base">
          <div className="flex flex-wrap mb-6">
            <div className="flex flex-wrap w-full lg:w-8/12">
              <div className="w-full md:w-1/2 px-3">
                <div className="relative mb-6">
                  <input
                    required
                    name="name"
                    placeholder="Name*"
                    type="text"
                    className="w-full p-3 2xl:p-4 bg-pale-sky-blue focus:bg-sky-blue focus:outline-none text-medium-blue placeholder-medium-blue"
                  />
                </div>
                <div className="relative mb-6 lg:mb-0">
                  <input
                    name="company"
                    placeholder="Company"
                    type="text"
                    className="w-full p-3 2xl:p-4 bg-pale-sky-blue focus:bg-sky-blue focus:outline-none text-medium-blue placeholder-medium-blue"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3">
                <div className="relative mb-6">
                  <input
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    className="w-full p-3 2xl:p-4 bg-pale-sky-blue focus:bg-sky-blue focus:outline-none text-medium-blue placeholder-medium-blue"
                  />
                </div>
                <div className="relative mb-6 lg:mb-0">
                  <input
                    required
                    name="email"
                    placeholder="Email*"
                    type="text"
                    className="w-full p-3 2xl:p-4 bg-pale-sky-blue focus:bg-sky-blue focus:outline-none text-medium-blue placeholder-medium-blue"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full lg:w-4/12 px-3">
              <div className="relative w-full h-full mb-6">
                <textarea
                  required
                  name="message"
                  placeholder="Type your message*"
                  className="h-full w-full p-3 2xl:p-4 bg-pale-sky-blue focus:bg-sky-blue focus:outline-none text-medium-blue placeholder-medium-blue"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <SubmissonBtn
              showLoader={showLoader}
              handleFormSubmission={handleFormSubmission}
            />
          </div>
        </form>
      </div>
    </>
  );
};
