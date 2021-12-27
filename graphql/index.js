const { gql } = require('apollo-server-express');

const schemaUsers = require('./schemaUsers');
const schemaBoards = require('./schemaBoards');
const schemaCards = require('./schemaCards');

const resolverUsers = require('./resolverUsers');
const resolverBoards = require('./resolverBoards');
const resolverCards = require('./resolverCards');

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

const schemas = [baseSchema, schemaUsers, schemaBoards, schemaCards];
const resolvers = [resolverUsers, resolverBoards, resolverCards];

module.exports = {
  typeDefs: schemas,
  resolvers,
};
