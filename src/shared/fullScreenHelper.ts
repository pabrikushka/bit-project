declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
  }

  interface HTMLElement {
    msRequestFullscreen?: any;
    mozRequestFullScreen?: any;
    webkitRequestFullscreen?: any;
  }
}

const isBrowserInFullScreen = (): boolean => {
  // Chrome and etc
  if (document.fullscreenElement !== undefined && document.fullscreenElement !== null) {
    return true;
  }
  // Webkit
  if (document.webkitFullscreenElement) {
    return true;
  }
  // Mozila
  if (document.mozFullScreenElement) {
    return true;
  }
  // MS
  if (document.msFullscreenElement) {
    return true;
  }

  return false;
};

const turnFullScreenOn = () => {
  console.log("requestFullscreen", document.documentElement.requestFullscreen);
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen((<any>Element).ALLOW_KEYBOARD_INPUT);
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
};

const turnFullScreenOff = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

const toggleBrowserFullScreen = (goToFullScreen: boolean) => {
  if (goToFullScreen && !isBrowserInFullScreen()) {
    turnFullScreenOn();
  } else if (!goToFullScreen) turnFullScreenOff();
};

export { toggleBrowserFullScreen, isBrowserInFullScreen };
