const BaseModel = require('./BaseModel');
const { generateUniqueId } = require('../utils');

class Board extends BaseModel {
  static get tableName() {
    return 'boards';
  }

  static get relationMappings() {
    const UserBoard = require('./UserBoard');

    return {
      users_boards: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserBoard,
        join: {
          from: 'boards.id',
          to: 'users_boards.board_id',
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
