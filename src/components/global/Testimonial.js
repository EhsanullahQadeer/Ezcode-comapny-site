import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const Testimonial = ({ customerReview }) => {
  const { imgSrc, name, review } = customerReview;
  return (
    <>
      <div className="testimonial-wrapper bg-white rounded flex flex-col border-l-dodger-blue bod">
        <div className="py-10 px-5">{review}</div>
        <hr className="h-0.5 bg-sky-blue border-none" />

        <div className="py-3 px-5 flex flex-row flex-wrap justify-between items-center gap-4">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-14 h-14">
              <img
                src={imgSrc}
                alt="personImg"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <h6 className="font-semibold text-16 text-oceanic-blue">{name}</h6>
          </div>

          <div>
            <FormatQuoteIcon style={{ fontSize: 50, color: "#2449CD" }} />
          </div>
        </div>
      </div>
    </>
  );
};
