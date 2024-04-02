import { Paper } from "@mui/material";
import React from "react";
import requirements from "../../assets/images/services/requirements.webp";

export const Card = ({ management, idx }) => {
  const { imgSrc, title, desc } = management;
  const delayMultiply = idx + 1;
  return (
    <>
      <Paper
        data-aos="fade-up"
        data-aos-delay={`${delayMultiply * 50}`}
        elevation={3}
        className="p-6 flex flex-col items-center gap-5"
      >
        <div style={{ width: "76px", height: "82px" }}>
          <img
            data-aos="zoom-in"
            data-aos-offset="0"
            src={imgSrc}
            alt="-image"
            className="w-full h-full"
          />
        </div>

        <h5 className="text-medium-blue font-semibold text-19">
          <span className="text-dark-blue font-bold">{idx + 1}.</span> {title}
        </h5>

        <p className="text-14 text-center">{desc}</p>
      </Paper>
    </>
  );
};
