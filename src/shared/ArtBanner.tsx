import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import FullScreenIcon from "../assets/icons/fullScreenIcon";
import SmallScreenIcon from "../assets/icons/smallScreenIcon";
import AudioOnIcon from "../assets/icons/audioOnIcon";
import AudioOffIcon from "../assets/icons/audioOffIcon";
import PlayIcon from "../assets/icons/playIcon";
import PauseIcon from "../assets/icons/pauseIcon";

interface ArtBannerProps {
  image: any;
  video: any;
  isFullScreenBanner: boolean;
  setIsFullScreenBanner: any;
}

const animaTionSettings = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0.3,
    duration: 0.5,
    ease: "easeOut",
  },
};

const ArtBanner = (props: ArtBannerProps) => {
  const { image, video, isFullScreenBanner, setIsFullScreenBanner } = props;
  const title = isFullScreenBanner ? "Small Screen" : "Full Screen";

  return (
    <>
      <div className="art-banner position-relative row pb-3 pb-md-4">
        <motion.div className="art-wrapper position-relative h-100 top-0">
          <motion.div className="art-holder position-relative overflow-hidden">
            <motion.div className="art-frame">
              <motion.img src={image} alt="Dummy" className="art-img position-static w-100" />
            </motion.div>
            <motion.div className="art-video-frame position-absolute top-0 left-0 w-100 h-100">
              <motion.video className="art-video w-100 h-100" src={video} loop muted autoPlay={true}></motion.video>
            </motion.div>
            <motion.div
              className="controls-holder fader fader-bottom"
              initial={isFullScreenBanner ? false : animaTionSettings.initial}
              animate={isFullScreenBanner ? false : animaTionSettings.animate}
              transition={isFullScreenBanner ? undefined : animaTionSettings.transition}
            >
              <div className="controls-content d-flex align-items-center px-2 py-1">
                <Button variant="link" href="#" className="controls-btn p-2 glow-svg-hover" title="Mute">
                  <AudioOnIcon />
                  <AudioOffIcon />
                </Button>
                <Button variant="link" href="#" className="controls-btn p-2 glow-svg-hover" title="Pause">
                  <PlayIcon />
                  <PauseIcon />
                </Button>
                <Button
                  variant="link"
                  className="ms-auto controls-btn p-2 glow-svg-hover"
                  title={title}
                  onClick={() => setIsFullScreenBanner(!isFullScreenBanner)}
                >
                  {isFullScreenBanner ? <SmallScreenIcon /> : <FullScreenIcon />}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ArtBanner;
