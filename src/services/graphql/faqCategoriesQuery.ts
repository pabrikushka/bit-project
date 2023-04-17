import { gql } from "@apollo/client";

export const GET_ALL_FAQ_CATEGORIES = gql`
  query getAllFaqCategories {
    faqCategoriesCollection(order: [name_ASC]) {
      items {
        sys {
          id
        }
        name
      }
    }
  }
`;
