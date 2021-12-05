exports.up = async (knex) => {
  await knex.schema.createTable('users_boards', (t) => {
    t.increments('id').primary();
    t.string('ubid').notNullable();
    t.integer('user_id')
      .references('id')
      .inTable('users')
      .index()
      .notNullable();
    t.integer('board_id')
      .references('id')
      .inTable('boards')
      .index()
      .notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users_boards');
};
