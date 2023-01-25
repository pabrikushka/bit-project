import React, {  } from "react";
import { motion } from "framer-motion";
import { AudioStatuses } from "./types";

interface BannerAudioProps {
  audio: any;
  audioStatus: AudioStatuses;
}

const BannerAudio = (props: BannerAudioProps) => {
  const { audio, audioStatus} = props;

  const muted = audioStatus === AudioStatuses.mute;

  return (
    <motion.div className="art-audio-frame position-absolute top-0 left-0 w-100 h-100">
      <motion.audio src={audio} loop muted={muted} autoPlay={true}></motion.audio>
    </motion.div>
  );
};

export default BannerAudio;
