const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const Knex = require('knex');
const { Model } = require('objection');

const { typeDefs, resolvers } = require('./graphql');
const knexConfig = require('./knexfile');
const { authorizeToken } = require('./utils');

const environment = process.env.NODE_ENV || 'local';
Model.knex(Knex(knexConfig[environment]));

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      const data = authorizeToken(req);

      return {
        data,
      };
    },
  });

  await server.start();
  server.applyMiddleware({
    app,
    bodyParserConfig: {
      limit: '20mb',
    },
    uploads: {
      maxFileSize: 2000,
      maxFiles: 5,
    },
    cors: true,
  });
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
