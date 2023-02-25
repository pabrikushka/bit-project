import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useWindowParams from "../../shared/useWindowParams";
import HistoryGroup from "./HistoryGroup";
import { IHistoryGroup } from "./types";
import { getDataForHistory, prepareHistoryGroupData } from "./helpers";
import HistoryYearNavigation from "./HistoryYearNavigation";
import honeybadger from "../../assets/images/honeybadger.jpg";
import TransitAnimator from "../../shared/TransitAnimator";
import { useQuery } from "@apollo/client";
import { GET_WHOLE_HISTORY } from "../../services/graphql/historyQuery";

const HistoryWidget = (props: any) => {
  const { isMobile } = useWindowParams();

  const [historyGroups, setHistoryGroups] = useState<IHistoryGroup[]>([]);

  const { loading, error, data: queryData } = useQuery(GET_WHOLE_HISTORY);

  const artHolderAnimation = useAnimation();
  const artImgAnimation = useAnimation();

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const localX = clientX - window.innerWidth / 2;
    const localY = clientY - window.innerHeight / 2;
    const globalX = clientX;
    const glovalY = clientY;
    const offsetFactor1 = 15;
    const offsetFactor2 = 10;
    if (!isMobile) {
      artHolderAnimation.start({
        x: localX / 10,
        y: localY / offsetFactor1,
        rotate: -localX / 300,
      });
      artImgAnimation.start({
        x: localX / offsetFactor2,
        y: localY / offsetFactor2,
      });
    }
  };

  useEffect(() => {
    console.log(queryData);
    if(queryData){
      const newHistoryGroups = getDataForHistory(queryData, artHolderAnimation, artImgAnimation, isMobile);
      // dataForHistory.map(
      //   (data: IHistoryData) => prepareHistoryGroupData(
      //     data.id,
      //     data.year,
      //     data.events,
      //     artHolderAnimation,
      //     artImgAnimation,
      //     isMobile,
      //   )
      // )
      setHistoryGroups(newHistoryGroups);
      console.log("newHistoryGroups", newHistoryGroups);
    }
  }, [isMobile, queryData]);

  return (
    <>
      <motion.main
        className=""
        initial={{
          y: "0rem",
          scale: 1,
          opacity: 1,
        }}
        exit={{
          y: "-4rem",
          scale: 0.6,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          scale: {
            duration: 1,
          },
        }}
      >
        <Container className="px-xl-5" style={{ paddingBottom: 100 }}>
          <Row>
            <Col xs={12} className="history-wrapper">
              <div className="history-holder overflow-hidden">
                {historyGroups.map((groupData: IHistoryGroup) => (
                  <HistoryGroup groupData={groupData} key={`historuGroupId${groupData.id}`} />
                ))}
              </div>
              <HistoryYearNavigation historyGroups={historyGroups} />
            </Col>
          </Row>
        </Container>
      </motion.main>
      <TransitAnimator image={honeybadger} />
    </>
  );
};

export default HistoryWidget;
