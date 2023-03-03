import { IArtBase, IMediaAsset } from "../../shared/types";
import { IArtist } from "./artistModal/types";

export enum VideoStatuses {
  none,
  playing,
  onPause,
}

export enum AudioStatuses {
  none,
  mute,
  unmute
}

export enum VideoLoadingStatuses {
  loading,
  loaded,
}

export enum AudioLoadingStatuses {
  loading,
  loaded,
}

export interface VideoContainer {
  videoLoadingStatus: VideoLoadingStatuses;
  video: IMediaAsset | null;
}

export interface AudioContainer {
  audioLoadingStatus: AudioLoadingStatuses;
  audio: IMediaAsset | null;
}

export interface ArtSlideData {
    id: string,
    image: any,
    description: string,
    dateStr: string,
    priceStr: string
}


export interface IArtPiece extends IArtBase {
  arEnhanced: boolean | null,
  audio: IMediaAsset | null,
  video: IMediaAsset | null,
  content: any,
  audioArtist: IArtist | null,
  visualArtist: IArtist | null,
}