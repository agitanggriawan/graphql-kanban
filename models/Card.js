const BaseModel = require('./BaseModel');
const { generateUniqueId } = require('../utils');

class Card extends BaseModel {
  static get tableName() {
    return 'cards';
  }

  $beforeInsert() {
    this.cid = generateUniqueId();

    return true;
  }

  static get relationMappings() {
    const Board = require('./Board');

    return {
      board: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Board,
        join: {
          from: 'cards.board_id',
          to: 'boards.id',
        },
      },
    };
  }
}

module.exports = Card;
