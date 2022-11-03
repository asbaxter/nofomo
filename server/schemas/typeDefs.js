const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    listings: [Listing]
  }

  type Review {
    reviewId: ID!
    reviewBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Listing {
    listingId: ID!
    listingText: String
    createdAt: String
    username: String
    reviewCount: Int
    reviews: [Review]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    listings(username: String): [Listing]
    listing(_id: ID!): Listing
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addListing(listingText: String!): Listing
    addReview(username: String!, reviewBody: String!): Review
  }
`;
module.exports = typeDefs;
