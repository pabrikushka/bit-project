import { ArtSlideData, IArtPiece } from "./types";
import honeybadger from "../../assets/images/honeybadger.jpg";
import { artItemToIArtBase, toMediaAsset } from "../../services/graphql/mappingHelpers";
import { IArtist, IVisualArtistGallery } from "./artistModal/types";

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

const toVisualArtistGallery = (visualArtistGallery: any): IVisualArtistGallery[] => {
  if (!visualArtistGallery) return [];
  return visualArtistGallery.items.filter((q: any) => q ? true: false).map((item: any) => ({
    id: item.sys.id,
    title: item.title,
    url: item.url,
    description: item.description,
  }));
};

const artistItemToIArtist = (artistItem: any): IArtist | null => {
  if(!artistItem) return null;
  const { name, role, description } = artistItem;
  return {
    id: artistItem.sys.id,
    name,
    role,
    description,
    website: artistItem.website,
    websiteUrl: artistItem.websiteUrl,
    spotify: artistItem.spotify,
    appleMusic: artistItem.appleMusic,
    soundcloud: artistItem.soundcloud,
    discord: artistItem.discord,
    instagram: artistItem.instagram,
    youTube: artistItem.youTube,
    mastodon: artistItem.mastodon,
    bandcamp: artistItem.bandcamp,
    openSea: artistItem.openSea,
    foundation: artistItem.foundation,
    superRare: artistItem.superRare,
    rairable: artistItem.rairable,
    avatar: toMediaAsset(artistItem.avatar),
    banner: toMediaAsset(artistItem.banner),
    visualArtistGalleryCollection: toVisualArtistGallery(artistItem.visualArtistGalleryCollection),
  };
};

const artItemToIArtPiece = (artItem: any): IArtPiece => {
  return {
    ...artItemToIArtBase(artItem),
    arEnhanced: artItem.arEnhanced,
    circulatingSupply: artItem.circulatingSupply,
    marketCap: artItem.marketCap,
    numberOfAddresses: artItem.numberOfAddresses,
    blockNumber: artItem.blockNumber,
    blockHeight: artItem.blockHeight,
    hashRate: artItem.hashRate,
    priceChange1Month: artItem.priceChange1Month,
    priceChange1MonthColour: artItem.priceChange1MonthColour,
    priceChange1MonthGraph: toMediaAsset(artItem.priceChange1MonthGraph),
    priceChange3Month: artItem.priceChange3Month,
    priceChange3MonthColour: artItem.priceChange3MonthColour,
    priceChange3MonthGraph: toMediaAsset(artItem.priceChange3MonthGraph),
    priceChange1Year: artItem.priceChange1Year,
    priceChange1YearColour: artItem.priceChange1YearColour,
    priceChange1YearGraph: toMediaAsset(artItem.priceChange1YearGraph),
    returnSinceEvent: artItem.returnSinceEvent,
    returnSinceEventColour: artItem.returnSinceEventColour,
    audio: toMediaAsset(artItem.audio),
    video: toMediaAsset(artItem.video),
    content: artItem.content,
    demoContent: artItem.demoContent,
    contentReleased: artItem.contentReleased,
    audioArtist: artistItemToIArtist(artItem.audioArtist),
    visualArtist: artistItemToIArtist(artItem.visualArtist),
    metaTitle: artItem.metaTitle,
    metaDescription: artItem.metaDescription,
    metaImage: toMediaAsset(artItem.metaImage),
    metaTags: artItem.metaTags,
  };
};

export { artBodyAnimationSettings, prepareArtSlides, artItemToIArtPiece };
