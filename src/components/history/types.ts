import { Serializable } from "child_process";
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
  historyEvent: IHistoryEvent;
  isMobile: boolean;
}

export interface IHistoryGroup {
  id: string,
  year: number,
  historyItems: IHistoryItem[],
  groupFadeOut: any,
}

export interface IHistoryEvent {
  id: string,
  title: string,
  year: number,
  eventDate: Date,
  overview: string,
  btcPrice: number,
  mainImage: IMediaAsset | null,
  thumbnail: IMediaAsset | null,
  audio: IMediaAsset | null,
  video: IMediaAsset | null
}

export interface IMediaAsset {
  title: string,
  url: string
}

// export interface IHistoryData {
//   id: string,
//   year: number,
//   events: IHistoryEvent[]
// }

