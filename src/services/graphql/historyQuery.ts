import { gql } from "@apollo/client";

export const GET_WHOLE_HISTORY = gql`
  query getWholeHistory {
    artsCollection(order: [eventDate_ASC]) {
      items {
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
        video {
          url
          title
        }
        audio {
          url
          title
        }
      }
    }
  }
`;
