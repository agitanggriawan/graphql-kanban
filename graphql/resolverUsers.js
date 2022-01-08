const { ApolloError } = require('apollo-server-express');
const { User } = require('../models');
const { generateToken } = require('../utils');

const resolvers = {
  Query: {
    authenticate: async (_, args) => {
      console.log('==> Accessing authenticate');
      console.log('==> args', args);

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
  },
};

module.exports = resolvers;
