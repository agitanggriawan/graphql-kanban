const BaseModel = require('./BaseModel');
const { generateUniqueId } = require('../utils');

class Board extends BaseModel {
  static get tableName() {
    return 'boards';
  }

  static get relationMappings() {
    const UserBoard = require('./UserBoard');
    const Card = require('./Card');
    const User = require('./User');

    return {
      users_boards: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserBoard,
        join: {
          from: 'boards.id',
          to: 'users_boards.board_id',
        },
      },
      card: {
        relation: BaseModel.HasOneRelation,
        modelClass: Card,
        join: {
          from: 'boards.id',
          to: 'cards.board_id',
        },
      },
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'boards.id',
          through: {
            from: 'users_boards.board_id',
            to: 'users_boards.user_id',
          },
          to: 'users.id',
        },
      },
    };
  }

  $beforeInsert() {
    this.bid = generateUniqueId();

    return true;
  }
}

module.exports = Board;
