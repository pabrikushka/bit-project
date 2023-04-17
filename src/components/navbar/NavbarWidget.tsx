import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo";
import NavSocial from "./navSocial";
import NavbarButton from "./NavbarButton";
import { AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import useWindowParams from "../../shared/useWindowParams";
import NavbarContent from "./NavbarContent";
import NavbarContentMobile from "./NavbarContentMobile";
import { NavLink } from "react-router-dom";

const NavbarWidget = (props: any) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [minified, setMinified] = useState(true);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { windowWidth } = useWindowParams();
  const isSmallScreen = windowWidth <= 768;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }


    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add("menu-open");
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("menu-open");
      document.getElementsByTagName("html")[0].classList.remove("overflow-hidden");
    }
  }, [isMenuOpened]);

  return (
    <nav className={`bit-nav ${isMenuOpened ? "opened" : "collapsed"}`}>
      <Container className="nav-container px-xl-5">
        <div className="nav-content">
          <NavLink to="/" className="navbar-brand glow-svg-hover">
            <Logo className={"brand-logo primary"} />
          </NavLink>
          {isSmallScreen ? <AnimatePresence>{isMenuOpened && <NavbarContentMobile />}</AnimatePresence> : <NavbarContent />}
          <NavSocial styleName={"d-none d-md-flex"} />
          <NavbarButton styleName={"ps-4 d-none d-md-block"} />
          {isSmallScreen && <MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />}
        </div>
      </Container>
    </nav>
  );
};

export default NavbarWidget;
