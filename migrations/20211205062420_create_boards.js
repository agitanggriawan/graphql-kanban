exports.up = async (knex) => {
  await knex.schema.createTable('boards', (t) => {
    t.increments('id').primary();
    t.string('bid').notNullable();
    t.string('name').notNullable();
    t.jsonb('image');
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('boards');
};
