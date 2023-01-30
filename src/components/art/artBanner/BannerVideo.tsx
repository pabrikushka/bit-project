import React, { useRef } from "react";
import { motion } from "framer-motion";
import { VideoStatuses } from "../types";

interface BannerVideoProps {
  video: any;
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
  const { video, videoStatus, isFullScreenBanner} = props;

  const vidRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if(videoStatus === VideoStatuses.playing){
      vidRef.current?.play();
    }else{
      vidRef.current?.pause();
    }
  }, [videoStatus]);

  return (
    <motion.div className="art-video-frame position-absolute top-0 left-0 w-100 h-100"
    initial={isFullScreenBanner ? false : animationSettings.initial}
    animate={isFullScreenBanner ? false : animationSettings.animate}
    transition={isFullScreenBanner ? undefined : animationSettings.transition}
    >
      <motion.video className="art-video w-100 h-100" src={video} loop muted autoPlay={true} ref={vidRef}></motion.video>
    </motion.div>
  );
};

export default BannerVideo;
