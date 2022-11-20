import React, {  } from "react";
import NavSocial from "./navSocial";
import NavbarListNavs from "./NavbarListNavs";

const NavbarContent = (props: any) => {
  return (
    <>
      <div>
        <div className="nav-curtain"></div>
        <div className="nav-curtain"></div>
      </div>
      <div className="nav-items">
        <NavbarListNavs />
        <div>
          <NavSocial styleName={"d-flex d-md-none justify-content-center"} />
        </div>
      </div>
    </>
  );
};

export default NavbarContent;
