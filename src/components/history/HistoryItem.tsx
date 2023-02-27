import React from "react";
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import { IHistoryItem } from "./types";
import ArtLink from "./ArtLink";
import HistoryItemPicture from "./HistoryItemPicture";
import { createBTCLebel, formatEventDate } from "../../shared/artHelpers";

interface HistoryItemProps {
  itemData: IHistoryItem;
}

const HistoryItem = (props: HistoryItemProps) => {
  const { fadeOut, detailsMotion, ctaMotion, hideBorder, historyEvent } = props.itemData;

  const MotionArtLink = motion(ArtLink, { forwardMotionProps: true });

  return (
    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" artId={historyEvent.id}>
      <motion.div className="art-card-content row py-4 py-md-4">
        <Col xs={12} lg={{ span: 3, order: 2 }} xl>
          <motion.div className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
            <h4 className="h3 font-aeonik text-light-70">{formatEventDate(historyEvent.eventDate)}</h4>
            <h5 className="font-aeonik small text-light-70">{createBTCLebel(historyEvent.btcPrice)}</h5>
          </motion.div>
        </Col>
        <HistoryItemPicture itemData={props.itemData} />
        <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
          <motion.div className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100">
            <h3 className="mb-md-3 text-light-100">{historyEvent.title}</h3>
            <motion.div variants={detailsMotion}>
              <p className="text-light-70">{historyEvent.overview}</p>
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
