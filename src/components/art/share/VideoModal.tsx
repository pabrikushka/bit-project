import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { createPortal } from 'react-dom';
import ModalDialog from 'react-bootstrap/ModalDialog';

interface ModalProps {
  onClose: () => void;
  show: boolean;
  video: string;
}

const VideoModal = (props: ModalProps) => {
  const modalRoot = document.getElementById('video-modal-root')!;

  return createPortal(
    <Modal show={props.show} onHide={props.onClose}>
      <video
        className='hero-video'
        src={props.video}
        loop
        muted
        autoPlay={true}></video>
    </Modal>,
    modalRoot
  );
};

export default VideoModal;
