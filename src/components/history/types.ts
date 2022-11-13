import { AnimationControls } from "framer-motion";

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
  imageSrc: any;
}

export interface IHistoryGroup {
  id: number,
  year: number,
  historyItems: IHistoryItem[],
  groupFadeOut: any,
}

export interface IHistoryEvent {
  imageSrc: any
}

export interface IHistoryData {
  id: number,
  year: number,
  events: IHistoryEvent[]
}

