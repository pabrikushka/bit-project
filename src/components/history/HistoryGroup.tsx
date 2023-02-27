import React from "react";
import { motion } from "framer-motion";
import HistoryItem from "./HistoryItem";
import { IHistoryGroup, IHistoryItem } from "./types";

interface HistoryGroupProps {
  groupData: IHistoryGroup,
}

const HistoryGroup = (props: HistoryGroupProps) => {
  const { historyItems, groupFadeOut, year, id } = props.groupData;
  return (
    <section id={id.toString()} className="history-section">
      <motion.header className="title-block section-title pb-xl-3">
        <h2 className="h1">{year}</h2>
      </motion.header>
      <div className="history-row">
        {historyItems.map((itemData: IHistoryItem) => (
          <HistoryItem itemData={itemData} key={`historyItem${itemData.historyEvent.id}`}/>
        ))}
      </div>
    </section>
  );
};

export default HistoryGroup;
