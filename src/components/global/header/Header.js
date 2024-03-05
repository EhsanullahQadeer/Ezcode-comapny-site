import React, { useEffect, useState } from "react";
import logo from "../../../assets/icons/global/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Links from "../../Links";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed left-1/2 -translate-x-1/2 top-0 z-20 text-primary hover:text-primary-900 transition-all duration-200 ease-linear ${
        scrolled
          ? "shadow-md bg-white/[0.5] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto sm:px-16 px-6 flex items-center py-5">
        <div className="w-full flex justify-between items-center mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              // setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-medium-pink text-[18px] cursor-pointer flex ">
              EZKode
            </p>
          </Link>
          <Links />

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Sidebar />
          </div>
        </div>
      </div>
    </nav>
  );
};
