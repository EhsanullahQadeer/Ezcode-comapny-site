import React from "react";
import cloudIcon from "../assets/icons/home/cloud-computing.png";
import webIcon from "../assets/icons/home/code.png";
import ZoomFadeComponent from "../components/home/ZoomFadeComponent ";

export const Home = () => {
  return (
    <>
      <div className="home-parent-wrapper w-full container mx-auto sm:px-16 px-6">
        <div className="hero-section flex flex-col justify-center">
          <h1 className="text-medium-blue text-82 font-bold">EZ KODE</h1>
          <div className="flex flex-col max-w-fit items-center translate-x-1/2">
            <h2 className="text-82 font-bold text-with-border">
              "Digital Sky"
            </h2>

            <div className="flex gap-12">
              <div className="flex gap-2 items-center">
                <img className="h-9 w-9" src={cloudIcon} alt="cloudIcon" />
                <span>Cloud Computing</span>
              </div>
              <div className="flex gap-2 items-center">
                <img className="h-9 w-9" src={webIcon} alt="cloudIcon" />
                <span>Web Development</span>
              </div>
            </div>
          </div>
        </div>

        <ZoomFadeComponent />
      </div>
    </>
  );
};
