import { gql } from "@apollo/client";
import { CORE_ARTS_FIELDS_FRAGMENT, CORE_ARTISTS_FIELDS_FRAGMENT } from "./sharedFragments";

export const GET_ART = gql`
  query getArt($id: String!) {
    arts(id: $id) {
      ...coreArtFileds
      arEnhanced
      circulatingSupply
      marketCap
      numberOfAddresses
      blockNumber
      blockHeight
      hashRate
      priceChange1Month
      priceChange1MonthColour
      priceChange1MonthGraph {
        url
        title
      }
      priceChange3Month
      priceChange3MonthColour
      priceChange3MonthGraph {
        url
        title
      }
      priceChange1Year
      priceChange1YearColour
      priceChange1YearGraph {
        url
        title
      }
      returnSinceEvent
      returnSinceEventColour
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
      metaTitle
      metaDescription
      metaImage{
        url
        title
      }
      metaTags
    }
  }
  ${CORE_ARTS_FIELDS_FRAGMENT}
  ${CORE_ARTISTS_FIELDS_FRAGMENT}
`;
