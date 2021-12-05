const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    boards: [Board]
  }

  extend type Mutation {
    createBoard(data: InBoard!): Board
  }

  type Board {
    id: ID!
    bid: String!
    name: String!
    jsonb: JSON
    created_at: DateTime
    updated_at: DateTime
  }

  input InBoard {
    name: String!
    user_id: ID!
  }
`;

module.exports = typeDefs;
