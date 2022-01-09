const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    boards: [Board]
  }

  extend type Mutation {
    createBoard(data: InBoard!): Board
    addMember(board_id: ID!, user_ids: [ID!]!): [JSON]
  }

  type Board {
    id: ID!
    bid: String!
    name: String!
    jsonb: JSON
    created_at: DateTime
    updated_at: DateTime
    users: [User]
  }

  input InBoard {
    name: String!
    user_id: ID!
  }
`;

module.exports = typeDefs;
