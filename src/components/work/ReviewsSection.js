import React, { useState } from "react";
import { Testimonials } from "./Testimonials";
import headingBottomLine from "../../assets/images/work/after-tittle.png";
import { customerReviews } from "../../constant";

export const ReviewsSection = () => {
  const [reviewsLength, setReviewsLength] = useState(2);
  const [showButton, setShowButton] = useState(true);

  const handleReviewsLength = () => {
    setReviewsLength(customerReviews.length);
    setShowButton(false)
  };

  const filteredReviewsLength = customerReviews.slice(0, reviewsLength);
  return (
    <>
      <div className="testimonial-section-wrapper bg-whispering-sky-blue py-16">
        <div className="container mx-auto sm:px-16 px-6">
          <h2 className="hero-heading font-bold text-medium-blue mb-2 text-center">
            Customer’s Reviews
          </h2>
          <div className="flex justify-center mb-5">
            <img src={headingBottomLine} alt="headingBottomLine" />
          </div>

          <div className="p-3 max-w-6xl mx-auto lg:max-2xl:px-14 my-4">
            <p className="text-slate-blue-gray">
              <span className="font-bold text-medium-blue">Ezkode</span> has
              been delivering result-driven web design and development services.
              Being an experienced web design company, we have satisfied clients
              all over the world for website design, web development, and
              digital marketing services. Our clients are a true testament to
              our success and superior eCommerce services.
            </p>
          </div>

          <Testimonials filteredReviewsLength={filteredReviewsLength} />

          {showButton && (
            <div className="flex items-center justify-center">
              <button
                onClick={handleReviewsLength}
                className="bg-transparent py-2 px-6 flex items-center justify-center rounded-full text-dodger-blue font-bold hover:text-white hover:bg-oceanic-blue tracking-wide"
              >
                All Reviews
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
