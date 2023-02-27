import { IArtBase, IMediaAsset } from "../../shared/types";

const toMediaAsset = (mediaData: any): IMediaAsset | null => {
    return mediaData
      ? {
          title: mediaData.title,
          url: mediaData.url,
        }
      : null;
  };
  
  const artItemToIArtBase = (artItem: any): IArtBase => {
    const eventDate = new Date(artItem.eventDate);
    const { title, btcPrice, overview } = artItem;
    return {
      id: artItem.sys.id,
      year: eventDate.getFullYear(),
      title,
      btcPrice,
      overview,
      eventDate,
      mainImage: toMediaAsset(artItem.mainImage),
      thumbnail: toMediaAsset(artItem.thumbnail),
    };
  };

  export {toMediaAsset, artItemToIArtBase}