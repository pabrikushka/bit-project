import { ArtSlideData, AudioContainer, AudioLoadingStatuses, IArtPiece, VideoContainer, VideoLoadingStatuses } from "./types";
import honeybadgerLoop from "../../assets/videos/Honey-Badger-Loop.mp4";
import honeybadger from "../../assets/images/honeybadger.jpg";
import test500kb from "../../assets/audio/test500kb.mp3";
import { artItemToIArtBase, toMediaAsset } from "../../services/graphql/mappingHelpers";

const artBodyAnimationSettings = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0,
    duration: 0.5,
    ease: "easeOut",
  },
};

const preloadVideo = async (): Promise<VideoContainer> => {
  await new Promise((f) => setTimeout(f, 5000));
  return {
    video: honeybadgerLoop,
    videoLoadingStatus: VideoLoadingStatuses.loaded,
  };
};

const preloadAudio = async (): Promise<AudioContainer> => {
  await new Promise((f) => setTimeout(f, 5000));
  return {
    audio: test500kb,
    audioLoadingStatus: AudioLoadingStatuses.loaded,
  };
};

const prepareArtSlides = (): ArtSlideData[] => {
  return [
    {
      id: "1",
      image: honeybadger,
      description: "IRS declares bitcoin be taxed as property",
      dateStr: "March 25, 2014",
      priceStr: "1BTC:$438.89",
    },
    {
      id: "2",
      image: honeybadger,
      description: "Second slide",
      dateStr: "March 25, 2015",
      priceStr: "1BTC:$538.89",
    },
    {
      id: "3",
      image: honeybadger,
      description: "One more slide",
      dateStr: "March 30, 2014",
      priceStr: "1BTC:$638.89",
    },
  ];
};

const artItemToIArtPiece = (artItem: any): IArtPiece => {
  return {
    ...artItemToIArtBase(artItem),
    audio: toMediaAsset(artItem.mainImage),
    video: toMediaAsset(artItem.mainImage),
    content: artItem.content,
    audioArtistId: artItem.audioArtist?.sys.id,
    visualArtistId: artItem.visualArtist?.sys.id
  };
};

export { preloadVideo, preloadAudio, artBodyAnimationSettings, prepareArtSlides, artItemToIArtPiece };
