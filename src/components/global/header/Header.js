import React from "react";
import logo from "../../../assets/icons/global/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Links from "./Links";

export const Header = () => {
  return (
    <nav
      className={`header-parent-wrapper w-full static top-0 z-20 text-primary hover:text-primary-900 transition-all duration-200 ease-linear bg-transparent`}
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
            <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          </Link>

          <div className="flex flex-1 justify-end items-center">
            <Sidebar />
          </div>
        </div>
      </div>
    </nav>
  );
};
