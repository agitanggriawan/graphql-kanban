const { ApolloError } = require('apollo-server-express');
const { Board } = require('../models');

const resolvers = {
  Query: {
    boards: async (_, __, context) => {
      return Board.query()
        .joinRelated('users_boards')
        .where('users_boards.user_id', context.data.jwt.id)
        .orderBy('id', 'desc');
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
          card: {
            task: {
              0: {
                name: 'Backlog',
                items: [],
              },
              1: {
                name: 'To do',
                items: [],
              },
              2: {
                name: 'Doing',
                items: [],
              },
              3: {
                name: 'Done',
                items: [],
              },
              4: {
                name: 'Check',
                items: [],
              },
            },
          },
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
