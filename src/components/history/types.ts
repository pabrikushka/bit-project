import { AnimationControls } from "framer-motion";
import { IArtBase } from "../../shared/types";

export interface IHistoryItem {
  fadeOut: any;
  centerArt: any;
  resetArt: any;
  artHolderAnimation: AnimationControls;
  artImgAnimation: AnimationControls;
  detailsMotion: any;
  artHolderMotion: any;
  ctaMotion: any;
  hideBorder: any;
  historyEvent: IHistoryEvent;
  isMobile: boolean;
}

export interface IHistoryGroup {
  id: string,
  year: number,
  historyItems: IHistoryItem[],
  groupFadeOut: any,
}

export interface IHistoryEvent extends IArtBase {
}

