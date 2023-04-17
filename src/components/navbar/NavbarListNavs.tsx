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
        <motion.div variants={createNavLinkVariants()}>
          <NavLink to="/collective" className="nav-link">
            Collective
          </NavLink>
        </motion.div>
      </li>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()}>
          <NavLink to="https://www.google.com/" className="nav-link">
            Shop
          </NavLink>
        </motion.div>
      </li>
    </>
  );
};

export default NavbarListNavs;
