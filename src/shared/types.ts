export interface IMediaAsset {
    title: string,
    url: string
}

export interface IArtBase {
  id: string,
  title: string,
  year: number,
  eventDate: Date,
  overview: string,
  btcPrice: number,
  mainImage: IMediaAsset | null,
  thumbnail: IMediaAsset | null,
  artReleased: boolean,
  artReleaseDate: Date | null,
  glitchedImage: IMediaAsset | null,
}

export interface ISEOProps {
  title: string | null;
  description: string | null;
  imageSrc: string | null;
  keywords: string[] | null;
}