const bcrypt = require('bcrypt');
const BaseModel = require('./BaseModel');

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  checkPassword(password) {
    if (password) {
      const result = bcrypt.compareSync(password, this.password);

      return result;
    }

    return false;
  }

  static get relationMappings() {
    const UserBoard = require('./UserBoard');

    return {
      users_boards: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserBoard,
        join: {
          from: 'users.id',
          to: 'users_boards.user_id',
        },
      },
    };
  }
}

module.exports = User;
