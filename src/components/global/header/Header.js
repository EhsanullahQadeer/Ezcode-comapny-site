import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/icons/global/logo.svg";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { ToggleButton } from "./ToggleButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header-parent flex flex-row items-center justify-between gap-4 container mx-auto sm:px-16 px-6 sticky w-full bg-transparent">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
              closeDrawer();
            }}
          >
            <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-12">
          <Link to="/contact">
            <button className="text-white text-16 font-medium bg-dodger-blue py-2 px-6 hover:bg-oceanic-blue">
              Book a call
            </button>
          </Link>

          <motion.div
            className="menu-drawer"
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>
              <motion.div
                className="bg"
                style={{
                  maxHeight: "600px",
                  maxWidth: "300px",
                  borderRadius: "30px",
                  clipPath: isOpen
                    ? "circle(600px at 50px 50px)"
                    : "circle(0px at 260px 0)",
                  transition: "clip-path 0.5s ease-in-out",
                }}
              >
                <MenuItems closeDrawer={closeDrawer} />
              </motion.div>
            </AnimatePresence>
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-dodger-blue px-4 py-2 flex cursor-pointer"
              style={{
                borderRadius: isOpen ? "30px" : "10px",
                transition: "all 0.5s ease",
              }}
            >
              <ToggleButton />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
