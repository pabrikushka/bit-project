import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionArtLink = (props: any) => {
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

  return <>{motion(ArtLink, { forwardMotionProps: true })}</>;
};

export default MotionArtLink;
