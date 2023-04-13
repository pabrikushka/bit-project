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
  circulatingSupply: number | null,
  marketCap: number | null,
  numberOfAddresses: number | null,
  blockNumber: number | null,
  blockHeight: number | null,
  hashRate: number | null,
  priceChange1Month: number | null,
  priceChange1MonthColour: boolean | null,
  priceChange1MonthGraph: IMediaAsset | null,
  priceChange3Month: number | null,
  priceChange3MonthColour: boolean | null,
  priceChange3MonthGraph: IMediaAsset | null,
  priceChange1Year: number | null,
  priceChange1YearColour: boolean | null,
  priceChange1YearGraph: IMediaAsset | null,
  returnSinceEvent: number | null,
  returnSinceEventColour: boolean | null,
  audio: IMediaAsset | null,
  video: IMediaAsset | null,
  content: any,
  audioArtist: IArtist | null,
  visualArtist: IArtist | null,
}