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
        type: "spring",
        mass: 0.2,
      },
    },
  };

  const shareUrl = window.location.href;

  return (
    <div className="pop scrollbar-custom position-fixed w-100 vh-100 top-0 left-0 d-flex justify-content-center" ref={ref}>
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
          <div className="pop-body px-4 pb-4 px-sm-5 pb-sm-5">
            <div className="overflow-hidden mt-4" style={{ textAlign: "center" }}>
              <p style={{ fontSize: 26 }}>Share this page</p>
              <motion.div
                className=" h1-mini text-gradient"
                variants={shareNameVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ fontSize: 49 }}
              >
                {title}
              </motion.div>
              <Row>
                <Col xs={12} md={8} className="d-flex align-items-center">
                  <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{shareUrl}</div>
                </Col>
                <Col xs={12} md={4}>
                  <Button
                    variant="outline-primary"
                    className="bit-btn icon-btn w-100"
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                    }}
                  >
                    COPY LINK
                  </Button>
                </Col>
              </Row>
              <p style={{ fontSize: 26 }}>Social</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                <ShareButtonWrapper socialName="Twitter" shareUrl={shareUrl} />
                <ShareButtonWrapper socialName="Whatsapp" shareUrl={shareUrl} />
                <ShareButtonWrapper socialName="Facebook" shareUrl={shareUrl} />
                <ShareButtonWrapper socialName="Reddit" shareUrl={shareUrl} />
                <ShareButtonWrapper socialName="Email" shareUrl={shareUrl} />
                <ShareButtonWrapper socialName="Telegram" shareUrl={shareUrl} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareModal;
