import { ArtSlideData, IArtPiece } from "./types";
import honeybadger from "../../assets/images/honeybadger.jpg";
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
    audio: toMediaAsset(artItem.audio),
    video: toMediaAsset(artItem.video),
    content: artItem.content,
    audioArtistId: artItem.audioArtist?.sys.id,
    visualArtistId: artItem.visualArtist?.sys.id
  };
};

export { artBodyAnimationSettings, prepareArtSlides, artItemToIArtPiece };
