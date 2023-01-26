import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import FullScreenIcon from "../../../assets/icons/fullScreenIcon";
import SmallScreenIcon from "../../../assets/icons/smallScreenIcon";
import AudioOnIcon from "../../../assets/icons/audioOnIcon";
import AudioOffIcon from "../../../assets/icons/audioOffIcon";
import PlayIcon from "../../../assets/icons/playIcon";
import PauseIcon from "../../../assets/icons/pauseIcon";
import useFullScreenStatus from "../../../shared/useFullScreenStatus";
import { VideoStatuses } from "../types";

interface BannerVideoProps {
  video: any;
  videoStatus: VideoStatuses;
}

const BannerVideo = (props: BannerVideoProps) => {
  const { video, videoStatus} = props;

  const vidRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if(videoStatus === VideoStatuses.playing){
      vidRef.current?.play();
    }else{
      vidRef.current?.pause();
    }
  }, [videoStatus]);

  return (
    <motion.div className="art-video-frame position-absolute top-0 left-0 w-100 h-100">
      <motion.video className="art-video w-100 h-100" src={video} loop muted autoPlay={true} ref={vidRef}></motion.video>
    </motion.div>
  );
};

export default BannerVideo;
