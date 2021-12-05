exports.up = async (knex) => {
  await knex.schema.createTable('activities', (t) => {
    t.increments('id').primary();
    t.string('aid').notNullable();
    t.integer('board_id')
      .references('id')
      .inTable('boards')
      .index()
      .notNullable();
    t.text('log');
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('activities');
};
