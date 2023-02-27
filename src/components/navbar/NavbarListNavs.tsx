import React from "react";
import { motion } from "framer-motion";
import { createNavLinkVariants } from "./helpers";
import { NavLink } from "react-router-dom";

const NavbarListNavs = (props: any) => {
  return (
    <>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()}>
          <NavLink to="/history" className="nav-link">
            BTC History
          </NavLink>
        </motion.div>
      </li>
      <li className="nav-item">
        <motion.a variants={createNavLinkVariants()} href="/history" className="nav-link">
          Book
        </motion.a>
      </li>
    </>
  );
};

export default NavbarListNavs;
