const { ApolloError } = require('apollo-server-express');
// const { yourModel } = require('your-model-path');

const resolvers = {
  Query: {
    authenticate: async (_, args) => {
      console.log('LOGIN');
      return {
        id: '1',
        uid: '1',
        username: '1',
        token: '1',
      };
    },
  },
};

module.exports = resolvers;
