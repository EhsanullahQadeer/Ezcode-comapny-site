import React, { useState } from "react";
import { navLinks } from "./navLinks";

const Links = (props) => {
  const { sm } = props;
  console.log('sm: ', sm);
  const [active, setActive] = useState("");
  return (
    <ul className={`list-none gap-10 ${sm ? "flex sm:hidden flex-col" : "hidden sm:flex"}`}>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`nav-link ${
            active === nav.title ? "text-dark-pink" : "text-secondary"
          }  text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
