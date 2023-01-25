import React, {  } from "react";
import { motion } from "framer-motion";
import FullScreenIcon from "../../assets/icons/fullScreenIcon";

interface ArtBannerMiniProps {
  image: any;
  isVisible: boolean;
  setIsFullScreenBanner: any;
}

const ArtBannerMini = (props: ArtBannerMiniProps) => {
  const { image, isVisible, setIsFullScreenBanner} = props;
  const rootClass = `art-wrapper art-tease ${isVisible? '': 'collapsed'} pb-lg-5`;

  return (
    <motion.div className={rootClass}>
    <div className="art-holder position-relative">
      <motion.img className="art-img" src={image} alt=""></motion.img>
      <div onClick={() => setIsFullScreenBanner()}> <FullScreenIcon /></div>
    </div>
    <div className="small text-uppercase font-aeonik text-center d-lg-none">Expand</div>
  </motion.div>
  );
};

export default ArtBannerMini;
