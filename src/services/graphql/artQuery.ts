import { gql } from "@apollo/client";
import { CORE_ARTS_FIELDS_FRAGMENT } from "./sharedFragments";

export const GET_ART = gql`
  query getArt($id: String!) {
    arts(id: $id) {
      ...coreArtFileds
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
        sys {
          id
        }
      }
      audioArtist {
        sys {
          id
        }
      }
    }
  }
  ${CORE_ARTS_FIELDS_FRAGMENT}
`;
