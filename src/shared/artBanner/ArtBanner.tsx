import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import FullScreenIcon from "../../assets/icons/fullScreenIcon";
import SmallScreenIcon from "../../assets/icons/smallScreenIcon";
import AudioOnIcon from "../../assets/icons/audioOnIcon";
import AudioOffIcon from "../../assets/icons/audioOffIcon";
import PlayIcon from "../../assets/icons/playIcon";
import PauseIcon from "../../assets/icons/pauseIcon";
import useFullScreenStatus from "../useFullScreenStatus";
import { toggleBrowserFullScreen, isBrowserInFullScreen } from "../fullScreenHelper";
import BannerVideo from "./BannerVideo";
import BannerControls from "./BannerControls";
import { VideoContainer, VideoLoadingStatuses, VideoStatuses } from "./types";
import { chooseVideoStatus } from "./helpers";

interface ArtBannerProps {
  image: any;
  videoContainer: VideoContainer;
  isFullScreenBanner: boolean;
  setIsFullScreenBanner: any;
}


const ArtBanner = (props: ArtBannerProps) => {
  const { image, videoContainer, isFullScreenBanner, setIsFullScreenBanner } = props;
  // work around for browser full screen delay
  const [isBrowserFullScreenSwitchedOn, setIsBrowserFullScreenSwitchedOn] = useState<boolean | null>(null);

  const [videoStatus, setVideoStatus] = useState<VideoStatuses>(videoContainer? VideoStatuses.none: VideoStatuses.loading);

  const isBrowserStatusFullScreen = useFullScreenStatus();

  const showVideo = videoContainer && videoContainer.videoLoadingStatus === VideoLoadingStatuses.loaded;

  React.useEffect(() => {
    if (isFullScreenBanner) {
      toggleBrowserFullScreen(true);
    }

    // TODO delete interval below if fullscreen works as expected
    // const interval = setInterval(() => {
    //   setCanCheckIfFullScreen(isFullScreenBanner);
    // }, 500);

    return () => {
      // clearInterval(interval);
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
    if(videoContainer){
      setVideoStatus(chooseVideoStatus(videoContainer!.videoLoadingStatus));
    }
  }, [videoContainer?.videoLoadingStatus]);



  return (
    <>
      <div className="art-banner position-relative row pb-3 pb-md-4">
        <motion.div className="art-wrapper position-relative h-100 top-0">
          <motion.div className="art-holder position-relative overflow-hidden">
            <motion.div className="art-frame">
              <motion.img src={image} alt="Dummy" className="art-img position-static w-100" />
            </motion.div>
            {showVideo? <BannerVideo video={videoContainer.video} videoStatus={videoStatus}/> : null}
            <BannerControls 
              isFullScreenBanner={isFullScreenBanner} 
              setIsFullScreenBanner={setIsFullScreenBanner} 
              videoStatus={videoStatus} 
              toggleVideo={() => setVideoStatus(videoStatus === VideoStatuses.playing? VideoStatuses.onPause : VideoStatuses.playing)}/>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ArtBanner;
