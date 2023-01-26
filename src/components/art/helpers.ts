import { AudioContainer, AudioLoadingStatuses, VideoContainer, VideoLoadingStatuses } from "./types";
import honeybadgerLoop from "../../assets/videos/Honey-Badger-Loop.mp4";
import test500kb from "../../assets/audio/test500kb.mp3";

const artBodyAnimationSettings = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0,
    duration: 0.5,
    ease: "easeOut",
  },
};

const preloadVideo = async (): Promise<VideoContainer> => {
  await new Promise((f) => setTimeout(f, 5000));
  return {
    video: honeybadgerLoop,
    videoLoadingStatus: VideoLoadingStatuses.loaded,
  };
};

const preloadAudio = async (): Promise<AudioContainer> => {
  await new Promise((f) => setTimeout(f, 5000));
  return {
    audio: test500kb,
    audioLoadingStatus: AudioLoadingStatuses.loaded,
  };
};

export { preloadVideo, preloadAudio, artBodyAnimationSettings };
