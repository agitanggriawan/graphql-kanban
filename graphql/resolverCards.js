const { ApolloError } = require('apollo-server-express');
const { Card, Board } = require('../models');

const resolvers = {
  Query: {
    findCardByBid: async (_, args) => {
      try {
        return Card.query()
          .where(
            'board_id',
            Board.query().select('id').findOne({ bid: args.bid })
          )
          .first();
      } catch (error) {
        console.log('ERROR', error);
        throw new ApolloError(error, 'ERROR', null);
      }
    },
  },
  Mutation: {
    updateCard: async (_, args) => {
      try {
        console.log(args);
        const card = await Card.query().findOne({ cid: args.cid });

        return card.$query().patchAndFetch({ task: args.task });
      } catch (error) {
        console.log('ERROR', error);
        throw new ApolloError(error, 'ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
