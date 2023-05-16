import React from "react";
import { motion } from "framer-motion";
import { createNavLinkVariants } from "./helpers";
import { NavLink } from "react-router-dom";

interface NavbarListNavsProps {
  closeMenuforMobile?: any;
}

const NavbarListNavs = (props: NavbarListNavsProps) => {

  const handleOnClick = () =>{
      if(props.closeMenuforMobile){
        props.closeMenuforMobile();
      }
  }

  return (
    <>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()} onClick={handleOnClick}>
          <NavLink to="/history" className="nav-link">
            BTC History
          </NavLink>
        </motion.div>
      </li>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()} onClick={handleOnClick}>
          <NavLink to="/collective" className="nav-link">
            Collective
          </NavLink>
        </motion.div>
      </li>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()} onClick={handleOnClick}>
          <NavLink to="https://www.google.com/" className="nav-link">
            Shop
          </NavLink>
        </motion.div>
      </li>
      <li className="nav-item">
        <motion.div variants={createNavLinkVariants()}>
          <NavLink to="/faq" className="nav-link" onClick={handleOnClick}>
            FAQ
          </NavLink>
        </motion.div>
      </li>
    </>
  );
};

export default NavbarListNavs;
