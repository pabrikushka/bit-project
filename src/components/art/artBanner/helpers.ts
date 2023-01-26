import { AudioContainer, AudioLoadingStatuses, AudioStatuses, VideoContainer, VideoLoadingStatuses, VideoStatuses } from "../types";

const chooseVideoStatus = (videoLoadingStatus: VideoLoadingStatuses): VideoStatuses =>{
    switch (videoLoadingStatus) {
        case VideoLoadingStatuses.loaded:
            return VideoStatuses.playing
        default:
            return VideoStatuses.none
    }
}

const chooseAudioStatus = (videoLoadingStatus: AudioLoadingStatuses): AudioStatuses =>{
    switch (videoLoadingStatus) {
        case AudioLoadingStatuses.loaded:
            return AudioStatuses.mute
        default:
            return AudioStatuses.none
    }
}

export {
    chooseVideoStatus,
    chooseAudioStatus
}