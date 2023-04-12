import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FullScreenIcon from "../../assets/icons/fullScreenIcon";
import { IMediaAsset } from "../../shared/types";

interface ArtBannerMiniProps {
  image: IMediaAsset | null | undefined;
  isVisible: boolean;
  setIsFullScreenBanner: any;
}

const ArtBannerMini = (props: ArtBannerMiniProps) => {
  const { image, isVisible, setIsFullScreenBanner } = props;
  const rootClass = `art-wrapper art-tease`;
  if (!image) return null;
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={rootClass}
          onClick={() => setIsFullScreenBanner()}
          initial={{
            scale: 0.3,
            x: "120%"
          }}
          animate={{
            scale: 1,
            x: "0%",
          }}
          exit={{
            scale: 0.3,
            x: "120%"
          }}
          transition={{
            ease: "easeInOut",
            duration: .2,
          }}
        >
          <div className="art-holder position-relative" >
            <motion.img className="art-img" src={image.url} alt={image.title}></motion.img>
            <FullScreenIcon />
          </div>
          <div className="small text-uppercase font-aeonik text-center pt-lg-1">Expand</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtBannerMini;
