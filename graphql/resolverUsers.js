const { ApolloError } = require('apollo-server-express');
const { User, UserBoard, Board } = require('../models');
const { generateToken } = require('../utils');

const resolvers = {
  Query: {
    authenticate: async (_, args) => {
      console.log('==> Accessing authenticate');

      try {
        const user = await User.query().findOne({ username: args.username });

        if (user && user.checkPassword(args.password)) {
          const data = {
            id: user.id,
            username: user.username,
          };

          const token = generateToken(data);
          user.token = token;

          return user;
        }

        throw new ApolloError(
          'Username atau Password tidak sesuai',
          'INTERNAL_SERVER_ERROR',
          null
        );
      } catch (error) {
        console.log('==> Error Accessing authenticate', error);
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    users: async (_, args) => {
      console.log('board', args);
      return User.query()
        .modify((qb) => {
          if (args.board_id) {
            qb.whereNotIn(
              'id',
              UserBoard.query()
                .select('user_id')
                .where(
                  'board_id',
                  Board.query().select('id').findOne({ bid: args.board_id })
                )
            );
          }
        })
        .orderBy('username', 'asc');
    },
  },
};

module.exports = resolvers;
