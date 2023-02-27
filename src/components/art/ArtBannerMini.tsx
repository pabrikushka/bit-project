import React from "react";
import { motion } from "framer-motion";
import FullScreenIcon from "../../assets/icons/fullScreenIcon";
import { IMediaAsset } from "../../shared/types";

interface ArtBannerMiniProps {
  image: IMediaAsset | null | undefined;
  isVisible: boolean;
  setIsFullScreenBanner: any;
}

const ArtBannerMini = (props: ArtBannerMiniProps) => {
  const { image, isVisible, setIsFullScreenBanner } = props;
  const rootClass = `art-wrapper art-tease ${isVisible ? "" : "collapsed"} pb-lg-5`;
  if(!image) return null;
  return (
    <motion.div className={rootClass}>
      <div className="art-holder position-relative" onClick={() => setIsFullScreenBanner()}>
        <motion.img className="art-img" src={image.url} alt={image.title}></motion.img>
        <FullScreenIcon />
      </div>
      <div className="small text-uppercase font-aeonik text-center d-lg-none">Expand</div>
    </motion.div>
  );
};

export default ArtBannerMini;
