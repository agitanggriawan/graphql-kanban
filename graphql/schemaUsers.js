const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    authenticate(username: String!, password: String!): Token
  }

  type Token {
    id: ID!
    uid: String!
    username: String!
    token: String!
  }
`;

module.exports = typeDefs;
