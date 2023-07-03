import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { motion, useMotionValue, useSpring, useTransform, animate, useAnimation } from 'framer-motion';
import ArtLink from '../../history/ArtLink';
import { createBTCLebel, formatEventDate } from "../../../shared/artHelpers";


interface ArtItemProps {
  itemData: any;
}

const ArtItem = (props: ArtItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controlsFrame = useAnimation();
  const controlsImg = useAnimation();

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);

    controlsFrame.start({
      translateX: 0, // Reset the translateX value to 0
      y: 0, // Set the y-coordinate to the initial position
      rotate: '0deg', // Reset the translateX value to 0t the translateY value to 0
      transition: { duration: 1, delay: 0.5 },
    });
    controlsImg.start({
      translateX: 0, // Reset the translateY value to 0
      y: 0, // Set the y-coordinate to the initial position
      transition: { duration: 1, delay: 0.5 },
    });

    frameX.set('0rem');
    frameY.set('0rem');
    frameRotate.set('0deg');
    imgX.set('0%');
    imgY.set('0%');
  }

  const MotionArtLink = motion(ArtLink, { forwardMotionProps: true });
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

  const frameX = useTransform(xVelocity, [0, 1], ['-1rem', '1rem']);
  const frameY = useTransform(yVelocity, [0, 1], ['-1rem', '1rem']);
  const frameRotate = useTransform(xVelocity, [0, 1], ['-5deg', '5deg']);

  const imgX = useTransform(xVelocity2, [0, 1], ['5%', '-5%']);
  const imgY = useTransform(yVelocity2, [0, 1], ['5%', '-5%']);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  return (
    <Col xs={12} lg={6}>
      <MotionArtLink to={''} artId={props.itemData.sys.id}>
        <motion.div onMouseMove={handleMouse} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='art-card-mini'>
            <div className='art-card-mini-content d-sm-flex'>
              <motion.div
                style={{
                  translateX: frameX,
                  y: frameY,
                  rotate: frameRotate,
                }}
                animate={controlsFrame}
                className='art-mini-wrapper'>
                <motion.img
                  src={props.itemData.thumbnail.url}
                  alt=''
                  style={{
                    scale: 1.15,
                    translateX: imgX,
                    y: imgY,
                  }}
                  animate={controlsImg}
                  className='art-mini-img'
                />
              </motion.div>
              <div className='art-card-mini-body py-4 py-sm-1 ps-sm-4'>
                <div className='d-flex align-items-start justify-content-between justify-content-sm-start mb-1 flex-lg-column flex-xxl-row'>
                  <h5 className='font-aeonik small text-light-70 me-0 mb-md-0 mb-lg-3 me-sm-5 me-lg-0 me-xl-5'>{formatEventDate(new Date(props.itemData.artReleaseDate))}</h5>
                  <h5 className='font-aeonik small text-light-70'>{createBTCLebel(props.itemData.btcPrice)}</h5>
                </div>
                <div className='art-card-mini-main'>
                  <h2 className='mb-0  fw-light'>{props.itemData.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </MotionArtLink>
    </Col>
  );
};

export default ArtItem;
