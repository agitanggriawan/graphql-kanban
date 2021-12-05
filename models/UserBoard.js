const BaseModel = require('./BaseModel');
const { generateUniqueId } = require('../utils');

class UserBoard extends BaseModel {
  static get tableName() {
    return 'users_boards';
  }

  $beforeInsert() {
    this.ubid = generateUniqueId();

    return true;
  }
}

module.exports = UserBoard;
