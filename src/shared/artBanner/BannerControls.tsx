import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import FullScreenIcon from "../../assets/icons/fullScreenIcon";
import SmallScreenIcon from "../../assets/icons/smallScreenIcon";
import AudioOnIcon from "../../assets/icons/audioOnIcon";
import AudioOffIcon from "../../assets/icons/audioOffIcon";
import PlayIcon from "../../assets/icons/playIcon";
import PauseIcon from "../../assets/icons/pauseIcon";
import { VideoStatuses, AudioStatuses } from "./types";

interface BannerControlsProps {
  isFullScreenBanner: boolean;
  setIsFullScreenBanner: any;
  videoStatus: VideoStatuses;
  audioStatus: AudioStatuses;
  toggleVideo: any;
  toggleAudio: any;
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

const BannerControls = (props: BannerControlsProps) => {
  const { isFullScreenBanner, setIsFullScreenBanner, videoStatus, toggleVideo, audioStatus, toggleAudio } = props;

  const fullScreenTitle = isFullScreenBanner ? "Small Screen" : "Full Screen";

  const showVideoControl = videoStatus !== VideoStatuses.none;
  const showPauseButton = videoStatus === VideoStatuses.playing;
  const videoTitle = showPauseButton ? "Pause" : "Play";

  const showAudioControl = audioStatus !== AudioStatuses.none;
  const isItMutted = audioStatus === AudioStatuses.mute;
  const audioTitle = isItMutted ? "Unmute" : "Mute";

  return (
    <motion.div
      className="controls-holder fader fader-bottom"
      initial={isFullScreenBanner ? false : animaTionSettings.initial}
      animate={isFullScreenBanner ? false : animaTionSettings.animate}
      transition={isFullScreenBanner ? undefined : animaTionSettings.transition}
    >
      <div className="controls-content d-flex align-items-center px-2 py-1">
        {showAudioControl ? (
          <Button variant="link" className="controls-btn p-2 glow-svg-hover" title={audioTitle} onClick={() => toggleAudio()}>
            {isItMutted ? <AudioOffIcon /> : <AudioOnIcon />}
          </Button>
        ) : null}

        {showVideoControl ? (
          <Button variant="link" className="controls-btn p-2 glow-svg-hover" title={videoTitle} onClick={() => toggleVideo()}>
            {showPauseButton ? <PauseIcon /> : <PlayIcon />}
          </Button>
        ) : null}

        <Button
          variant="link"
          className="ms-auto controls-btn p-2 glow-svg-hover"
          title={fullScreenTitle}
          onClick={() => setIsFullScreenBanner(!isFullScreenBanner)}
        >
          {isFullScreenBanner ? <SmallScreenIcon /> : <FullScreenIcon />}
        </Button>
      </div>
    </motion.div>
  );
};

export default BannerControls;
