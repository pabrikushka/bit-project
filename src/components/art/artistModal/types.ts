import { IMediaAsset } from "../../../shared/types";

export interface IVisualArtistGallery extends IMediaAsset {
    id: string;
    description: string | null
}


export interface IArtist {
    id: string,
    name: string,
    role: string,
    description: string,
    website: string | null,
    websiteUrl: string | null,
    spotify: string | null,
    appleMusic: string | null,
    soundcloud: string | null,
    discord: string | null,
    instagram: string | null,
    youTube: string | null,
    twitter: string | null,
    mastodon: string | null,
    bandcamp: string | null,
    openSea: string | null,
    foundation: string | null,
    superRare: string | null,
    rairable: string | null,
    avatar: IMediaAsset | null,
    banner: IMediaAsset | null,
    visualArtistGalleryCollection: IVisualArtistGallery[]
  }