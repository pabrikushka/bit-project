import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import dummy2 from "../assets/images/dummy2.jpg";
import honeybadger from "../assets/images/honeybadger.jpg";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import MotionArtLink from "./MotionArtLink";
import HistoryItem from "./HistoryItem";
import { IHistoryGroup, IHistoryItem } from "./types";

interface HistoryGroupProps {
  groupData: IHistoryGroup,
}

const HistoryGroup = (props: HistoryGroupProps) => {
  const { historyItems, groupFadeOut } = props.groupData;
  return (
    <section id="15" className="history-section">
      <motion.header exit={groupFadeOut} className="title-block section-title pb-xl-3">
        <h2 className="h1">2015</h2>
      </motion.header>
      <div className="history-row">
        {historyItems.map((itemData: IHistoryItem, index) => (
          <HistoryItem itemData={itemData} key={`historuItem${index}`}/>
        ))}
      </div>
    </section>
  );
};

export default HistoryGroup;
