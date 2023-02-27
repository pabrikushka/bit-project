import { gql } from "@apollo/client";
import { CORE_ARTS_FIELDS_FRAGMENT } from "./sharedFragments";

export const GET_WHOLE_HISTORY = gql`
  query getWholeHistory {
    artsCollection(order: [eventDate_ASC]) {
      items {
        ...coreArtFileds
      }
    }
  }
  ${CORE_ARTS_FIELDS_FRAGMENT}
`;
