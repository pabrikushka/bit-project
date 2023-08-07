import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import useMouse from '@react-hook/mouse-position';
import { backdropVariants, popContentVariants } from '../art/share/helpers';
import VideoPlayer from './VideoPlayer';
import CloseIcon from '../../assets/icons/close';

interface ModalProps {
  onClose: () => void;
  video: string;
}

const VideoModal = (props: ModalProps) => {
  const modalRoot = document.getElementById('video-modal-root')!;

  const mouse = useMouse(modalRoot, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const cursorVariants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.2,
      },
    },
  };

  return createPortal(
    <div className='pop share-pop scrollbar-custom position-fixed w-100 vh-100 top-0 left-0 d-flex justify-content-center'>
      <div className='pop-wrapper d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
        {/* backdrop */}
        <motion.div
          className='pop-backdrop position-absolute w-100 h-100 left-0 top-0'
          onClick={() => props.onClose()}
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'>
          {/* cursor */}
          <div className='cursor-holder'></div>
          <motion.div className='cursor-holder d-none d-md-block' variants={cursorVariants} animate='default'>
            <CloseIcon />
          </motion.div>
          {/* close button */}
          <button
            className='pop-close btn btn-link position-absolute  end-0 top-0 bg-transparent border-none text-primary p-2 p-sm-3 d-md-none d-flex items-center justify-center'
            onClick={() => props.onClose()}>
            <CloseIcon />
          </button>
        </motion.div>
        {/* content */}
        <motion.div
          className='video-pop'
          variants={popContentVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'>
          {/* video player */}
          <VideoPlayer video={props.video}></VideoPlayer>
        </motion.div>
      </div>
    </div>,
    modalRoot
  );
};

export default VideoModal;
