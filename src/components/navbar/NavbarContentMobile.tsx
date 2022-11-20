import React, {  } from "react";
import NavSocial from "./navSocial";
import { motion } from "framer-motion";
import {
  createCurtainsVariants,
  createCurtainTransition,
  createLeftCurtainVariants,
  createNavItemsVariants,
  createNavLinkVariants,
  createRightCurtainVariants,
} from "./helpers";
import NavbarListNavs from "./NavbarListNavs";

const NavbarContentMobile = (props: any) => {
  return (
    <>
      <motion.div
        className="nav-curtains"
        initial="closed"
        animate="open"
        exit="closed"
        variants={createCurtainsVariants()}
        transition={createCurtainTransition()}
      >
        <motion.div className="nav-curtain" variants={createLeftCurtainVariants()} transition={createCurtainTransition()}></motion.div>
        <motion.div className="nav-curtain" variants={createRightCurtainVariants()} transition={createCurtainTransition()}></motion.div>
      </motion.div>
      <motion.div className="nav-items" initial="closed" animate="open" exit="closed" variants={createNavItemsVariants()}>
        <NavbarListNavs />
        <motion.div variants={createNavLinkVariants()}>
          <NavSocial styleName={"d-flex d-md-none justify-content-center"} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavbarContentMobile;
