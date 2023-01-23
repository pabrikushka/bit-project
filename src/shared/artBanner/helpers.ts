import { VideoContainer, VideoLoadingStatuses, VideoStatuses } from "./types";
import honeybadgerLoop from "../../assets/videos/Honey-Badger-Loop.mp4";


const preloadVideo = async (): Promise<VideoContainer> =>{

    await new Promise(f => setTimeout(f, 5000));
    return {
        video: honeybadgerLoop,
        videoLoadingStatus: VideoLoadingStatuses.loaded 
    }
}

const chooseVideoStatus = (videoLoadingStatus: VideoLoadingStatuses): VideoStatuses =>{
    switch (videoLoadingStatus) {
        case VideoLoadingStatuses.loaded:
            return VideoStatuses.playing
        default:
            return VideoStatuses.loading
    }
}

export {
    preloadVideo,
    chooseVideoStatus
}