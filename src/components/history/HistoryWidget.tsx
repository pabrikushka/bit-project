import React from "react";
import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowParams from '../../shared/useWindowParams';
import HistoryGroup from "./HistoryGroup";
import { IHistoryData, IHistoryGroup } from "./types";
import { getDataForHistory, prepareHistoryGroupData } from "./helpers";
import HistoryYearNavigation from "./HistoryYearNavigation";


const HistoryWidget = (props: any) => {


  const { isMobile } = useWindowParams();

  const [dataForHistory, setDataForHistory] = useState<IHistoryData[]>([]);
  const [historyGroups, setHistoryGroups] = useState<IHistoryGroup[]>([]);


  // const imgAnimation = useAnimation();
  const artHolderAnimation = useAnimation()
  const artImgAnimation = useAnimation()

  const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e
      const localX = clientX - window.innerWidth / 2
      const localY = clientY - window.innerHeight / 2
      const globalX = clientX
      const glovalY = clientY
      const offsetFactor1 = 15
      const offsetFactor2 = 10
      if (!isMobile) {
          artHolderAnimation.start({
              x: localX / 10,
              y: localY / offsetFactor1,
              rotate: -localX / 300,
          })
          artImgAnimation.start({
              x: localX / offsetFactor2,
              y: localY / offsetFactor2
          })
      }
  }

  useEffect(() => {
    setDataForHistory(getDataForHistory());
  }, []);

  useEffect(() => {
    const newHistoryGroups = dataForHistory.map(
      (data: IHistoryData) => prepareHistoryGroupData(
        data.id,
        data.year,
        data.events,
        artHolderAnimation,
        artImgAnimation,
        isMobile,
      )
    )
    setHistoryGroups(newHistoryGroups);
  }, [isMobile, dataForHistory]);

  return (
      <main className=''>
          <Container className='px-xl-5' style={{paddingBottom: 100}}>
              <Row>
                  <Col xs={12} className="history-wrapper">
                      <div className="history-holder overflow-hidden">
                      {historyGroups.map((groupData: IHistoryGroup ) => (
                          <HistoryGroup groupData={groupData} key={`historuGroupId${groupData.id}`}/>
                        ))}
                      </div>
                      <HistoryYearNavigation dataForHistory={dataForHistory}/>
                  </Col>
              </Row>
          </Container>
      </main>
  )
};

export default HistoryWidget;
