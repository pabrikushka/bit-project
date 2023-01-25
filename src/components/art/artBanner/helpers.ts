import { AudioContainer, AudioLoadingStatuses, AudioStatuses, VideoContainer, VideoLoadingStatuses, VideoStatuses } from "./types";
import honeybadgerLoop from "../../../assets/videos/Honey-Badger-Loop.mp4";
import test500kb from "../../../assets/audio/test500kb.mp3";


const preloadVideo = async (): Promise<VideoContainer> =>{

    await new Promise(f => setTimeout(f, 5000));
    return {
        video: honeybadgerLoop,
        videoLoadingStatus: VideoLoadingStatuses.loaded 
    }
}

const preloadAudio = async (): Promise<AudioContainer> =>{

    await new Promise(f => setTimeout(f, 5000));
    return {
        audio: test500kb,
        audioLoadingStatus: AudioLoadingStatuses.loaded 
    }
}

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
    preloadVideo,
    preloadAudio,
    chooseVideoStatus,
    chooseAudioStatus
}