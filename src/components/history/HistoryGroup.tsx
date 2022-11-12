import React from "react";
import { motion } from "framer-motion";
import HistoryItem from "./HistoryItem";
import { IHistoryGroup, IHistoryItem } from "./types";

interface HistoryGroupProps {
  groupData: IHistoryGroup,
}

const HistoryGroup = (props: HistoryGroupProps) => {
  const { historyItems, groupFadeOut, year } = props.groupData;
  return (
    <section id="15" className="history-section">
      <motion.header exit={groupFadeOut} className="title-block section-title pb-xl-3">
        <h2 className="h1">{year}</h2>
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
