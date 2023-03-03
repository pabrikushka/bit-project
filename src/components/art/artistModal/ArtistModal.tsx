import React from "react";
import { motion } from "framer-motion";
import fellas from "../../../assets/images/fellas.jpg";
import avatar from "../../../assets/images/avatar.jpg";
import AnimatedArrow from "../../../assets/icons/animatedArrow";
import CloseIcon from "../../../assets/icons/close";
import useMouse from "@react-hook/mouse-position";
import ArtistFooter from './ArtistFooter';
import ArtistSounds from "./ArtistSounds";
import ArtistGallery from "./ArtistGallery";
import { backdropVariants, popContentVariants, bannerVariants, avatarVariants, avatarImgVariants, artistNameVariants, artistSubVariants, artistOverviewVariants, artistContentVariants } from "./helper";
import { IArtist } from "./types";

interface ArtistModalProps {
  closeModal: any;
  artist: IArtist;
}


const ArtistModal = (props: ArtistModalProps) => {
  const { closeModal, artist } = props;

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

  return (
    <div className="pop position-fixed w-100 vh-100 top-0 left-0 d-flex justify-content-center" ref={ref}>
      <div className="pop-wrapper">
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
        <motion.div
          className="pop-content position-relative artist-content"
          variants={popContentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="pop-head position-relative overflow-hidden">
            <motion.img
              src={fellas}
              alt=""
              className="pop-head-img position-absolute w-100 h-100"
              variants={bannerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </div>
          <div className="pop-body px-4 pb-4 px-sm-5 pb-sm-5">
            <div className="artist-img-wrapper position-relative">
              <motion.div
                className="artist-img-holder w-100  overflow-hidden"
                variants={avatarVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.img
                  src={avatar}
                  alt=""
                  className="artist-img"
                  variants={avatarImgVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                />
              </motion.div>
            </div>
            x: ${mouse.x}
            y: ${mouse.y}
            <div className="overflow-hidden mt-4">
              <motion.h1 className=" h1-mini text-gradient" variants={artistNameVariants} initial="hidden" animate="visible" exit="hidden">
                .illtopia
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.h2 className="h5 small font-aeonik text-light-70" variants={artistSubVariants} initial="hidden" animate="visible" exit="hidden">
                Digital Artist
              </motion.h2>
            </div>
            <div className="overflow-hidden mt-4 mt-sm-3">
              <motion.p variants={artistOverviewVariants} initial="hidden" animate="visible" exit="hidden">
                Corrupting good ideas since 96. We will discuss this ASAP and come back on it today. Quick question, will there be a scheduling
                feature on this so we can schedule the weeks art etc to go live as soon as possible.
              </motion.p>
            </div>
            <motion.div variants={artistContentVariants} initial="hidden" animate="visible" exit="hidden">
              <div className="mt-4">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-primary text-decoration-none glow-svg-hover  cta-arrow-holder mt-md-auto d-inline-flex"
                >
                  <AnimatedArrow />
                  <span className="font-aeonik h6 my-0">illtopia.art</span>
                </a>
              </div>
              <ArtistGallery />
              <ArtistSounds />
              <ArtistFooter />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtistModal;
