import React, { useState, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { motion, useMotionValue, useSpring, useTransform, animate, useAnimation } from 'framer-motion';
import { createBTCLebel, formatEventDate } from "../../../shared/artHelpers";
import ArtNavigator from '../../history/ArtNavigator';
import { IArtPiece } from '../types';
import { SizesContext } from '../../../context/sizesContext';


interface ArtItemProps {
  itemData: any;
  setAnimationImage: any;
}

const ArtItem = (props: ArtItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const {isTablet} = useContext(SizesContext);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0.5)
    y.set(0.5)
    console.log('left')
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

  const frameX = useTransform(xVelocity, [0, 1], ['-0.7rem', '0.7rem']);
  const frameY = useTransform(yVelocity, [0, 1], ['-0.7rem', '0.7rem']);
  const frameRotate = useTransform(xVelocity, [0, 1], ['-4deg', '4deg']);

  const imgX = useTransform(xVelocity2, [0, 1], ['4%', '-4%']);
  const imgY = useTransform(yVelocity2, [0, 1], ['4%', '-4%']);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  return (
    <Col xs={12} lg={6} className='motion-safe'>
      <MotionArtNavigator artId={props.itemData.sys.id} setAnimationImage={props.setAnimationImage}>
        <motion.div onMouseMove={handleMouse} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='art-card-mini'>
            <div className='art-card-mini-content d-sm-flex'>
              <motion.div
                style={!isTablet && {
                  translateX: frameX,
                  y: frameY,
                  rotate: frameRotate,
                }}
                className='art-mini-wrapper'>
                <motion.img
                  src={props.itemData.thumbnail.url}
                  alt=''
                  style={!isTablet && {
                    scale: 1.15,
                    translateX: imgX,
                    y: imgY,
                  }}
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
      </MotionArtNavigator>
    </Col>
  );
};

export default ArtItem;
