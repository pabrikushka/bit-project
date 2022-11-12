import React from "react";
import { Link } from "react-router-dom";

const ArtLink = React.forwardRef((props: any, ref: any) => (
    <Link
      to={"/art"}
      ref={ref}
      // onMouseMove={e => handleMouseMove(e)}
      className="art-card"
    >
      {props.children}
    </Link>
  ));

export default ArtLink;
