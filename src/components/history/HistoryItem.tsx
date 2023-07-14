import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import { IHistoryItem } from "./types";
import HistoryItemPicture from "./HistoryItemPicture";
import { createBTCLebel, formatEventDate } from "../../shared/artHelpers";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import ArtNavigator from "./ArtNavigator";
import { SizesContext } from "../../context/sizesContext";

interface HistoryItemProps {
  itemData: IHistoryItem;
  exitAnimationStarting: boolean;
  setAnimationImage: any;
}

function getRelativeCoordinates(event: any, referenceElement: any) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const HistoryItem = (props: HistoryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { fadeOut, detailsMotion, ctaMotion, hideBorder, historyEvent } = props.itemData;
  const {isTablet} = useContext(SizesContext);


  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const MotionArtNavigator = motion(ArtNavigator, { forwardMotionProps: true });
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseSpring = {
    mass: 0.1,
  };

  const mouseSpring2 = {
    mass: 0.1,
  };

  const xVelocity = useSpring(x, mouseSpring);
  const yVelocity = useSpring(y, mouseSpring);

  const xVelocity2 = useSpring(x, mouseSpring2);
  const yVelocity2 = useSpring(y, mouseSpring2);

  const frameX = useTransform(xVelocity, [0, 1], ["-7rem", "7rem"]);
  const frameY = useTransform(yVelocity, [0, 1], ["-2rem", "2rem"]);
  const frameRotate = useTransform(xVelocity, [0, 1], ["-5deg", "5deg"]);

  const imgX = useTransform(xVelocity2, [0, 1], ["10%", "-10%"]);
  const imgY = useTransform(yVelocity2, [0, 1], ["10%", "-10%"]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
    // console.log(y)
  }

  const canHistoryItemPictureBeVisible = !props.exitAnimationStarting;
  // window.addEventListener('mousemove', handleMouse);

  return (
    <MotionArtNavigator
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      animate="rest"
      artId={historyEvent.id}
      setAnimationImage={props.setAnimationImage}
    >
      <motion.div
        className="art-card-content row py-4 py-md-4"
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id={historyEvent.id}
      >
        <Col xs={12} lg={{ span: 3, order: 2 }} xl>
          <motion.div
            style={
              {
                // x: frameX,
                // y: moveY,
              }
            }
            className="art-details d-flex flex-column align-items-start justify-content-between d-sm-block mb-2 mb-lg-4 ms-lg-4 ms-xl-5"
          >
            <h4 className="h3 font-aeonik text-light-70">{formatEventDate(historyEvent.eventDate)}</h4>
            <h5 className="font-aeonik small text-light-70">{createBTCLebel(historyEvent.btcPrice)}</h5>
          </motion.div>
        </Col>
        {isHovered && !isTablet ? (
          <HistoryItemPicture frameX={frameX} frameY={frameY} frameRotate={frameRotate} imgX={imgX} imgY={imgY} itemData={props.itemData} />
        ) : null}
        {isTablet && (
          <HistoryItemPicture frameX={frameX} frameY={frameY} frameRotate={frameRotate} imgX={imgX} imgY={imgY} itemData={props.itemData} />
        )}

        <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
          <motion.div className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100">
            <h3 className="mb-md-3 text-light-100">{historyEvent.title}</h3>

            {isHovered && !isTablet ? (
              <>
                <motion.div initial="rest" animate="hover" exit="rest" variants={detailsMotion}>
                  <p className="text-light-70">{historyEvent.overview}</p>
                </motion.div>
                <motion.div initial="rest" animate="hover" exit="rest" variants={ctaMotion} className="cta-arrow-holder mt-md-auto">
                  <AnimatedArrow />
                  Learn More
                </motion.div>
              </>
            ) : null}

            {isTablet && <>
                <div >
                  <p className="text-light-70">{historyEvent.overview}</p>
                </div>
                <div className="cta-arrow-holder mt-md-auto">
                  <AnimatedArrow />
                  Learn More
                </div>
              </>}
          </motion.div>
        </Col>
      </motion.div>
    </MotionArtNavigator>
  );
};

export default HistoryItem;
