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
    const artReleaseDate = artItem.artReleaseDate ? new Date(artItem.artReleaseDate) : null;

    // Get IsArtReleased Based On Dates
    const currentDate = new Date();
    const releaseDate = new Date(artItem.artReleaseDate);
    const artReleased = currentDate >= releaseDate;
    // const artReleased = artItem.artReleased === false ? false: true; // TODO: delete later
    const { title, btcPrice, overview } = artItem;

    const mainImage = toMediaAsset(artReleased? artItem.mainImage: artItem.glitchedImage);
    const thumbnail = toMediaAsset(artReleased? artItem.thumbnail: artItem.glitchedImage);

    return {
      id: artItem.sys.id,
      year: eventDate.getFullYear(),
      title,
      btcPrice,
      overview,
      eventDate,
      mainImage,
      thumbnail,
      artReleaseDate,
      artReleased,
      glitchedImage: toMediaAsset(artItem.glitchedImage),
    };
  };

  export {toMediaAsset, artItemToIArtBase}