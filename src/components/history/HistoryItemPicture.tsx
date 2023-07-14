import React, { useCallback, useEffect, useRef, useState, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { IHistoryItem } from "./types";
import { countDaysToRelease, createCenterArt } from "./helpers";
import { SizesContext } from "../../context/sizesContext";

interface HistoryItemPictureProps {
  itemData: IHistoryItem;
  frameX: any;
  frameY: any;
  frameRotate: any;
  imgX: any;
  imgY: any;
}

const HistoryItemPicture = (props: HistoryItemPictureProps) => {
  const { resetArt, fadeOut, artHolderAnimation, artImgAnimation, artHolderMotion, historyEvent, isMobile } = props.itemData;
  const { frameX, frameY, frameRotate, imgX, imgY } = props;
  const {isTablet} = useContext(SizesContext);

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
      initial={!isTablet && {
        scale: 0.8,
        opacity: 0,
      }}
      animate={!isTablet && {
        scale: 0.95,
        opacity: 1,
      }}
      exit={!isTablet && {
        scale: 0.8,
        opacity: 0,
      }}
      transition={!isTablet && {
        opacity: {
          duration: 0.2,
          ease: "easeOut",
        },
        scale: {
          type: "spring",
          stiffness: 200,
          velocity: 0,
          duration: 0.8,
          mass: 1,
          damping: 15,
        },
      }}
    >
      <motion.div
        // exit={resetArt}
        className="art-holder"
        // animate={artHolderAnimation}
      >
        <motion.div
          // exit={resetArt}
          className="art-frame"
          style={!isTablet && {
            translateX: frameX,
            y: frameY,
            rotate: frameRotate,
          }}
          // variants={artHolderMotion}
        >
          <motion.img
            // exit={resetArt}
            src={historyEvent.thumbnail?.url ?? ""}
            alt={historyEvent.thumbnail?.title ?? ""}
            className="art-img"
            style={!isTablet && {
              translateX: imgX,
              y: imgY,
            }}
            // animate={artImgAnimation}
          />

          {/* Release message  */}
          {!historyEvent.artReleased && (
            <div className="release-message-holder w-100 h-100 start-0 top-0 position-absolute d-flex align-items-center justify-content-center">
              <div className="release-message bg-dark p-3 text-center">
                <h3 className="text-uppercase mb-0">
                  Artwork unveiled <br /> in {countDaysToRelease(historyEvent.artReleaseDate)} days
                </h3>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HistoryItemPicture;
