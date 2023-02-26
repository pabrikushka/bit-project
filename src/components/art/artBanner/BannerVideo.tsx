import React, { useRef } from "react";
import { motion } from "framer-motion";
import { VideoContainer, VideoLoadingStatuses, VideoStatuses } from "../types";

interface BannerVideoProps {
  videoContainerState: [VideoContainer, React.Dispatch<React.SetStateAction<VideoContainer>>];
  videoStatus: VideoStatuses;
  isFullScreenBanner: boolean;
}

const animationSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    delay: 0,
    duration: 0.5,
    ease: "easeOut",
  },
};

const BannerVideo = (props: BannerVideoProps) => {
  const { videoContainerState, videoStatus, isFullScreenBanner } = props;
  const [videoContainer, setVideoContainer] = videoContainerState;

  const vidRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoStatus === VideoStatuses.playing) {
      vidRef.current?.play();
    } else {
      vidRef.current?.pause();
    }
  }, [videoStatus]);

  if (!videoContainer.video) return null;

  const handleVideoLoaded = () => {
    setVideoContainer({
      ...videoContainer,
      videoLoadingStatus: VideoLoadingStatuses.loaded,
    });
  };

  return (
    <motion.div
      className="art-video-frame position-absolute top-0 left-0 w-100 h-100"
      initial={isFullScreenBanner ? false : animationSettings.initial}
      animate={isFullScreenBanner ? false : animationSettings.animate}
      transition={isFullScreenBanner ? undefined : animationSettings.transition}
    >
      <motion.video
        className="art-video w-100 h-100"
        src={videoContainer.video.url}
        loop
        muted
        autoPlay={true}
        ref={vidRef}
        onLoadedData={handleVideoLoaded}
      ></motion.video>
    </motion.div>
  );
};

export default BannerVideo;
