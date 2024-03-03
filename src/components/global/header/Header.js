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
      if (scrollTop > 100) {
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
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 text-primary hover:text-primary-900 bg-transparent  ${
        scrolled ? "main-header  shadow-md" : "backdrop-blur-10 "
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
    </nav>
  );
};
