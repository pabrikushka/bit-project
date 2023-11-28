import { gql } from "@apollo/client";

export const CORE_ARTS_FIELDS_FRAGMENT = gql`
  fragment coreArtFileds on Arts {
    sys {
      id
    }
    title
    overview
    eventDate
    btcPrice
    thumbnail {
      url
      title
    }
    mainImage {
      url
      title
    }
    artReleaseDate
    artReleased
    glitchedImage {
      url
      title
    }
  }
`;

// TODO: Delete artReleased

export const CORE_ARTISTS_FIELDS_FRAGMENT = gql`
  fragment coreArtitFileds on Artists {
    sys {
      id
    }
    name
    role
    description
    website
    websiteUrl
    spotify
    appleMusic
    soundcloud
    discord
    instagram
    youTube
    twitter
    mastodon
    bandcamp
    openSea
    foundation
    superRare
    rairable
    avatar {
      url
      title
    }
    banner {
      url
      title
    }
    visualArtistGalleryCollection {
      items {
        sys{
          id
        }
        title
        url
        description
      }
    }
  }
`;
