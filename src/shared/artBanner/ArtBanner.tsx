import React, { useState } from "react";
import { motion } from "framer-motion";
import useFullScreenStatus from "../useFullScreenStatus";
import { toggleBrowserFullScreen, isBrowserInFullScreen } from "../fullScreenHelper";
import BannerVideo from "./BannerVideo";
import BannerControls from "./BannerControls";
import { AudioContainer, AudioLoadingStatuses, AudioStatuses, VideoContainer, VideoLoadingStatuses, VideoStatuses } from "./types";
import { chooseVideoStatus, chooseAudioStatus } from "./helpers";
import BannerAudio from "./BannerAudio";

interface ArtBannerProps {
  image: any;
  videoContainer: VideoContainer;
  audioContainer: AudioContainer;
  isFullScreenBanner: boolean;
  setIsFullScreenBanner: any;
}

const ArtBanner = (props: ArtBannerProps) => {
  const { image, videoContainer, isFullScreenBanner, setIsFullScreenBanner, audioContainer } = props;
  // work around for browser full screen delay
  const [isBrowserFullScreenSwitchedOn, setIsBrowserFullScreenSwitchedOn] = useState<boolean | null>(null);

  const isBrowserStatusFullScreen = useFullScreenStatus();

  const [videoStatus, setVideoStatus] = useState<VideoStatuses>(VideoStatuses.none);
  const [audioStatus, setAudioStatus] = useState<AudioStatuses>(AudioStatuses.none);

  const showVideo = videoContainer && videoContainer.videoLoadingStatus === VideoLoadingStatuses.loaded;
  const showAudio = audioContainer && audioContainer.audioLoadingStatus === AudioLoadingStatuses.loaded;

  React.useEffect(() => {
    if (isFullScreenBanner) {
      toggleBrowserFullScreen(true);
    }

    return () => {
      if (isBrowserInFullScreen()) {
        toggleBrowserFullScreen(false);
      }
    };
  }, []);

  // We need apply fullscreen second time
  // browser comes to fullscreen with delay and not all browsers support promise
  React.useEffect(() => {
    if (isBrowserFullScreenSwitchedOn !== null || isBrowserStatusFullScreen) {
      setIsBrowserFullScreenSwitchedOn(isBrowserStatusFullScreen);
    }
  }, [isBrowserStatusFullScreen]);

  React.useEffect(() => {
    // if browser status really not fullscreen, but banner is => we should allign
    if (isBrowserFullScreenSwitchedOn === false && isFullScreenBanner) {
      setIsFullScreenBanner(false);
    }
  }, [isBrowserFullScreenSwitchedOn]);

  React.useEffect(() => {
    if (videoContainer) {
      setVideoStatus(chooseVideoStatus(videoContainer!.videoLoadingStatus));
    }
  }, [videoContainer?.videoLoadingStatus]);

  React.useEffect(() => {
    if (videoContainer) {
      setAudioStatus(chooseAudioStatus(audioContainer!.audioLoadingStatus));
    }
  }, [audioContainer?.audioLoadingStatus]);

  return (
    <>
      <div className="art-banner position-relative row pb-3 pb-md-4">
        <motion.div className="art-wrapper position-relative h-100 top-0">
          <motion.div className="art-holder position-relative overflow-hidden">
            <motion.div className="art-frame">
              <motion.img src={image} alt="Dummy" className="art-img position-static w-100" />
            </motion.div>
            {showVideo ? <BannerVideo video={videoContainer.video} videoStatus={videoStatus} /> : null}
            {showAudio ? <BannerAudio audio={audioContainer.audio} audioStatus={audioStatus} /> : null}
            <BannerControls
              isFullScreenBanner={isFullScreenBanner}
              setIsFullScreenBanner={setIsFullScreenBanner}
              videoStatus={videoStatus}
              audioStatus={audioStatus}
              toggleVideo={() => setVideoStatus(videoStatus === VideoStatuses.playing ? VideoStatuses.onPause : VideoStatuses.playing)}
              toggleAudio={() => setAudioStatus(audioStatus === AudioStatuses.unmute ? AudioStatuses.mute : AudioStatuses.unmute)}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ArtBanner;
