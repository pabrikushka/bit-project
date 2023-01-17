import React, {  } from "react";
import { motion } from "framer-motion";
import {
  createNavLinkVariants,
} from "./helpers";

const NavbarListNavs = (props: any) => {
  return (
    <>
        <li className="nav-item">
          <motion.a variants={createNavLinkVariants()} href="" className="nav-link">
            BTC History
          </motion.a>
        </li>
        <li className="nav-item">
          <motion.a variants={createNavLinkVariants()} href="" className="nav-link">
            Book
          </motion.a>
        </li>
    </>
  );
};

export default NavbarListNavs;
