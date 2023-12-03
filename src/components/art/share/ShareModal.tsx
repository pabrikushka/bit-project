import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "../../../assets/icons/close";
import useMouse from "@react-hook/mouse-position";
import { backdropVariants, popContentVariants, shareNameVariants } from "./helpers";
import { Button, Col, Row } from "react-bootstrap";
import ShareButtonWrapper from "./ShareButtonWrapper";

interface ShareModalProps {
  closeModal: any;
  title: string;
}

const ShareModal = (props: ShareModalProps) => {
  const { closeModal, title } = props;

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    // leaveDelay: 100,
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
        type: "spring",
        mass: 0.2,
      },
    },
  };

  const shareUrl = window.location.href;

  return (
    <div className="pop share-pop scrollbar-custom position-fixed w-100 vh-100 top-0 left-0 d-flex justify-content-center" ref={ref}>
      <div className="pop-wrapper" style={{ height: "100%" }}>
        <motion.div
          className="pop-backdrop position-absolute w-100 h-100 left-0 top-0"
          onClick={() => closeModal()}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="cursor-holder" variants={cursorVariants} animate="default">
            <CloseIcon />
          </motion.div>
        </motion.div>
        <motion.div className="pop-content position-relative" variants={popContentVariants} initial="hidden" animate="visible" exit="hidden">
          <button 
            className="pop-close btn btn-link position-absolute  end-0 top-0 bg-transparent border-none text-primary p-2 p-sm-3 d-md-none d-flex items-center justify-center"
            onClick={() => closeModal()}
          >
            <CloseIcon />
          </button>
          <div className="pop-body px-4 py-4 px-sm-5 py-sm-5">
            <div className=" text-center">
              <h3>Share this page</h3>
              <h2 className="text-gradient">{title}</h2>
              <Row className="copy-action py-4 my-4 border-top border-bottom px-2">
                <Col xs={12} md={8} className="d-flex align-items-center text-light-50 mb-3 mb-md-0">
                  <div className="mx-auto mx-md-0" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{shareUrl}</div>
                </Col>
                <Col xs={12} md={4}>
                  <Button
                    variant="outline-primary"
                    className="bit-btn w-100"
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                    }}
                  >
                    COPY LINK
                  </Button>
                </Col>
              </Row>
              <div className="">
                <h3 className="mb-3">Social</h3>
                <div className="share-grid d-flex flex-wrap justify-content-md-center">
                  <ShareButtonWrapper socialName="Twitter" shareUrl={shareUrl} />
                  <ShareButtonWrapper socialName="Whatsapp" shareUrl={shareUrl} />
                  <ShareButtonWrapper socialName="Facebook" shareUrl={shareUrl} />
                  <ShareButtonWrapper socialName="Reddit" shareUrl={shareUrl} />
                  <ShareButtonWrapper socialName="Telegram" shareUrl={shareUrl} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareModal;
