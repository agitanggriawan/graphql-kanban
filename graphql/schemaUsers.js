const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    authenticate(username: String!, password: String!): Token
    users(board_id: ID): [User]
  }

  type Token {
    id: ID!
    uid: String!
    username: String!
    token: String!
  }

  type User {
    id: ID!
    username: String!
  }
`;

module.exports = typeDefs;
