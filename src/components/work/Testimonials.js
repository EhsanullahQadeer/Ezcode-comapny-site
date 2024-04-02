import React from "react";
import { Testimonial } from "../global/Testimonial";

export const Testimonials = ({ filteredReviewsLength }) => {
  return (
    <>
      <div className="testimonials-parent-wrapper my-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredReviewsLength.map((customerReview) => {
          return <Testimonial customerReview={customerReview} />;
        })}
      </div>
    </>
  );
};
