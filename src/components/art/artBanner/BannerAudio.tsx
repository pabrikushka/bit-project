import React, { useRef } from "react";
import { motion } from "framer-motion";
import { AudioContainer, AudioLoadingStatuses, AudioStatuses } from "../types";

interface BannerAudioProps {
  audioContainerState: [AudioContainer, React.Dispatch<React.SetStateAction<AudioContainer>>];
  audioStatus: AudioStatuses;
}

const BannerAudio = (props: BannerAudioProps) => {
  const { audioContainerState, audioStatus} = props;
  const [audioContainer, setAudioContainer] = audioContainerState;
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const muted = audioStatus === AudioStatuses.mute;

  // autoPlay behaves flacky for banner inside Art, play is more reliable 
  React.useEffect(() => {
    if (audioStatus === AudioStatuses.unmute) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [audioStatus]);

  if (!audioContainer.audio) return null;

  const handleAudioLoaded = () => {
    setAudioContainer({
      ...audioContainer,
      audioLoadingStatus: AudioLoadingStatuses.loaded,
    });
  };
  
  return (
    <motion.div className="art-audio-frame position-absolute top-0 left-0 w-100 h-100">
      <motion.audio src={audioContainer.audio.url} 
      loop muted={muted} 
      //controls={true} autoPlay={true}
      onLoadedData={handleAudioLoaded}
      ref={audioRef}
      ></motion.audio>
    </motion.div>
  );
};

export default BannerAudio;
