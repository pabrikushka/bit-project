import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, MotionValue } from 'framer-motion';
import Mona from '../assets/videos/dude.mp4';
import Button from 'react-bootstrap/Button';
import VideoModal from './art/share/VideoModal';

// function useParallax(value: MotionValue<number>, distance: number) {
//     return useTransform(value, [0, 1], [-distance, distance]);
// }

interface HeroProps {}

const HeroTest = (props: HeroProps) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["end center", "center start"]
  // });
  // const scrollVelocity = useSpring(scrollYProgress, {
  //     damping: 120,
  //     stiffness: 400
  // });
  // const y = useTransform(scrollVelocity, [0, 1], [0, -300]);

  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const mouseSpring = {
    damping: 120,
    stiffness: 400,
  };

  const xVelocity = useSpring(x, mouseSpring);
  const yVelocity = useSpring(y, mouseSpring);

  const moveX = useTransform(xVelocity, [0, 100], ['5%', '-5%']);
  const moveY = useTransform(yVelocity, [0, 100], ['5%', '-5%']);

  function handleMouse(event) {
    x.set((event.clientX / window.innerWidth) * 100);
    y.set((event.clientY / window.innerHeight) * 100);
  }

  // window.addEventListener('mousemove', handleMouse);


  const handleCloseVideoModal = () => setShowVideoModal(false);
  const handleShowVideoModal = () => {
    console.log('Hello this is the modal')
    setShowVideoModal(true)
  };

  console.log(showVideoModal);

  return (
    <header
      className='hero fader fader-40 fader-bottom fader-top'
      // ref={ref}
    >
      <motion.div className='hero-bg-holder'>
        <motion.video
          style={
            {
              // x: moveX,
              // y: moveY,
            }
          }
          className='hero-video'
          src={Mona}
          loop
          muted
          autoPlay={true}></motion.video>
      </motion.div>
      <Button variant='primary' className='hero-btn' href='#' onClick={handleShowVideoModal}>
        Hello This is a button
      </Button>
      <VideoModal show={showVideoModal} video={Mona} onClose={handleCloseVideoModal} />  
    </header>

  );
};

export default HeroTest;
