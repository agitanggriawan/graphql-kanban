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

  static get relationMappings() {
    const User = require('./User');

    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users_boards.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = UserBoard;
