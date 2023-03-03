import { gql } from "@apollo/client";
import { CORE_ARTS_FIELDS_FRAGMENT, CORE_ARTISTS_FIELDS_FRAGMENT } from "./sharedFragments";

export const GET_ART = gql`
  query getArt($id: String!) {
    arts(id: $id) {
      ...coreArtFileds
      arEnhanced
      video {
        url
        title
      }
      audio {
        url
        title
      }
      content {
        json
      }
      visualArtist {
         ... on Artists {
          ...coreArtitFileds
        }
      }
      audioArtist {
         ... on Artists {
          ...coreArtitFileds
        }
      }
    }
  }
  ${CORE_ARTS_FIELDS_FRAGMENT}
  ${CORE_ARTISTS_FIELDS_FRAGMENT}
`;
