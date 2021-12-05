const { gql } = require('apollo-server-express');

const schemaUsers = require('./schemaUsers');
const schemaBoards = require('./schemaBoards');

const resolverUsers = require('./resolverUsers');
const resolverBoards = require('./resolverBoards');

const baseSchema = gql`
  scalar Date
  scalar DateTime
  scalar Double
  scalar Upload
  scalar JSON

  type Query {
    version: String
  }

  type Mutation {
    base: String
  }
`;

const schemas = [baseSchema, schemaUsers, schemaBoards];
const resolvers = [resolverUsers, resolverBoards];

module.exports = {
  typeDefs: schemas,
  resolvers,
};
