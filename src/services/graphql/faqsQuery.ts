import { gql } from "@apollo/client";

export const GET_ALL_FAQS = gql`
  query getAllFaqs {
    faqItemsCollection(order: [name_ASC]) {
      items {
        sys {
          id
        }
        name
        content
        category {
          sys {
            id
          }
          name
        }
      }
    }
  }
`;
