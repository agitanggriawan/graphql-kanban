const { faker } = require('@faker-js/faker');
const { generateUniqueId } = require('../utils');
const { Model, transaction } = require('objection');
const Knex = require('knex');
const { Board } = require('../models');
const knexConfig = require('../knexfile');
const environment = process.env.NODE_ENV || 'local';

Model.knex(Knex(knexConfig[environment]));

exports.seed = async (knex) => {
  const trxResult = await transaction(knex, async (trx) => {
    const data = [
      {
        name: faker.address.city(),
        users_boards: [
          {
            user_id: 1,
          },
        ],
        card: {
          task: {
            0: {
              name: 'Backlog',
              items: [
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
              ],
            },
            1: {
              name: 'To do',
              items: [
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
              ],
            },
            2: {
              name: 'Doing',
              items: [
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
              ],
            },
            3: {
              name: 'Done',
              items: [
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
              ],
            },
            4: {
              name: 'Check',
              items: [
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
                {
                  id: generateUniqueId(),
                  date: faker.date.past(),
                  tags: [faker.database.engine()],
                  title: faker.commerce.product(),
                  description: faker.lorem.paragraph(),
                },
              ],
            },
          },
        },
      },
    ];

    await Board.query(trx).insertGraph(data, { relate: true });
  });

  return trxResult;
};
