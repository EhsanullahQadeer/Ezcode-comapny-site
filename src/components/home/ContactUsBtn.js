import Aos from "aos";
import React, { useEffect } from "react";

export const ContactUsBtn = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up">
        <div className="box relative"></div>
        <div
          className="gradient-border1 joinnow-div absolute"
        >
          <div>Contact us</div>
        </div>
      </div>
    </>
  );
};
