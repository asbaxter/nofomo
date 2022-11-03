import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      listings {
        listingId
        listingText
        createdAt
        username
        reviewCount
        reviews {
          reviewId
          reviewBody
          createdAt
          username
        }
      }
    }
  }
`;
