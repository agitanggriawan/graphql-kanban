const bcrypt = require('bcrypt');
const { generateUniqueId } = require('../utils');

const data = [
  {
    uid: generateUniqueId(),
    username: 'admin',
    password: bcrypt.hashSync('mypassword', bcrypt.genSaltSync(10)),
  },
  {
    uid: generateUniqueId(),
    username: 'marketing',
    password: bcrypt.hashSync('mypassword', bcrypt.genSaltSync(10)),
  },
  {
    uid: generateUniqueId(),
    username: 'it',
    password: bcrypt.hashSync('mypassword', bcrypt.genSaltSync(10)),
  },
  {
    uid: generateUniqueId(),
    username: 'accounting',
    password: bcrypt.hashSync('mypassword', bcrypt.genSaltSync(10)),
  },
  {
    uid: generateUniqueId(),
    username: 'customer_service',
    password: bcrypt.hashSync('mypassword', bcrypt.genSaltSync(10)),
  },
];

exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(data);
    });
};
