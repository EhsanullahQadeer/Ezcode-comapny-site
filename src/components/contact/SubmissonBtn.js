import React from "react";

export const SubmissonBtn = ({ showLoader, handleFormSubmission }) => {
  return (
    <>
      <div className="contact-submisson-btn flex w-1/2 md:w-4/12 px-3">
        <button
          onClick={handleFormSubmission}
          type="submit"
          className="w-full p-3 2xl:p-4 bg-dodger-blue text-white text-center font-bold"
        >
          <div className="h-6 flex justify-center items-center">
            <span className={`${showLoader ? "hidden" : "inline-block"}`}>
              Send Message
            </span>
            <svg
              className={`${showLoader ? "inline-block" : "hidden"}`}
              width="20"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
            >
              <g
                transform="translate(1 1)"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              >
                <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};
