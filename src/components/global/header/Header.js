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

  const variants = {
    open: {
      clipPath: "circle(600px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 260px 0px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
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

        <motion.div
          className="menu-drawer"
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            <motion.div
              variants={variants}
              className="bg"
              style={{ maxWidth: "300px", borderRadius: "30px" }}
            >
              <MenuItems closeDrawer={closeDrawer} />
            </motion.div>
          </AnimatePresence>
          <div
            className="bg-dodger-blue px-4 py-2 flex"
            style={{
              borderRadius: isOpen ? "30px" : "10px",
              transition: "all 0.5s ease",
            }}
          >
            <ToggleButton setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      </div>
    </>
  );
};
