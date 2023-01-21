import React from "react";
import { isBrowserInFullScreen } from "./fullScreenHelper";

export default function useFullScreenStatus() {
  const [isBrowserInFullScreenStatus, setIsBrowserInFullScreenStatus] = React.useState<boolean>(isBrowserInFullScreen())

  const setCurrentBrowserFullscreenStatus = () => {
    setIsBrowserInFullScreenStatus(isBrowserInFullScreen())
  };

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", setCurrentBrowserFullscreenStatus);
    document.addEventListener("webkitfullscreenchange", setCurrentBrowserFullscreenStatus);
    document.addEventListener("mozfullscreenchange", setCurrentBrowserFullscreenStatus);
    document.addEventListener("msfullscreenchange", setCurrentBrowserFullscreenStatus);
    return () => {
      document.removeEventListener("fullscreenchange", setCurrentBrowserFullscreenStatus);
      document.removeEventListener("webkitfullscreenchange", setCurrentBrowserFullscreenStatus);
      document.removeEventListener("mozfullscreenchange", setCurrentBrowserFullscreenStatus);
      document.removeEventListener("msfullscreenchange", setCurrentBrowserFullscreenStatus);
    };
  }, []);

  return isBrowserInFullScreenStatus;
}
