import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import ParallaxText from './parallaxText';
import React from 'react';

export default function RunningText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start'],
  });
  const linesVelocity = useSpring(scrollYProgress, {
    damping: 120,
    stiffness: 400,
  });

  const blobVelocity = useSpring(scrollYProgress, {
    damping: 140,
    stiffness: 200,
  });

  const scale = useTransform(linesVelocity, [0, 1], [1, 3.5]);
  const blobScale = useTransform(linesVelocity, [0, 100], [1, 100]);
  const blobX = useTransform(blobVelocity, [0, 100], [0, -200]);

  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const mouseSpring = {
    damping: 120,
    stiffness: 200,
  };

  const xVelocity = useSpring(x, mouseSpring);
  const yVelocity = useSpring(y, mouseSpring);

  const blob1X = useTransform(xVelocity, [0, 100], ['-15%', '15%']);
  const blob1Y = useTransform(yVelocity, [0, 100], ['-15%', '15%']);

  const blob2X = useTransform(xVelocity, [0, 100], ['15%', '-15%']);
  const blob2Y = useTransform(yVelocity, [0, 100], ['15%', '-15%']);

  function handleMouse(event) {
    x.set((event.clientX / window.innerWidth) * 100);
    y.set((event.clientY / window.innerHeight) * 100);
  }

  // window.addEventListener('mousemove', handleMouse);

  return (
    <section className='rt-section' ref={ref}>
      <div className='rt-section-bg position-absolute w-100 h-100 top-0'>
        {/* <motion.div
                    className="rt-blob-1 position-absolute"
                    style={{
                       // scale: blobScale,
                        // x: blob1X,
                        // y: blob1Y,
                    }}
                >
                    <motion.div className="blob w-100 h-100"></motion.div>
                </motion.div>
                <motion.div
                    className="rt-blob-2 position-absolute"
                    style={{
                        // scale: blobScale,
                        // x: blob2X,
                        // y: blob2Y,
                    }}
                >
                    <motion.div className="blob w-100 h-100"></motion.div>
                </motion.div> */}
      </div>
      <motion.div
        className='rt-lines'
        style={{
          scale: scale,
        }}>
        <ParallaxText baseVelocity={-1}>
          Learn <span className='circle'></span> Explore <span className='circle'></span> Own{' '}
          <span className='circle'></span>
        </ParallaxText>
        <ParallaxText baseVelocity={1}>
          Bitcoin <span className='circle'></span> Stories <span className='circle'></span>
        </ParallaxText>
      </motion.div>
    </section>
  );
}
