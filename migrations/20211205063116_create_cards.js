exports.up = async (knex) => {
  await knex.schema.createTable('cards', (t) => {
    t.increments('id').primary();
    t.string('cid').notNullable();
    t.integer('board_id')
      .references('id')
      .inTable('boards')
      .index()
      .notNullable();
    t.jsonb('task').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('cards');
};
