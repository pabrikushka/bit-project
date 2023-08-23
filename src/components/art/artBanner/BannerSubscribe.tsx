import React from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AnimatedArrow from '../../../assets/icons/animatedArrow';
import Subscribe from '../share/subscribe/Subscribe';

const BannerSubscribe = () => {
  const bgVariants = {
    initial: {
      height: '0%',
    },
    animate: {
      height: '100%',
    },
  };

  const bgTransition = {
    delay: 0.3,
    duration: 0.5,
    type: 'spring',
    mass: 0.2,
  };

  const contentVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const contentTransition = {
    delay: 0.5,
    duration: 0.4,
    type: 'spring',
    mass: 0.1,
  };

  return (
    <motion.div className='banner-subscribe position-absolute w-100 start-0 bottom-0  d-flex align-items-center justify-content-center'>
      <motion.div
        className='banner-subscribe-bg position-absolute start-0 bottom-0 w-100 bg-dark'
        variants={bgVariants}
        initial='initial'
        animate='animate'
        transition={bgTransition}
      />

      <motion.div
        className='banner-subscribe-content position-relative py-4 py-xl-5 px-4 d-flex flex-column flex-lg-row justify-content-center align-items-center'
        variants={contentVariants}
        initial='initial'
        animate='animate'
        transition={contentTransition}>
        <h2 className='fw-400 h3 m-0 me-3 mb-3 mb-lg-0 text-center text-lg-left'>Get notified when this artwork is unveiled</h2>
        <Subscribe></Subscribe>
      </motion.div>
    </motion.div>
  );
};

export default BannerSubscribe;
