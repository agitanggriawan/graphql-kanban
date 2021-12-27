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
}

module.exports = Card;
