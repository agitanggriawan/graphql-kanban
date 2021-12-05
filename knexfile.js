module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      database: 'kanban_local',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  development: {
    client: 'postgresql',
    connection: {
      database: 'kanban_development',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString:
        'postgres://mohxjpjsdubzaz:bc87ff87aad7437e2720bee668c9977a922e69fdba97f9b1efcf9e351e4b5643@ec2-54-89-105-122.compute-1.amazonaws.com:5432/dcg4hb7g228f4p',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 10,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
