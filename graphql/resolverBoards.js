const { ApolloError } = require('apollo-server-express');
const { Board } = require('../models');

const resolvers = {
  Query: {
    boards: async () => {
      return Board.query().orderBy('id', 'desc');
    },
  },
  Mutation: {
    createBoard: async (_, args) => {
      try {
        const data = {
          name: args.data.name,
          users_boards: [
            {
              user_id: args.data.user_id,
            },
          ],
        };

        return Board.query().insertGraphAndFetch(data);
      } catch (error) {
        console.log('ERROR', error);
        throw new ApolloError(error, 'ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
