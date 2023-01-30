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
  video: any;
}

export interface AudioContainer {
  audioLoadingStatus: AudioLoadingStatuses;
  audio: any;
}

export interface ArtSlideData {
    id: string,
    image: any,
    description: string,
    dateStr: string,
    priceStr: string
}