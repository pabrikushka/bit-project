import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IHistoryItem } from "./types";
import { createCenterArt } from "./helpers";

interface HistoryItemPictureProps {
  itemData: IHistoryItem;
}

const HistoryItemPicture = (props: HistoryItemPictureProps) => {
  const { resetArt, fadeOut, artHolderAnimation, artImgAnimation, artHolderMotion, historyEvent, isMobile } = props.itemData;

  const pictureContainerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isInView = useInView(pictureContainerRef);

  const [centerArt, setCenterArt] = useState<any>(createCenterArt(isMobile, pictureContainerRef));

  const handleScroll = useCallback(() => {
    if (isInView) {
      setCenterArt(createCenterArt(isMobile, pictureContainerRef));
    }
  }, [isInView, pictureContainerRef, isMobile]);

  useEffect(() => {
    if (isInView && !isMobile) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, isMobile]);
  if (!historyEvent.mainImage) return <div></div>;
  return (
    <motion.div
      ref={pictureContainerRef}
      // exit={fadeOut}
      className="art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5"
    >
      <motion.div
        // exit={resetArt}
        className="art-holder"
        // animate={artHolderAnimation}
      >
        <motion.div
          // exit={resetArt}
          className="art-frame"
          // variants={artHolderMotion}
        >
          <motion.img
            // exit={resetArt}
            src={historyEvent.thumbnail?.url ?? ""}
            alt={historyEvent.thumbnail?.title ?? ""}
            className="art-img"
            // animate={artImgAnimation}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HistoryItemPicture;
