export enum VideoStatuses {
    none,
    loading,
    playing,
    onPause,
  }
  export enum VideoLoadingStatuses {
    loading,
    loaded
  }  

export interface VideoContainer {
    videoLoadingStatus: VideoLoadingStatuses,
    video: any
}