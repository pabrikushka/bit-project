import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import dummy2 from "../assets/images/dummy2.jpg";
import honeybadger from "../assets/images/honeybadger.jpg";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import MotionArtLink from "./MotionArtLink";
import { IHistoryItem } from "./types";

interface HistoryItemProps {
  itemData: IHistoryItem,
}

const HistoryItem = (props: HistoryItemProps) => {
  const {
    fadeOut,
    centerArt,
    resetArt,
    artHolderAnimation,
    artImgAnimation,
    detailsMotion,
    artHolderMotion,
    ctaMotion,
    hideBorder,
    imageSrc,
  } = props.itemData;

  return (
    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
      <motion.div className="art-card-content row py-3 py-md-4">
        <Col xs={12} lg={{ span: 3, order: 2 }} xl>
          <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
            <h4 className="h3 font-aeonik text-light-70">March 25, 2014</h4>
            <h5 className="font-aeonik small text-light-70">1BTC:$438.89</h5>
          </motion.div>
        </Col>
        <motion.div exit={centerArt} className="art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5">
          <motion.div exit={resetArt} className="art-holder" animate={artHolderAnimation}>
            <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
              <motion.img exit={resetArt} src={imageSrc} alt="Dummy" className="art-img" animate={artImgAnimation} />
            </motion.div>
          </motion.div>
        </motion.div>
        <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
          <motion.div exit={fadeOut} className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100">
            <h3 className="mb-md-3 text-light-100">IRS declares bitcoin be taxed as property</h3>
            <motion.div variants={detailsMotion}>
              <p className="text-light-70">
                It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be
                treated as property, not cash, for tax purposes.
              </p>
            </motion.div>
            <motion.div variants={ctaMotion} className="cta-arrow-holder mt-md-auto">
              <AnimatedArrow />
              Learn More
            </motion.div>
          </motion.div>
        </Col>
      </motion.div>
    </MotionArtLink>
  );
};

export default HistoryItem;
