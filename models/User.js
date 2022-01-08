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
}

module.exports = User;
