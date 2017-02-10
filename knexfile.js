const databaseName = 'shopme';
const host = process.env.POSTGRES_HOST || 'db';
const port = process.env.POSTGRES_PORT || '5432';
const user = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'postgres';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: databaseName,
      host: host,
      port: port,
      user: user,
      password: password
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: databaseName + '_test',
      host: host,
      port: port,
      user: user,
      password: password
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
