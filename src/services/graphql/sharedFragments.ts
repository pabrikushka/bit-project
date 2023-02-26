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
  }
`;
