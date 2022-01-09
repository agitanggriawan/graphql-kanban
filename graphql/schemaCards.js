const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    findCardByBid(bid: String!): Card
  }

  extend type Mutation {
    updateCard(cid: String!, task: JSON!): Card
  }

  type Card {
    id: ID!
    cid: String!
    task: JSON
    board: Board
  }
`;

module.exports = typeDefs;
